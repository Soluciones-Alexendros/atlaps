import Link from "next/link";

const NAV_LINKS = [
  { href: "/#pilares", label: "Pilares" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#precios", label: "Precios" },
  { href: "/#abp", label: "Atlaps Bridge" },
  { href: "/#faq", label: "Preguntas" },
] as const;

export function Header() {
  return (
    <header
      className="border-paper-grid/70 bg-paper-bone/85 supports-[backdrop-filter]:bg-paper-bone/70 sticky top-0 z-40 border-b backdrop-blur"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-blueprint-deep flex items-center gap-2 font-semibold tracking-tight"
          aria-label="Atlaps · inicio"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect
              x="3"
              y="3"
              width="22"
              height="22"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M3 14h22M14 3v22"
              stroke="currentColor"
              strokeOpacity="0.4"
              strokeWidth="1"
              strokeDasharray="2 3"
            />
            <circle cx="14" cy="14" r="3.2" fill="var(--color-amber-signal)" />
          </svg>
          <span className="text-base">Atlaps</span>
        </Link>

        <nav
          className="text-ink-pencil hidden items-center gap-7 text-sm md:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blueprint-deep transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#waitlist"
            className="text-ink-pencil hover:text-blueprint-deep hidden text-sm transition-colors md:inline-flex"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/#waitlist"
            className="bg-blueprint-deep text-paper-bone hover:bg-blueprint-mid inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors"
          >
            Crear cuenta gratis
          </Link>
        </div>
      </div>
    </header>
  );
}
