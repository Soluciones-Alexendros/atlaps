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

  const raw = await parseBody(req).catch(() => null);
  const v = validate(raw);
  if (!v.ok) return validationErrorResponse(v.error);

  if (v.data.website) {
    console.info("[contacto] honeypot activado", { ip });
    return honeypotResponse();
  }

  const r = await sendViaResend(v.data);
  if (!r.ok) return emailErrorResponse(r.error ?? "unknown");

  return successResponse(req, r.id);
}
