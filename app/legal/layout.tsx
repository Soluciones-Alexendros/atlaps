import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-16">
      <nav className="text-ink-pencil mb-8 text-sm">
        <Link href="/" className="underline">
          Atlaps
        </Link>
        {" · "}
        <Link href="/socios/" className="underline">
          Socios
        </Link>
        {" · "}
        <span>Legal</span>
      </nav>
      <article className="prose-legal space-y-6">{children}</article>
      <footer className="border-paper-grid text-ink-pencil mt-16 border-t pt-6 text-sm">
        <p>Iniciativa Alexendros, S.L. · Comunitat Valenciana · contacto@alexendros.me</p>
        <p className="mt-2 flex flex-wrap gap-4">
          <Link href="/legal/aviso-legal" className="underline">
            Aviso legal
          </Link>
          <Link href="/legal/privacidad" className="underline">
            Privacidad
          </Link>
          <Link href="/legal/cookies" className="underline">
            Cookies
          </Link>
          <Link href="/legal/nda-reciproco" className="underline">
            NDA recíproco
          </Link>
        </p>
      </footer>
    </main>
  );
}
