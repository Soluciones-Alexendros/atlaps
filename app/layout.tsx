import type { Metadata, Viewport } from "next";
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

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("atlaps-theme");
    var prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored === "light" || stored === "dark" ? stored : (prefers ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-surface="marketing" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-paper-bone text-ink-graphite antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-blueprint-soft focus:bg-paper-bone focus:px-4 focus:py-2 focus:text-blueprint-deep focus:outline-none focus:ring-2 focus:ring-blueprint-soft"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
