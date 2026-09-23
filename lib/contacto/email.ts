import { Payload } from "./types";

function htmlEscape(s: string) {
  return s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

export async function sendViaResend(
  p: Payload,
): Promise<{ ok: boolean; id?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACTO_TO ?? "contacto@alexendros.me";
  const from = process.env.CONTACTO_FROM ?? "Atlaps <noreply@atlaps.com>";

  if (!apiKey) {
    const isProd = process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production";
    if (isProd) {
      console.error("[contacto] RESEND_API_KEY ausente en producción — fail-closed");
      return { ok: false, error: "email_misconfigured" };
    }
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
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: p.email,
        subject,
        html,
      }),
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
