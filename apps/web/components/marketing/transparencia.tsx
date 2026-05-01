type Pilar = {
  titulo: string;
  cuerpo: string;
  evidencia: string;
};

const PILARES: readonly Pilar[] = [
  {
    titulo: "Self-host UE por defecto",
    cuerpo:
      "Datos en Hetzner Falkenstein (DE) o tu propio servidor. Sin paso por EE. UU. Sin Cloudflare WAF en datos sensibles.",
    evidencia: "Hetzner CX32 · Frankfurt o Falkenstein · cumple GDPR sin SCC adicional.",
  },
  {
    titulo: "Voz 100 % local",
    cuerpo:
      "ComtubernIA escucha y responde sin enviar audio a la nube. Whisper-large-v3 ES + Piper TTS + openWakeWord en una caja en tu casa.",
    evidencia: "Modelos abiertos · binarios reproducibles · sin telemetría.",
  },
  {
    titulo: "Comisiones declaradas",
    cuerpo:
      "Cada sugerencia del Mercado muestra el porcentaje exacto que recibimos del fabricante o distribuidor. Conflictos de interés impresos.",
    evidencia: "Daemon de sugerencias con campo `commission_pct` obligatorio · auditable.",
  },
  {
    titulo: "ABP open-source",
    cuerpo:
      "El protocolo y la implementación de referencia son Apache-2.0. Si te vas, tu instalación sigue funcionando con ABP solo.",
    evidencia: "Repositorio público · spec versionada · tests de conformidad.",
  },
] as const;

export function Transparencia() {
  return (
    <section
      id="transparencia"
      className="border-b border-paper-grid/70 bg-paper-bone"
      aria-labelledby="transparencia-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-blueprint-mid">
            Transparencia radical
          </p>
          <h2
            id="transparencia-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-blueprint-deep md:text-4xl"
          >
            Cuatro promesas que se pueden auditar.
          </h2>
          <p className="mt-3 text-sm text-ink-pencil">
            No prometemos lo que no podemos probar. Cada promesa abajo viene con la evidencia
            técnica concreta.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PILARES.map((pilar) => (
            <article
              key={pilar.titulo}
              className="rounded-lg border-l-2 border-amber-signal bg-paper-bone/60 p-6"
            >
              <h3 className="text-lg font-semibold text-blueprint-deep">{pilar.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-pencil">{pilar.cuerpo}</p>
              <p className="mt-4 font-mono text-[12px] text-blueprint-mid">{pilar.evidencia}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
