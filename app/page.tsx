export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">
        Atlaps · Design System
      </h1>
      <p className="mt-4 text-lg text-ink-pencil">
        Estética blueprint independiente. Iniciativa Alexendros, S.L.
      </p>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Showcase v0</h2>
        <p>
          El showcase actual está en{" "}
          <code className="rounded bg-paper-grid px-1.5 py-0.5">
            Atlaps Design System.html
          </code>{" "}
          (página única autocontenida generada por Design de Claude).
        </p>
        <p>
          Próximo: portar a este App Router con tokens en{" "}
          <code className="rounded bg-paper-grid px-1.5 py-0.5">
            app/globals.css
          </code>{" "}
          y componentes en{" "}
          <code className="rounded bg-paper-grid px-1.5 py-0.5">
            components/ui
          </code>
          .
        </p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Documentos</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <a
              href="/design-system/BRIEF-DESIGN-SYSTEM.md"
              className="text-blueprint-soft underline"
            >
              Brief design system
            </a>
          </li>
          <li>
            <a
              href="/design-system/BRIEF-PROTOTYPE.md"
              className="text-blueprint-soft underline"
            >
              Brief prototipo landing+app
            </a>
          </li>
          <li>
            <a
              href="/design-system/TOKENS.md"
              className="text-blueprint-soft underline"
            >
              Referencia de tokens
            </a>
          </li>
          <li>
            <a
              href="/docs/ADR-007-marca-independiente-blueprint.md"
              className="text-blueprint-soft underline"
            >
              ADR 007 · marca independiente blueprint
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
