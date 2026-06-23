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
      className="border-paper-grid/70 bg-paper-bone border-b"
      aria-labelledby="testimonios-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="max-w-2xl">
          <p className="text-blueprint-mid text-xs tracking-widest uppercase">Voces del oficio</p>
          <h2
            id="testimonios-title"
            className="text-blueprint-deep mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl"
          >
            Quienes ya están dibujando con nosotros.
          </h2>
          <p className="text-ink-pencil mt-3 text-sm">
            Reservamos tres huecos para los primeros instaladores y estudios que validen Atlaps en
            obra real durante F1.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SLOTS.map((slot, idx) => (
            <article
              key={idx}
              data-testimonial-slot={idx + 1}
              className="border-paper-grid bg-paper-bone/40 flex flex-col rounded-lg border border-dashed p-6"
              aria-label={`Testimonio ${idx + 1} · plaza reservada`}
            >
              <p className="text-blueprint-mid font-mono text-[11px] tracking-wider uppercase">
                Plaza {idx + 1} · reservada
              </p>
              <blockquote className="text-ink-pencil mt-4 text-sm leading-relaxed italic">
                Tu testimonio aquí. Si validas Atlaps en una obra real durante F1, te reservamos
                esta plaza con tu nombre, foto y tres líneas que tú mismo redactes.
              </blockquote>
              <footer className="border-paper-grid mt-6 border-t pt-4">
                <p className="text-blueprint-deep text-sm font-medium">{slot.rol}</p>
                <p className="text-ink-pencil text-xs">{slot.perfil}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
