"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FocusTitle } from "./components/focus-title";
import { PortalErrorShell } from "./components/portal-error-shell";

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
    <PortalErrorShell>
      <FocusTitle className="font-display text-4xl font-bold tracking-tight">
        Algo ha fallado
      </FocusTitle>
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
        <Link
          href="/"
          className="inline-flex rounded-md border border-[var(--surface-border)] px-4 py-2 font-medium text-[var(--surface-muted)] hover:bg-[var(--surface-border)]/40"
        >
          Volver al inicio
        </Link>
      </div>
    </PortalErrorShell>
  );
}
