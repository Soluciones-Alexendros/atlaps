import { WaitlistForm } from "./waitlist-form";

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="border-paper-grid/70 bg-paper-bone border-b"
      aria-labelledby="waitlist-title"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.1fr]">
        <header>
          <p className="text-blueprint-mid text-xs tracking-widest uppercase">Lista de espera</p>
          <h2
            id="waitlist-title"
            className="text-blueprint-deep mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl"
          >
            Sé de los primeros en dibujar tu casa.
          </h2>
          <p className="text-ink-pencil mt-4 text-base leading-relaxed">
            La beta abre con 50 plazas en F1 (mayo 2026). Si te apuntas hoy te avisamos antes que a
            nadie y te garantizamos plaza Free de por vida si entras en las 50.
          </p>
          <ul className="text-ink-pencil mt-6 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="text-amber-signal mt-0.5">
                ●
              </span>
              <span>Sin spam · 1 correo cada 2-3 semanas máximo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="text-amber-signal mt-0.5">
                ●
              </span>
              <span>Sin tarjeta · te apuntas con un correo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true" className="text-amber-signal mt-0.5">
                ●
              </span>
              <span>Tus datos viven en Supabase autoalojado en Hetzner UE.</span>
            </li>
          </ul>
        </header>

        <div className="border-paper-grid bg-paper-bone rounded-lg border p-6 shadow-sm">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
