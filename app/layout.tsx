import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlaps · Design System",
  description:
    "Sistema de diseño de Atlaps · Iniciativa Alexendros, S.L. · estética blueprint independiente.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" data-theme="light" suppressHydrationWarning>
      <body className="bg-paper-bone text-ink-graphite antialiased">
        {children}
      </body>
    </html>
  );
}
