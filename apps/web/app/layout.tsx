import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlaps.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Atlaps · Tu casa inteligente, dibujada como un atlas",
    template: "%s · Atlaps",
  },
  description:
    "Atlas SaaS de domótica multi-protocolo (KNX, Matter, Zigbee, Z-Wave, Modbus, BACnet, IP, DALI). Diseña, compra y opera tu instalación con voz local UE.",
  applicationName: "Atlaps",
  authors: [{ name: "Iniciativa Alexendros, S.L." }],
  generator: "Next.js",
  keywords: [
    "domótica",
    "KNX",
    "Matter",
    "Zigbee",
    "Z-Wave",
    "Modbus",
    "BACnet",
    "casa inteligente",
    "smart home",
    "atlas SaaS",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Atlaps",
    title: "Atlaps · Tu casa inteligente, dibujada como un atlas",
    description:
      "Diseña la topología, calcula el material y opera la instalación. Multi-protocolo, voz local UE y atlas vivo en castellano.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlaps",
    description: "Tu casa inteligente, dibujada como un atlas. Multi-protocolo, voz local UE.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1a2e" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <a
          href="#main"
          className="focus:bg-blueprint-deep focus:text-paper-bone sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
