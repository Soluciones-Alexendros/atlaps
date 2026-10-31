import type { ReactNode } from "react";

type PortalErrorChromeProps = {
  children: ReactNode;
  brand: ReactNode;
  repo: ReactNode;
};

/**
 * Cabecera + pie del portal para páginas de error.
 * Colores vía --surface-* (tema claro/oscuro), sin hex fijos en el contenedor.
 */
export function PortalErrorChrome({ children, brand, repo }: PortalErrorChromeProps) {
  return (
    <div className="min-h-dvh bg-[var(--surface-bg)] text-[var(--surface-fg)]">
      <main id="main" className="mx-auto max-w-3xl px-6 py-16">
        <header className="border-b border-[var(--surface-border)] pb-8">
          <p className="font-display text-2xl font-bold tracking-tight">{brand}</p>
          <p className="mt-1 text-sm text-[var(--surface-muted)]">
            Atlas de aplicaciones domóticas multi-protocolo · Iniciativa Alexendros, S.L.
          </p>
        </header>

        <div className="mt-12">{children}</div>

        <footer className="mt-16 border-t border-[var(--surface-border)] pt-8 text-sm text-[var(--surface-muted)]">
          <p>© 2026 Iniciativa Alexendros, S.L. · Comunitat Valenciana · Repo privado: {repo}</p>
        </footer>
      </main>
    </div>
  );
}
