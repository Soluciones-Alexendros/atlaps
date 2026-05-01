import { WaitlistForm } from "./waitlist-form";

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="border-b border-paper-grid/70 bg-paper-bone"
      aria-labelledby="waitlist-title"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.1fr]">
        <header>
          <p className="text-xs uppercase tracking-widest text-blueprint-mid">Lista de espera</p>
          <h2
            id="waitlist-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-blueprint-deep md:text-4xl"
          >
            Sé de los primeros en dibujar tu casa.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-pencil">
            La beta abre con 50 plazas en F1 (mayo 2026). Si te apuntas hoy te avisamos antes que a
            nadie y te garantizamos plaza Free de por vida si entras en las 50.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-pencil">
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-0.5 text-amber-signal">
                ●
              </span>
              <span>Sin spam · 1 correo cada 2-3 semanas máximo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-0.5 text-amber-signal">
                ●
              </span>
              <span>Sin tarjeta · te apuntas con un correo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-0.5 text-amber-signal">
                ●
              </span>
              <span>Tus datos viven en Supabase autoalojado en Hetzner UE.</span>
            </li>
          </ul>
        </header>

        <div className="rounded-lg border border-paper-grid bg-paper-bone p-6 shadow-sm">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
