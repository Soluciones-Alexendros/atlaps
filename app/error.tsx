"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FocusTitle } from "./components/focus-title";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app] error de render");
  }, [error]);

  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-16">
      <FocusTitle className="text-4xl font-bold tracking-tight outline-none">
        Algo ha fallado
      </FocusTitle>
      <p className="text-ink-pencil mt-4 text-lg">
        No hemos podido completar la solicitud. Puedes reintentarlo o volver al inicio.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="border-blueprint-soft text-blueprint-deep hover:bg-blueprint-soft/10 inline-flex rounded-md border px-4 py-2 font-medium"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="border-paper-grid text-ink-graphite hover:bg-paper-grid/40 inline-flex rounded-md border px-4 py-2 font-medium"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
