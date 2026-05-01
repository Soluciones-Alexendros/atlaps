import Link from "next/link";

const COLUMNS = [
  {
    title: "Producto",
    links: [
      { href: "/#pilares", label: "Pilares" },
      { href: "/#como-funciona", label: "Cómo funciona" },
      { href: "/#precios", label: "Precios" },
      { href: "/#abp", label: "Atlaps Bridge Protocol" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "/docs/manifiesto", label: "Manifiesto" },
      { href: "/docs/sobre-iniciativa", label: "Sobre Iniciativa Alexendros" },
      { href: "/docs/faq-extendida", label: "Preguntas extendidas" },
      { href: "https://github.com/Alexendros", label: "GitHub", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacidad" },
      { href: "/legal/terms", label: "Términos" },
      { href: "/legal/cookies", label: "Cookies" },
      { href: "/legal/imprint", label: "Aviso legal" },
    ],
  },
] as const;

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-paper-grid/70 bg-paper-bone border-t" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link
              href="/"
              className="text-blueprint-deep flex items-center gap-2 font-semibold"
              aria-label="Atlaps · inicio"
            >
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="22"
                  height="22"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="14" cy="14" r="3.2" fill="var(--color-amber-signal)" />
              </svg>
              Atlaps
            </Link>
            <p className="text-ink-pencil mt-4 max-w-sm text-sm">
              Atlas SaaS de domótica multi-protocolo. Soberanía europea, voz local y protocolo
              abierto.
            </p>
            <p className="text-ink-pencil mt-6 font-mono text-xs">
              Iniciativa Alexendros, S.L.
              <br />
              CIF B-en trámite · Comunitat Valenciana, España
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-blueprint-mid text-xs font-medium tracking-widest uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((link) => {
                  const external = "external" in link && link.external;
                  if (external) {
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink-pencil hover:text-blueprint-deep transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  }
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-ink-pencil hover:text-blueprint-deep transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-paper-grid/70 text-ink-pencil mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 text-xs md:flex-row md:items-center">
          <p>© {CURRENT_YEAR} Iniciativa Alexendros, S.L. — Hecho en Europa.</p>
          <div className="flex items-center gap-3" aria-label="Idioma">
            <span className="border-blueprint-soft/40 text-blueprint-mid rounded-full border px-3 py-1 font-mono text-[11px]">
              ES · default
            </span>
            <span className="text-ink-pencil font-mono text-[11px]">EN (próximamente)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
