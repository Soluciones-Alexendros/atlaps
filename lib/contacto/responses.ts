import { NextRequest, NextResponse } from "next/server";

export function rateLimitResponse(retryAfter: number | undefined) {
  return NextResponse.json(
    { ok: false, error: "demasiadas peticiones" },
    { status: 429, headers: { "Retry-After": String(retryAfter ?? 60) } },
  );
}

export function validationErrorResponse(error: string) {
  return NextResponse.json({ ok: false, error }, { status: 400 });
}

export function emailErrorResponse(error: string) {
  return NextResponse.json({ ok: false, error }, { status: 502 });
}

export function honeypotResponse() {
  return NextResponse.json({ ok: true });
}

export function successResponse(req: NextRequest, id?: string) {
  const accept = req.headers.get("accept") ?? "";
  if (!accept.includes("application/json")) {
    return NextResponse.redirect(new URL("/socios/?ok=1", req.url), 303);
  }
  return NextResponse.json({ ok: true, id });
}
