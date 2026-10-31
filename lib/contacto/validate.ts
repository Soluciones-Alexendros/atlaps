import { z } from "zod";
import { Payload } from "./types";

const VIA_VALUES = ["inversion", "advisor", "integrador", "distribucion", "piloto"] as const;

type ValidationResult = { ok: true; data: Payload } | { ok: false; error: string };

const contactoSchema = z
  .object({
    name: z.string().trim().min(2).max(200),
    email: z
      .string()
      .trim()
      .max(254)
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    via: z.enum(VIA_VALUES),
    rgpd: z.union([z.literal(true), z.literal("on")]),
    company: z.string().trim().max(200).optional().default(""),
    msg: z.string().trim().max(5000).optional().default(""),
    hp_fax_number: z.string().optional(),
    website: z.string().optional(),
  })
  .transform((b) => {
    const website = (b.hp_fax_number?.trim() || b.website?.trim() || "") as string;
    return {
      name: b.name,
      email: b.email,
      via: b.via,
      rgpd: true as const,
      company: b.company ?? "",
      msg: b.msg ?? "",
      website,
    };
  });

function mapZodError(err: z.ZodError): string {
  const issue = err.issues[0];
  if (!issue) return "payload inválido";
  const path = issue.path[0];
  if (path === "name") return "nombre requerido (2-200 caracteres)";
  if (path === "email") return "email inválido";
  if (path === "via") return "vía de interés inválida";
  if (path === "rgpd") return "es necesario aceptar el tratamiento RGPD";
  if (path === "company") return "empresa demasiado larga";
  if (path === "msg") return "mensaje demasiado largo (máx. 5000)";
  return "payload inválido";
}

export function validate(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "payload inválido" };
  }

  const parsed = contactoSchema.safeParse(body);
  if (!parsed.success) {
    return { ok: false, error: mapZodError(parsed.error) };
  }

  return { ok: true, data: parsed.data };
}
