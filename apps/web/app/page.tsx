export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-16">
      <header className="border-paper-grid border-b pb-8">
        <p className="text-ink-pencil text-xs tracking-widest uppercase">
          apps/web · scaffold W1 · Día L
        </p>
        <h1 className="text-blueprint-deep mt-3 text-5xl font-bold tracking-tight">Atlaps</h1>
        <p className="text-ink-pencil mt-4 text-xl">Tu casa inteligente, dibujada como un atlas.</p>
        <p className="text-ink-pencil mt-2 text-sm">
          Diseña la topología, calcula el material y opera la instalación. Multi-protocolo (KNX,
          Matter, Zigbee y 5 más), voz local UE y un atlas vivo en castellano.
        </p>
      </header>

      <section className="mt-12 space-y-3">
        <h2 className="text-2xl font-semibold">Estado del scaffold</h2>
        <ul className="text-ink-pencil space-y-2 text-sm">
          <li>✅ Workspace pnpm activo (apps/* + packages/*)</li>
          <li>✅ Next.js 15.5.15 · React 19.2.5 · TypeScript 5.9.3</li>
          <li>✅ Tailwind v4 + tokens del design system Vergina/Atlaps</li>
          <li>⏳ Día M (9-may): Header + Hero + Pilares + Footer</li>
          <li>⏳ Día X (10-may): 12 secciones del brief §A</li>
          <li>⏳ Día J (11-may): /api/waitlist + Resend</li>
          <li>⏳ Día V (12-may): i18n es/en + sitemap + 3 MDX</li>
          <li>⏳ Día S (13-may): tests · CI · Vercel preview</li>
          <li>⏳ Día D (14-may): hardening · go-live atlaps.com</li>
        </ul>
      </section>

      <footer className="border-paper-grid text-ink-pencil mt-16 border-t pt-6 text-xs">
        Iniciativa Alexendros, S.L. · Bootstrap F0 · Comunitat Valenciana
      </footer>
    </main>
  );
}
