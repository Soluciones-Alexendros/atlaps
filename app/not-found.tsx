import type { Metadata } from "next";
import Link from "next/link";
import { FocusTitle } from "./components/focus-title";
import { PortalErrorShell } from "./components/portal-error-shell";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PortalErrorShell>
      <FocusTitle className="font-display text-4xl font-bold tracking-tight">
        Página no encontrada
      </FocusTitle>
      <p className="mt-4 text-lg text-[var(--surface-muted)]">
        No hemos encontrado lo que buscas. Puede que el enlace esté desactualizado o que la
        dirección no exista.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="inline-flex rounded-md border border-[var(--surface-accent-border)] px-4 py-2 font-medium text-[var(--surface-link)] hover:bg-[var(--surface-accent-border)]/10"
        >
          Volver al inicio
        </Link>
      </p>
    </PortalErrorShell>
  );
}
