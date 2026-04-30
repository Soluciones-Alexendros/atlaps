export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="border-b border-paper-grid pb-8">
        <h1 className="text-4xl font-bold tracking-tight">Atlaps</h1>
        <p className="mt-3 text-lg text-ink-pencil">
          Atlas de aplicaciones domóticas multi-protocolo · Iniciativa
          Alexendros, S.L.
        </p>
        <p className="mt-1 text-sm text-ink-pencil">
          Bootstrap F0 · 4-may-2026 · Comunitat Valenciana
        </p>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Apps</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="/socios/"
              className="block rounded-md border border-paper-grid bg-paper-bone p-4 hover:border-blueprint-soft"
            >
              <strong className="text-blueprint-deep">apps/socios</strong>{" "}
              <span className="text-amber-signal">· vivo</span>{" "}
              <span className="text-ink-pencil">
                — Presentación privada para socios y colaboradores. Ruta:{" "}
                <code>/socios/</code>
              </span>
            </a>
          </li>
          <li>
            <div className="rounded-md border border-paper-grid p-4 opacity-70">
              <strong className="text-blueprint-deep">apps/web</strong>{" "}
              <span className="text-ink-pencil">· placeholder F1</span>
              <span className="block text-ink-pencil text-sm">
                Landing pública atlaps.com — pendiente de construir.
              </span>
            </div>
          </li>
          <li>
            <div className="rounded-md border border-paper-grid p-4 opacity-70">
              <strong className="text-blueprint-deep">apps/platform</strong>{" "}
              <span className="text-ink-pencil">· placeholder F1-F4</span>
              <span className="block text-ink-pencil text-sm">
                App autenticada (Planificador, Mercado, Monitor, Sugerencias,
                ComtubernIA) — pendiente de construir.
              </span>
            </div>
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Packages</h2>
        <ul className="space-y-3">
          <li>
            <div className="rounded-md border border-paper-grid bg-paper-bone p-4">
              <strong className="text-blueprint-deep">
                packages/design-system
              </strong>{" "}
              <span className="text-amber-signal">· v0</span>
              <span className="block text-ink-pencil text-sm">
                Showcase, tokens, logo, iconografía, motion, ui_kits y preview.
                Ver <code>packages/design-system/showcase.html</code> y{" "}
                <code>tokens.css</code>.
              </span>
            </div>
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Documentación</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>ADRs:</strong>{" "}
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              docs/adr/
            </code>
            <span className="text-ink-pencil">
              {" "}
              — decisiones de arquitectura (007 marca, próximamente 008
              tipografía dual)
            </span>
          </li>
          <li>
            <strong>Briefs:</strong>{" "}
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              docs/briefs/
            </code>
            <span className="text-ink-pencil">
              {" "}
              — instrucciones para Design de Claude (design-system, prototype,
              landing-socios)
            </span>
          </li>
          <li>
            <strong>Tokens:</strong>{" "}
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              docs/tokens.md
            </code>
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Recursos compartidos</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              public/fonts/
            </code>{" "}
            <span className="text-ink-pencil">
              — 7 WOFF2 self-host (Fraunces, Inter, Inter Tight, Geist,
              JetBrains Mono, IBM Plex Mono 400/500). SIL OFL 1.1.
            </span>
          </li>
          <li>
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              public/logos/
            </code>{" "}
            <span className="text-ink-pencil">
              — SVG (icon, horizontal, vertical) compartidos entre apps.
            </span>
          </li>
        </ul>
      </section>

      <footer className="mt-16 border-t border-paper-grid pt-8 text-sm text-ink-pencil">
        <p>
          © 2026 Iniciativa Alexendros, S.L. · Comunitat Valenciana · Repo
          privado:{" "}
          <a
            href="https://github.com/Alexendros/Atlaps"
            className="text-blueprint-soft underline"
          >
            github.com/Alexendros/Atlaps
          </a>
        </p>
      </footer>
    </main>
  );
}
