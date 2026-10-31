import { NextRequest, NextResponse } from "next/server";

function buildCsp(nonce: string, opts: { allowUnsafeInlineStyle: boolean }) {
  const styleSrc = opts.allowUnsafeInlineStyle
    ? `style-src 'self' 'unsafe-inline'`
    : `style-src 'self' 'nonce-${nonce}'`;
  return [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    styleSrc,
    `img-src 'self' data: blob:`,
    `font-src 'self'`,
    `connect-src 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ].join("; ");
}

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // CSP de bloqueo (producción actual): style-src con 'unsafe-inline'.
  const cspEnforce = buildCsp(nonce, { allowUnsafeInlineStyle: true });
  // Informe estricto en paralelo: sin 'unsafe-inline' en script-src ni style-src.
  const cspReportOnly = buildCsp(nonce, { allowUnsafeInlineStyle: false });

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("content-security-policy", cspEnforce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("content-security-policy", cspEnforce);
  response.headers.set("content-security-policy-report-only", cspReportOnly);
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico|socios).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
