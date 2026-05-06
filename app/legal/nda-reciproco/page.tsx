import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NDA recíproco",
  description: "Modelo de acuerdo de confidencialidad recíproco con Iniciativa Alexendros, S.L.",
  robots: { index: false, follow: false },
};

export default function NDA() {
  return (
    <>
      <h1 className="text-3xl font-bold">NDA recíproco</h1>
      <p className="text-ink-pencil text-sm">Última actualización: 1-may-2026 · v0.1 borrador</p>

      <section>
        <p>
          Iniciativa Alexendros, S.L. ofrece la firma de un acuerdo de confidencialidad{" "}
          <strong>recíproco</strong> con socios potenciales, advisors, partners integradores e
          inversores antes del intercambio de información sensible (financiación, métricas, roadmap
          detallado, código no público).
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Solicitud</h2>
        <p>
          Para solicitar el modelo de NDA, escribe a{" "}
          <a href="mailto:contacto@alexendros.me" className="underline">
            contacto@alexendros.me
          </a>{" "}
          indicando entidad firmante, persona física apoderada y propósito del intercambio. Se
          remitirá la versión vigente en formato editable y, si procede, vía DocuSeal para firma
          electrónica.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Características</h2>
        <ul className="list-disc space-y-1 pl-6 text-sm">
          <li>Confidencialidad mutua sin asimetría.</li>
          <li>Vigencia: 24 meses desde la firma, prorrogables por acuerdo expreso.</li>
          <li>
            Jurisdicción: tribunales de la Comunitat Valenciana, salvo elección expresa distinta.
          </li>
          <li>
            Excepciones estándar: información pública, conocida previamente, desarrollada de forma
            independiente o requerida por autoridad competente.
          </li>
        </ul>
      </section>

      <p className="text-ink-pencil text-xs italic">
        El modelo definitivo se publicará en repositorio público una vez completada la revisión
        legal. Versión actual disponible bajo petición.
      </p>
    </>
  );
}
