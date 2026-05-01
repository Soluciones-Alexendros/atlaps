const SLOTS = [
  {
    rol: "Instalador KNX · Comunitat Valenciana",
    perfil: "Estudio domótica · 12 años de oficio",
  },
  {
    rol: "Arquitecto técnico · Catalunya",
    perfil: "Rehabilitación · proyectos certificación A",
  },
  {
    rol: "Pyme rehabilitación · Madrid",
    perfil: "8 técnicos · 30 obras/año",
  },
] as const;

export function Testimonios() {
  return (
    <section
      id="testimonios"
      className="border-b border-paper-grid/70 bg-paper-bone"
      aria-labelledby="testimonios-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-blueprint-mid">Voces del oficio</p>
          <h2
            id="testimonios-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-blueprint-deep md:text-4xl"
          >
            Quienes ya están dibujando con nosotros.
          </h2>
          <p className="mt-3 text-sm text-ink-pencil">
            Reservamos tres huecos para los primeros instaladores y estudios que validen Atlaps en
            obra real durante F1.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SLOTS.map((slot, idx) => (
            <article
              key={idx}
              data-testimonial-slot={idx + 1}
              className="flex flex-col rounded-lg border border-dashed border-paper-grid bg-paper-bone/40 p-6"
              aria-label={`Testimonio ${idx + 1} · plaza reservada`}
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-blueprint-mid">
                Plaza {idx + 1} · reservada
              </p>
              <blockquote className="mt-4 text-sm italic leading-relaxed text-ink-pencil">
                Tu testimonio aquí. Si validas Atlaps en una obra real durante F1, te reservamos
                esta plaza con tu nombre, foto y tres líneas que tú mismo redactes.
              </blockquote>
              <footer className="mt-6 border-t border-paper-grid pt-4">
                <p className="text-sm font-medium text-blueprint-deep">{slot.rol}</p>
                <p className="text-xs text-ink-pencil">{slot.perfil}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
