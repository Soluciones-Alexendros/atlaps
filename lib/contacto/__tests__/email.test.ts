import { afterEach, describe, expect, it, vi } from "vitest";
import { sendViaResend } from "../email";

const sample = {
  name: "Test Ejemplo",
  email: "contacto@example.invalid",
  via: "piloto",
  company: "",
  msg: "hola",
  rgpd: true,
  website: "",
};

describe("sendViaResend", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("returns mock in development when RESEND_API_KEY is missing", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("VERCEL_ENV", "development");
    delete process.env.RESEND_API_KEY;

    const r = await sendViaResend(sample);
    expect(r).toEqual({ ok: true, id: "mock" });
  });

  it("fails closed in production when RESEND_API_KEY is missing", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("VERCEL_ENV", "production");
    delete process.env.RESEND_API_KEY;

    const r = await sendViaResend(sample);
    expect(r.ok).toBe(false);
    expect(r.error).toBe("email_misconfigured");
  });
});
