type FaqItem = {
  pregunta: string;
  respuesta: string;
};

const PREGUNTAS: readonly FaqItem[] = [
  {
    pregunta: "¿Necesito hardware específico para usar Atlaps?",
    respuesta:
      "No. El Planificador funciona en el navegador. Para el Monitor en F3 necesitarás un mini-PC en casa (Raspberry Pi 5 o equivalente) con ABP. Sin obligación de comprar hardware nuestro.",
  },
  {
    pregunta: "¿Puedo autoalojar todo el stack?",
    respuesta:
      "Sí. Studio incluye licencia comercial para self-host de Supabase + Trigger.dev + ABP. Free y Solo usan nuestro Hetzner UE; Studio puede mover el backend a tu propio servidor.",
  },
  {
    pregunta: "¿La capa gratuita es de verdad gratis?",
    respuesta:
      "Sí, sin tarjeta. 1 proyecto y hasta 30 dispositivos. Si tu proyecto crece, te avisamos antes de bloquear. No vendemos datos ni mostramos publicidad.",
  },
  {
    pregunta: "¿Cómo es la migración desde Home Assistant?",
    respuesta:
      "Importas tu configuración YAML y Atlaps reconstruye el atlas. Mantienes HA como motor de operación si quieres, o migras al Monitor cuando esté disponible en F3.",
  },
  {
    pregunta: "Soy autónomo · ¿la facturación se ajusta?",
    respuesta:
      "Sí. Solo y Studio se emiten con factura completa (NIF, IVA, IRPF si aplica). Modelos 035/369 OSS para clientes en otros países UE. Pagas con tarjeta o transferencia SEPA.",
  },
  {
    pregunta: "¿Qué pasa con LATAM?",
    respuesta:
      "Castellano peninsular en F0-F4 sin voseo. Localización rioplatense, mexicana y catalana en mes 10-13 cuando abramos LATAM. ABP es global desde el día uno.",
  },
  {
    pregunta: "¿El Atlaps Bridge Protocol es realmente abierto?",
    respuesta:
      "Apache-2.0. Spec, implementación de referencia y SDKs en GitHub. Si Atlaps cierra mañana, tu instalación sigue operando con ABP solo.",
  },
  {
    pregunta: "¿Cómo es el soporte?",
    respuesta:
      "Solo: foro y email en castellano L-V con respuesta en 48 h. Studio: SLA respuesta 24 h y videollamada cuando hace falta. Free: comunidad GitHub.",
  },
] as const;

export function Faq() {
  return (
    <section
      id="faq"
      className="border-b border-paper-grid/70 bg-paper-bone"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-4xl px-6 py-20">
        <header className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-blueprint-mid">Preguntas</p>
          <h2
            id="faq-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-blueprint-deep md:text-4xl"
          >
            Lo que más nos preguntan.
          </h2>
        </header>

        <ul className="mt-12 divide-y divide-paper-grid/80 border-t border-paper-grid/80">
          {PREGUNTAS.map((item) => (
            <li key={item.pregunta}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-blueprint-deep transition-colors hover:text-blueprint-mid">
                  <span>{item.pregunta}</span>
                  <span
                    aria-hidden="true"
                    className="text-2xl text-blueprint-soft transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-pencil">{item.respuesta}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
