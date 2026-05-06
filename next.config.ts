import type { NextConfig } from "next";

// OWASP Secure Headers — la CSP se emite por petición desde middleware.ts (nonce-based).
// Estos headers son estáticos y aplican a TODAS las rutas, incluyendo el bundle estático
// rewriteado de /socios/index.html.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  async rewrites() {
    return [
      { source: "/socios", destination: "/socios/index.html" },
      { source: "/socios/", destination: "/socios/index.html" },
    ];
  },
  async headers() {
    // CSP estática para /socios/ (rewrite a HTML estático, fuera del flujo middleware nonce).
    // El bundle UMD de /socios/ no contiene scripts inline → 'self' es suficiente, sin nonce.
    const sociosCsp = [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; ");
    return [
      {
        source: "/socios/:path*",
        headers: [...securityHeaders, { key: "Content-Security-Policy", value: sociosCsp }],
      },
      { source: "/(.*)", headers: securityHeaders },
    ];
  },
};

export default nextConfig;
