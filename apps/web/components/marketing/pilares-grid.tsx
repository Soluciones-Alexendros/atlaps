type Pilar = {
  id: string;
  nombre: string;
  tagline: string;
  descripcion: string;
  estado: "F1" | "F2" | "F3" | "F4" | "F4-F6";
};

const PILARES: readonly Pilar[] = [
  {
    id: "planificador",
    nombre: "Planificador",
    tagline: "Canvas blueprint y BOM",
    descripcion:
      "Dibuja la topología, importa proyectos KNX, exporta a Home Assistant y genera memoria profesional en PDF, DXF e IFC.",
    estado: "F1",
  },
  {
    id: "mercado",
    nombre: "Mercado",
    tagline: "Catálogo + segunda mano",
    descripcion:
      "Catálogo SKU canónico con compatibilidad multi-protocolo y mercado de segunda mano para pymes instaladoras.",
    estado: "F2",
  },
  {
    id: "monitor",
    nombre: "Monitor",
    tagline: "Operación en tiempo real",
    descripcion:
      "Vista única de la instalación viva sobre Atlaps Bridge Protocol (ABP, Apache-2.0). Telemetría sin lock-in.",
    estado: "F3",
  },
  {
    id: "sugerencias",
    nombre: "Sugerencias",
    tagline: "Comisiones declaradas",
    descripcion:
      "Daemon de recomendaciones con comisión visible en cada sugerencia. Transparencia radical sobre conflictos de interés.",
    estado: "F2",
  },
  {
    id: "comtubernia",
    nombre: "ComtubernIA",
    tagline: "Voz 100 % local UE",
    descripcion:
      "Whisper-large-v3 ES + Piper TTS + openWakeWord. Sin nube, sin telemetría, sin export de audio fuera del hogar.",
    estado: "F4-F6",
  },
] as const;

export function PilaresGrid() {
  return (
    <section
      id="pilares"
      className="border-paper-grid/70 bg-paper-bone border-b"
      aria-labelledby="pilares-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="max-w-2xl">
          <p className="text-blueprint-mid text-xs tracking-widest uppercase">Cinco pilares</p>
          <h2
            id="pilares-title"
            className="text-blueprint-deep mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl"
          >
            Aplicaciones independientes que arrollan cooperativamente.
          </h2>
          <p className="text-ink-pencil mt-4 text-base">
            Cada pilar resuelve una parte del ciclo diseño → compra → operación por sí mismo.
            Juntos, conforman el atlas.
          </p>
        </header>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILARES.map((pilar) => (
            <li
              key={pilar.id}
              className="group border-paper-grid/80 bg-paper-bone/60 hover:border-blueprint-soft/60 relative flex flex-col rounded-lg border p-6 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-blueprint-deep text-lg font-semibold">{pilar.nombre}</h3>
                <span
                  className="border-blueprint-soft/40 text-blueprint-mid rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase"
                  aria-label={`Disponibilidad fase ${pilar.estado}`}
                >
                  {pilar.estado}
                </span>
              </div>
              <p className="text-blueprint-mid mt-1 text-sm font-medium">{pilar.tagline}</p>
              <p className="text-ink-pencil mt-4 text-sm leading-relaxed">{pilar.descripcion}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
