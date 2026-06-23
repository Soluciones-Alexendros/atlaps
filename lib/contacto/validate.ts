import { Payload } from "./types";

const VIA_VALUES = new Set(["inversion", "advisor", "integrador", "distribucion", "piloto"]);

type ValidationResult = { ok: true; data: Payload } | { ok: false; error: string };

function getString(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  return undefined;
}

function validateName(name: string): true | string {
  if (name.length < 2 || name.length > 200) {
    return "nombre requerido (2-200 caracteres)";
  }
  return true;
}

function validateEmail(email: string): true | string {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return "email inválido";
  }
  return true;
}

function validateVia(via: string): true | string {
  if (!VIA_VALUES.has(via)) return "vía de interés inválida";
  return true;
}

function validateRgpd(rgpd: boolean): true | string {
  if (!rgpd) return "es necesario aceptar el tratamiento RGPD";
  return true;
}

function validateCompany(company: string): true | string {
  if (company.length > 200) return "empresa demasiado larga";
  return true;
}

function validateMsg(msg: string): true | string {
  if (msg.length > 5000) return "mensaje demasiado largo (máx. 5000)";
  return true;
}

export function validate(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "payload inválido" };
  }
  const b = body as Record<string, unknown>;

  const name = getString(b.name)?.trim() ?? "";
  const email = getString(b.email)?.trim() ?? "";
  const via = getString(b.via) ?? "";
  const rgpd = b.rgpd === true || b.rgpd === "on";
  const company = getString(b.company)?.trim() ?? "";
  const msg = getString(b.msg)?.trim() ?? "";
  // Acepta tanto el name nuevo (hp_fax_number) como el legacy (website) por idempotencia.
  const website = getString(b.hp_fax_number)?.trim() ?? getString(b.website)?.trim() ?? "";

  const nameError = validateName(name);
  if (nameError !== true) return { ok: false, error: nameError };

  const emailError = validateEmail(email);
  if (emailError !== true) return { ok: false, error: emailError };

  const viaError = validateVia(via);
  if (viaError !== true) return { ok: false, error: viaError };

  const rgpdError = validateRgpd(rgpd);
  if (rgpdError !== true) return { ok: false, error: rgpdError };

  const companyError = validateCompany(company);
  if (companyError !== true) return { ok: false, error: companyError };

  const msgError = validateMsg(msg);
  if (msgError !== true) return { ok: false, error: msgError };

  return { ok: true, data: { name, email, company, via, msg, rgpd, website } };
}
