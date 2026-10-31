import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { sendViaResend, parseBody, rateLimit } = vi.hoisted(() => ({
  sendViaResend: vi.fn(),
  parseBody: vi.fn(),
  rateLimit: vi.fn(),
}));

vi.mock("@/lib/contacto/email", () => ({ sendViaResend }));
vi.mock("@/lib/contacto/body", () => ({ parseBody }));
vi.mock("@/lib/rate-limit", () => ({ rateLimit }));

import { POST } from "../route";

function makeReq(opts: { ip?: string; accept?: string; url?: string } = {}): Request {
  const headers = new Headers();
  if (opts.ip) headers.set("x-forwarded-for", opts.ip);
  headers.set("accept", opts.accept ?? "application/json");
  return new Request(opts.url ?? "http://atlaps.example.invalid/api/contacto", {
    method: "POST",
    headers,
  });
}

describe("POST /api/contacto", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    rateLimit.mockReturnValue({ ok: true });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("responde 429 si el rate limit bloquea", async () => {
    rateLimit.mockReturnValue({ ok: false, retryAfter: 42 });
    const res = await POST(makeReq({ ip: "203.0.113.10" }) as never);
    expect(res.status).toBe(429);
    await expect(res.json()).resolves.toEqual({ ok: false, error: "demasiadas peticiones" });
    expect(res.headers.get("Retry-After")).toBe("42");
  });

  it("responde 400 si el cuerpo no se puede leer", async () => {
    parseBody.mockRejectedValue(new Error("boom"));
    const res = await POST(makeReq() as never);
    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({ ok: false, error: "payload inválido" });
  });

  it("responde 400 si la validación falla", async () => {
    parseBody.mockResolvedValue({ name: "x" });
    const res = await POST(makeReq() as never);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.ok).toBe(false);
  });

  it("honeypot responde ok sin enviar correo", async () => {
    parseBody.mockResolvedValue({
      name: "Bot",
      email: "bot@example.invalid",
      via: "piloto",
      rgpd: true,
      website: "spam",
    });
    const res = await POST(makeReq() as never);
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true });
    expect(sendViaResend).not.toHaveBeenCalled();
  });

  it("éxito JSON con id de envío", async () => {
    parseBody.mockResolvedValue({
      name: "Ana Ejemplo",
      email: "ana@example.invalid",
      via: "piloto",
      rgpd: true,
      company: "",
      msg: "hola",
      website: "",
    });
    sendViaResend.mockResolvedValue({ ok: true, id: "msg_test" });
    const res = await POST(makeReq() as never);
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true, id: "msg_test" });
  });

  it("502 si Resend falla", async () => {
    parseBody.mockResolvedValue({
      name: "Ana Ejemplo",
      email: "ana@example.invalid",
      via: "piloto",
      rgpd: true,
      company: "",
      msg: "hola",
      website: "",
    });
    sendViaResend.mockResolvedValue({ ok: false, error: "network" });
    const res = await POST(makeReq() as never);
    expect(res.status).toBe(502);
    await expect(res.json()).resolves.toEqual({
      ok: false,
      error: "no se pudo enviar el mensaje; inténtalo más tarde",
    });
  });
});
