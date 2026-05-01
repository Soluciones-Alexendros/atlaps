type Paso = {
  numero: string;
  titulo: string;
  bajada: string;
  detalle: string;
};

const PASOS: readonly Paso[] = [
  {
    numero: "01",
    titulo: "Diseña",
    bajada: "Topología sobre canvas blueprint.",
    detalle:
      "Importa tu proyecto KNX o parte de cero. Coloca dispositivos, define zonas y comprueba compatibilidad multi-protocolo en tiempo real.",
  },
  {
    numero: "02",
    titulo: "Compra",
    bajada: "Lista de material con compatibilidad.",
    detalle:
      "Atlaps calcula el BOM exacto, contrasta SKU canónicos y te muestra alternativas de segunda mano cuando aplique. Comisión declarada.",
  },
  {
    numero: "03",
    titulo: "Opera",
    bajada: "Atlas vivo de la instalación.",
    detalle:
      "Una vez instalado, conecta tu instalación al Atlaps Bridge Protocol y supervisa el funcionamiento real con voz local en castellano.",
  },
] as const;

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="border-b border-paper-grid/70 bg-paper-bone"
      aria-labelledby="como-funciona-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-blueprint-mid">Cómo funciona</p>
          <h2
            id="como-funciona-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-blueprint-deep md:text-4xl"
          >
            Tres pasos. Un único atlas.
          </h2>
        </header>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {PASOS.map((paso, idx) => (
            <li
              key={paso.numero}
              className="relative flex flex-col rounded-lg border border-paper-grid/80 bg-paper-bone/60 p-6"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="font-mono text-2xl font-bold text-amber-signal">
                  {paso.numero}
                </span>
                <h3 className="text-xl font-semibold text-blueprint-deep">{paso.titulo}</h3>
              </div>
              <p className="mt-2 text-sm font-medium text-blueprint-mid">{paso.bajada}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-pencil">{paso.detalle}</p>
              {idx < PASOS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-blueprint-soft/60 md:inline"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
