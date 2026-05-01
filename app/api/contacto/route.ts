import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true };
  }
  if (bucket.count >= RATE_LIMIT_MAX) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true };
}

const VIA_VALUES = new Set(["inversion", "advisor", "integrador", "distribucion", "piloto"]);

type Payload = {
  name: string;
  email: string;
  company?: string;
  via: string;
  msg?: string;
  rgpd: boolean;
  website?: string;
};

function validate(body: unknown): { ok: true; data: Payload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "payload inválido" };
  const b = body as Record<string, unknown>;

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const via = typeof b.via === "string" ? b.via : "";
  const rgpd = b.rgpd === true || b.rgpd === "on";
  const company = typeof b.company === "string" ? b.company.trim() : "";
  const msg = typeof b.msg === "string" ? b.msg.trim() : "";
  // Acepta tanto el name nuevo (hp_fax_number) como el legacy (website) por idempotencia.
  const website =
    typeof b.hp_fax_number === "string"
      ? b.hp_fax_number.trim()
      : typeof b.website === "string"
        ? b.website.trim()
        : "";

  if (name.length < 2 || name.length > 200)
    return { ok: false, error: "nombre requerido (2-200 caracteres)" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
    return { ok: false, error: "email inválido" };
  if (!VIA_VALUES.has(via)) return { ok: false, error: "vía de interés inválida" };
  if (!rgpd) return { ok: false, error: "es necesario aceptar el tratamiento RGPD" };
  if (company.length > 200) return { ok: false, error: "empresa demasiado larga" };
  if (msg.length > 5000) return { ok: false, error: "mensaje demasiado largo (máx. 5000)" };

  return { ok: true, data: { name, email, company, via, msg, rgpd, website } };
}

function htmlEscape(s: string) {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

async function sendViaResend(p: Payload): Promise<{ ok: boolean; id?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACTO_TO ?? "contacto@alexendros.me";
  const from = process.env.CONTACTO_FROM ?? "Atlaps <noreply@atlaps.com>";

  if (!apiKey) {
    console.info("[contacto] RESEND_API_KEY ausente — modo mock", {
      to,
      from,
      payload: { ...p, website: undefined },
    });
    return { ok: true, id: "mock" };
  }

  const subject = `[Atlaps · socios] ${p.via} — ${p.name}`;
  const html = `
    <h2>Nueva solicitud desde /socios</h2>
    <table style="font-family:system-ui;border-collapse:collapse">
      <tr><td><strong>Nombre</strong></td><td>${htmlEscape(p.name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${htmlEscape(p.email)}</td></tr>
      <tr><td><strong>Empresa</strong></td><td>${htmlEscape(p.company ?? "")}</td></tr>
      <tr><td><strong>Vía</strong></td><td>${htmlEscape(p.via)}</td></tr>
    </table>
    <h3>Mensaje</h3>
    <pre style="white-space:pre-wrap;font-family:system-ui">${htmlEscape(p.msg ?? "")}</pre>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: p.email, subject, html }),
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error("[contacto] Resend error", res.status, errText);
      return { ok: false, error: `resend ${res.status}` };
    }
    const json = (await res.json()) as { id?: string };
    return { ok: true, id: json.id };
  } catch (err) {
    console.error("[contacto] fetch error", err);
    return { ok: false, error: "network" };
  }
}

async function parseBody(req: NextRequest): Promise<unknown> {
  const ct = req.headers.get("content-type") ?? "";
  if (ct.includes("application/json")) return req.json();
  if (ct.includes("application/x-www-form-urlencoded") || ct.includes("multipart/form-data")) {
    const form = await req.formData();
    return Object.fromEntries(form.entries());
  }
  return null;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "anon";
  const rl = rateLimit(ip);
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, error: "demasiadas peticiones" },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter ?? 60) } },
    );
  }

  const raw = await parseBody(req).catch(() => null);
  const v = validate(raw);
  if (!v.ok) return NextResponse.json({ ok: false, error: v.error }, { status: 400 });

  if (v.data.website) {
    console.info("[contacto] honeypot activado", { ip });
    return NextResponse.json({ ok: true });
  }

  const r = await sendViaResend(v.data);
  if (!r.ok) return NextResponse.json({ ok: false, error: r.error ?? "unknown" }, { status: 502 });

  const accept = req.headers.get("accept") ?? "";
  if (!accept.includes("application/json")) {
    return NextResponse.redirect(new URL("/socios/?ok=1", req.url), 303);
  }
  return NextResponse.json({ ok: true, id: r.id });
}
