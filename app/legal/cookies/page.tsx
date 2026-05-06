import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Política de cookies de Atlaps.",
  robots: { index: false, follow: false },
};

export default function Cookies() {
  return (
    <>
      <h1 className="text-3xl font-bold">Política de cookies</h1>
      <p className="text-ink-pencil text-sm">Última actualización: 1-may-2026 · v0.1 borrador</p>

      <section>
        <h2 className="text-xl font-semibold">Cookies utilizadas</h2>
        <p>
          Esta versión del sitio (v0.1) <strong>no instala cookies de terceros</strong>. Solo se
          utiliza almacenamiento local del navegador (<code>localStorage</code>) para recordar la
          preferencia de tema oscuro/claro elegida por el usuario, lo que técnicamente no constituye
          cookie en el sentido del art. 22 LSSI-CE pero se documenta aquí por transparencia.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Sin trackers ni analítica externa</h2>
        <p>
          No se carga Google Analytics, Meta Pixel, ni ningún script de terceros con fines de
          medición o marketing en esta versión privada para socios.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Cambios futuros</h2>
        <p>
          Si en versiones posteriores se incorporan cookies analíticas o de terceros, se solicitará
          el consentimiento previo conforme al art. 22.2 LSSI-CE y a las directrices de la Agencia
          Española de Protección de Datos.
        </p>
      </section>

      <p className="text-ink-pencil text-xs italic">Documento en borrador v0.1.</p>
    </>
  );
}
