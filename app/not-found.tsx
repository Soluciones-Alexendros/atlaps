import type { Metadata } from "next";
import Link from "next/link";
import { FocusTitle } from "./components/focus-title";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-16">
      <FocusTitle className="text-4xl font-bold tracking-tight outline-none">
        Página no encontrada
      </FocusTitle>
      <p className="text-ink-pencil mt-4 text-lg">
        No hemos encontrado lo que buscas. Puede que el enlace esté desactualizado o que la
        dirección no exista.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="border-blueprint-soft text-blueprint-deep hover:bg-blueprint-soft/10 inline-flex rounded-md border px-4 py-2 font-medium"
        >
          Volver al inicio
        </Link>
      </p>
    </main>
  );
}
