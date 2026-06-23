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
      className="border-paper-grid/70 bg-paper-bone border-b"
      aria-labelledby="precios-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="max-w-2xl">
          <p className="text-blueprint-mid text-xs tracking-widest uppercase">Precios</p>
          <h2
            id="precios-title"
            className="text-blueprint-deep mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl"
          >
            Sin tarjeta, sin sorpresas, IVA aparte.
          </h2>
          <p className="text-ink-pencil mt-3 text-sm">
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
                  ? "border-blueprint-deep bg-paper-bone relative flex flex-col rounded-lg border-2 p-6 shadow-md"
                  : "border-paper-grid/80 bg-paper-bone/60 relative flex flex-col rounded-lg border p-6"
              }
            >
              {plan.destacado && (
                <span className="bg-amber-signal text-paper-bone absolute -top-3 left-6 rounded-full px-3 py-1 font-mono text-[11px] tracking-wider uppercase">
                  Recomendado
                </span>
              )}
              <h3 className="text-blueprint-deep text-2xl font-semibold">{plan.nombre}</h3>
              <p className="text-ink-pencil mt-1 text-sm">{plan.bajada}</p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-blueprint-deep text-4xl font-bold">{plan.precio}</span>
                <span className="text-ink-pencil text-xs">{plan.unidad}</span>
              </p>
              <ul className="text-ink-pencil mt-6 space-y-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span aria-hidden="true" className="text-amber-signal mt-0.5">
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
                    ? "bg-blueprint-deep text-paper-bone hover:bg-blueprint-mid mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors"
                    : "border-blueprint-soft/50 text-blueprint-deep hover:bg-paper-grid/40 mt-8 inline-flex items-center justify-center rounded-md border px-4 py-2.5 text-sm font-medium transition-colors"
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
