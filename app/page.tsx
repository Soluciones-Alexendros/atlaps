export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="border-b border-paper-grid pb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Atlaps · Design System
        </h1>
        <p className="mt-3 text-lg text-ink-pencil">
          Atlas SaaS de domótica multi-protocolo · Iniciativa Alexendros, S.L.
        </p>
        <p className="mt-1 text-sm text-ink-pencil">
          Estética blueprint independiente · v0.1 · 2026-04-30
        </p>
      </header>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Páginas vivas</h2>
        <ul className="space-y-3">
          <li>
            <a
              href="/socios/"
              className="block rounded-md border border-paper-grid bg-paper-bone p-4 hover:border-blueprint-soft"
            >
              <strong className="text-blueprint-deep">/socios/</strong>{" "}
              <span className="text-ink-pencil">
                — Presentación para socios y colaboradores (confidencial v0.1)
              </span>
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Recursos del repo</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              Atlaps Design System.html
            </code>
            <span className="text-ink-pencil">
              {" "}
              — showcase navegable single-page (offline)
            </span>
          </li>
          <li>
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              tokens.css
            </code>
            <span className="text-ink-pencil">
              {" "}
              — tokens Tailwind v4 @theme
            </span>
          </li>
          <li>
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              public/fonts/
            </code>
            <span className="text-ink-pencil">
              {" "}
              — 7 WOFF2 self-host (Fraunces, Inter, Inter Tight, JetBrains Mono,
              Geist, IBM Plex Mono)
            </span>
          </li>
          <li>
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              ui_kits/
            </code>
            <span className="text-ink-pencil">
              {" "}
              — landing pública y mock de app (en repo)
            </span>
          </li>
          <li>
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              preview/
            </code>
            <span className="text-ink-pencil">
              {" "}
              — 5 tarjetas del panel Design System (en repo)
            </span>
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Documentación</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Briefs:</strong>{" "}
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              design-system/BRIEF-DESIGN-SYSTEM.md
            </code>
            ,{" "}
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              BRIEF-PROTOTYPE.md
            </code>
            ,{" "}
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              BRIEF-LANDING-SOCIOS.md
            </code>
          </li>
          <li>
            <strong>Tokens:</strong>{" "}
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              design-system/TOKENS.md
            </code>
          </li>
          <li>
            <strong>ADR 007 marca:</strong>{" "}
            <code className="rounded bg-paper-grid px-1.5 py-0.5">
              docs/ADR-007-marca-independiente-blueprint.md
            </code>
          </li>
        </ul>
      </section>

      <footer className="mt-16 border-t border-paper-grid pt-8 text-sm text-ink-pencil">
        <p>
          © 2026 Iniciativa Alexendros, S.L. · Comunitat Valenciana ·
          Documentación interna · Repo:{" "}
          <code>~/Apps/design-system_atlaps/</code>
        </p>
      </footer>
    </main>
  );
}
