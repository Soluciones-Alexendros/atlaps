import { NextRequest } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { parseBody } from "@/lib/contacto/body";
import { validate } from "@/lib/contacto/validate";
import { sendViaResend } from "@/lib/contacto/email";
import {
  rateLimitResponse,
  validationErrorResponse,
  emailErrorResponse,
  honeypotResponse,
  successResponse,
} from "@/lib/contacto/responses";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "anon";

  const rl = rateLimit(ip);
  if (!rl.ok) return rateLimitResponse(rl.retryAfter);

  let raw: unknown;
  try {
    raw = await parseBody(req);
  } catch {
    // Mismo contrato JSON que un body ilegible → validate(null).
    return validationErrorResponse("payload inválido");
  }
  const v = validate(raw);
  if (!v.ok) return validationErrorResponse(v.error);

  if (v.data.website) {
    console.info("[contacto] honeypot activado");
    return honeypotResponse();
  }

  const r = await sendViaResend(v.data);
  if (!r.ok) {
    // Mensaje genérico: sin proveedor, estado HTTP ni trazas.
    return emailErrorResponse("no se pudo enviar el mensaje; inténtalo más tarde");
  }

  return successResponse(req, r.id);
}
