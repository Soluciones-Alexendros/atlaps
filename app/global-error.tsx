"use client";

import { useEffect, useRef } from "react";
import "./globals.css";
import { PortalErrorChrome } from "./components/portal-error-chrome";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    try {
      const stored = localStorage.getItem("atlaps-theme");
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = stored === "light" || stored === "dark" ? stored : prefers ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
    } catch {
      /* ignore */
    }
    titleRef.current?.focus();
  }, []);

  return (
    <html lang="es" data-surface="marketing" suppressHydrationWarning>
      <body className="antialiased">
        <PortalErrorChrome
          brand={
            // eslint-disable-next-line @next/next/no-html-link-for-pages -- root layout ausente
            <a href="/" className="text-[var(--surface-fg)] no-underline hover:underline">
              Atlaps
            </a>
          }
          repo={
            <a
              href="https://github.com/Alexendros/Atlaps"
              className="text-[var(--surface-link)] underline"
            >
              github.com/Alexendros/Atlaps
            </a>
          }
        >
          <h1
            ref={titleRef}
            tabIndex={-1}
            className="font-display text-4xl font-bold tracking-tight"
          >
            Algo ha fallado
          </h1>
          <p className="mt-4 text-lg text-[var(--surface-muted)]">
            No hemos podido completar la solicitud. Puedes reintentarlo o volver al inicio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reset}
              className="inline-flex rounded-md border border-[var(--surface-accent-border)] px-4 py-2 font-medium text-[var(--surface-link)] hover:bg-[var(--surface-accent-border)]/10"
            >
              Reintentar
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- root layout ausente */}
            <a
              href="/"
              className="inline-flex rounded-md border border-[var(--surface-border)] px-4 py-2 font-medium text-[var(--surface-muted)] hover:bg-[var(--surface-border)]/40"
            >
              Volver al inicio
            </a>
          </div>
        </PortalErrorChrome>
      </body>
    </html>
  );
}
