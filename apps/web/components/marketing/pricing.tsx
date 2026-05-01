import Link from "next/link";

type Plan = {
  id: string;
  nombre: string;
  precio: string;
  unidad: string;
  bajada: string;
  features: readonly string[];
  cta: string;
  destacado: boolean;
};

const PLANES: readonly Plan[] = [
  {
    id: "free",
    nombre: "Free",
    precio: "0 €",
    unidad: "para siempre",
    bajada: "Para autoinstaladores curiosos.",
    features: [
      "1 proyecto · hasta 30 dispositivos",
      "Canvas blueprint y BOM",
      "Export PDF y Home Assistant YAML",
      "Comunidad GitHub",
    ],
    cta: "Empezar gratis",
    destacado: false,
  },
  {
    id: "solo",
    nombre: "Solo",
    precio: "24,90 €",
    unidad: "/ mes · IVA aparte",
    bajada: "Para autónomos e instaladores que viven del oficio.",
    features: [
      "Proyectos ilimitados · hasta 300 dispositivos cada uno",
      "Import KNX · export DXF · IFC",
      "Memoria profesional firmable",
      "Mercado: precio neto + 2.ª mano",
      "Soporte en castellano · L-V",
    ],
    cta: "Probar 14 días",
    destacado: true,
  },
  {
    id: "studio",
    nombre: "Studio",
    precio: "59 €",
    unidad: "/ mes · IVA aparte",
    bajada: "Para estudios y pymes con varios técnicos.",
    features: [
      "Hasta 5 colaboradores · Yjs realtime",
      "Catálogo SKU privado y plantillas",
      "ABP self-host con licencia comercial",
      "ComtubernIA voz local incluida",
      "SLA respuesta 24 h",
    ],
    cta: "Hablar con ventas",
    destacado: false,
  },
] as const;

export function Pricing() {
  return (
    <section
      id="precios"
      className="border-b border-paper-grid/70 bg-paper-bone"
      aria-labelledby="precios-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-blueprint-mid">Precios</p>
          <h2
            id="precios-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-blueprint-deep md:text-4xl"
          >
            Sin tarjeta, sin sorpresas, IVA aparte.
          </h2>
          <p className="mt-3 text-sm text-ink-pencil">
            Precios públicos en euros. Cancelación al final del mes en curso. Cambio de plan
            inmediato.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANES.map((plan) => (
            <article
              key={plan.id}
              aria-label={`Plan ${plan.nombre}`}
              className={
                plan.destacado
                  ? "relative flex flex-col rounded-lg border-2 border-blueprint-deep bg-paper-bone p-6 shadow-md"
                  : "relative flex flex-col rounded-lg border border-paper-grid/80 bg-paper-bone/60 p-6"
              }
            >
              {plan.destacado && (
                <span className="absolute -top-3 left-6 rounded-full bg-amber-signal px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper-bone">
                  Recomendado
                </span>
              )}
              <h3 className="text-2xl font-semibold text-blueprint-deep">{plan.nombre}</h3>
              <p className="mt-1 text-sm text-ink-pencil">{plan.bajada}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-blueprint-deep">{plan.precio}</span>
                <span className="text-xs text-ink-pencil">{plan.unidad}</span>
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-ink-pencil">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-0.5 text-amber-signal">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#waitlist"
                className={
                  plan.destacado
                    ? "mt-8 inline-flex items-center justify-center rounded-md bg-blueprint-deep px-4 py-2.5 text-sm font-medium text-paper-bone transition-colors hover:bg-blueprint-mid"
                    : "mt-8 inline-flex items-center justify-center rounded-md border border-blueprint-soft/50 px-4 py-2.5 text-sm font-medium text-blueprint-deep transition-colors hover:bg-paper-grid/40"
                }
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
