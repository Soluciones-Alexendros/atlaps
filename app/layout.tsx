import type { Metadata, Viewport } from "next";
import { cookies, headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://atlaps.local";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default: "Atlaps", template: "%s · Atlaps" },
  description:
    "Atlas de aplicaciones domóticas multi-protocolo · Iniciativa Alexendros, S.L.",
  applicationName: "Atlaps",
  authors: [{ name: "Iniciativa Alexendros, S.L." }],
  generator: "Next.js",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Atlaps",
    title: "Atlaps · Atlas de aplicaciones domóticas multi-protocolo",
    description: "Tu casa inteligente, dibujada como un atlas.",
    images: [
      { url: "/logos/horizontal.svg", width: 1200, height: 630, alt: "Atlaps" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlaps",
    description:
      "Atlas de aplicaciones domóticas multi-protocolo · Iniciativa Alexendros, S.L.",
    images: ["/logos/horizontal.svg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F1E8" },
    { media: "(prefers-color-scheme: dark)", color: "#0F2A4A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Visual-review de global-error: cookie de sesión, sin ruta pública.
  if ((await cookies()).get("atlaps-force-global-error")?.value === "1") {
    throw new Error("preview-global-error");
  }
  // CSP nonce-based con 'strict-dynamic': el `<Script>` debe llevar el mismo
  // nonce emitido por proxy.ts (header x-nonce). Sin esto, en producción
  // `theme-init.js` y otros scripts user-defined son bloqueados por la CSP.
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  return (
    <html lang="es" data-surface="marketing" suppressHydrationWarning>
      <head>
        {/* CSP-safe theme init: archivo estático same-origin con nonce. */}
        <Script
          src="/theme-init.js"
          strategy="beforeInteractive"
          nonce={nonce}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:border focus:border-[var(--surface-accent-border)] focus:bg-[var(--surface-bg)] focus:px-4 focus:py-2 focus:text-[var(--surface-link)] focus:ring-2 focus:ring-[var(--surface-accent-border)] focus:outline-none"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
