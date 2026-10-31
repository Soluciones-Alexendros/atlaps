"use client";

import { useEffect, useRef } from "react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  return (
    <html lang="es">
      <body className="bg-paper-bone text-ink-graphite antialiased">
        <main id="main" className="mx-auto max-w-3xl px-6 py-16">
          <h1
            ref={titleRef}
            tabIndex={-1}
            className="text-4xl font-bold tracking-tight outline-none"
          >
            Algo ha fallado
          </h1>
          <p className="mt-4 text-lg">
            No hemos podido completar la solicitud. Puedes reintentarlo o volver al inicio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reset}
              className="inline-flex rounded-md border px-4 py-2 font-medium"
            >
              Reintentar
            </button>
            {/* global-error sustituye el root layout: Link de next no aplica aquí */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- root layout ausente */}
            <a href="/" className="inline-flex rounded-md border px-4 py-2 font-medium">
              Volver al inicio
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
