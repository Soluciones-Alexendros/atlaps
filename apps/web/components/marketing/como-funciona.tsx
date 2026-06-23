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
      className="border-paper-grid/70 bg-paper-bone border-b"
      aria-labelledby="como-funciona-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="max-w-2xl">
          <p className="text-blueprint-mid text-xs tracking-widest uppercase">Cómo funciona</p>
          <h2
            id="como-funciona-title"
            className="text-blueprint-deep mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl"
          >
            Tres pasos. Un único atlas.
          </h2>
        </header>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {PASOS.map((paso, idx) => (
            <li
              key={paso.numero}
              className="border-paper-grid/80 bg-paper-bone/60 relative flex flex-col rounded-lg border p-6"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="text-amber-signal font-mono text-2xl font-bold">
                  {paso.numero}
                </span>
                <h3 className="text-blueprint-deep text-xl font-semibold">{paso.titulo}</h3>
              </div>
              <p className="text-blueprint-mid mt-2 text-sm font-medium">{paso.bajada}</p>
              <p className="text-ink-pencil mt-4 text-sm leading-relaxed">{paso.detalle}</p>
              {idx < PASOS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-blueprint-soft/60 absolute top-1/2 -right-4 hidden -translate-y-1/2 text-2xl md:inline"
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
