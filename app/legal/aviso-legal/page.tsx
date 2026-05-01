import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de Atlaps · Iniciativa Alexendros, S.L.",
  robots: { index: false, follow: false },
};

export default function AvisoLegal() {
  return (
    <>
      <h1 className="text-3xl font-bold">Aviso legal</h1>
      <p className="text-ink-pencil text-sm">Última actualización: 1-may-2026 · v0.1 borrador</p>

      <section>
        <h2 className="text-xl font-semibold">Titular del sitio</h2>
        <ul className="space-y-1 text-sm">
          <li>
            <strong>Razón social:</strong> Iniciativa Alexendros, S.L.
          </li>
          <li>
            <strong>Domicilio:</strong> Comunitat Valenciana, España (dirección completa pendiente
            de constitución registral)
          </li>
          <li>
            <strong>NIF:</strong> pendiente
          </li>
          <li>
            <strong>Inscripción:</strong> Registro Mercantil (pendiente)
          </li>
          <li>
            <strong>Contacto:</strong> contacto@alexendros.me
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Objeto</h2>
        <p>
          El presente aviso regula el acceso y uso del sitio web atlaps.com y subdominios asociados
          (en adelante, el &laquo;Sitio&raquo;), titularidad del responsable identificado
          anteriormente.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Propiedad intelectual</h2>
        <p>
          Los contenidos textuales, gráficos, logotipos, marcas y código fuente del Sitio son
          titularidad de Iniciativa Alexendros, S.L. salvo indicación expresa en contrario. El
          protocolo abierto Atlas Bridge Protocol (ABP) se distribuirá bajo licencia Apache-2.0
          cuando esté publicado.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Responsabilidad</h2>
        <p>
          El acceso al Sitio se realiza bajo la responsabilidad del usuario. La información tiene
          carácter divulgativo y orientativo y no constituye oferta vinculante salvo en los casos en
          que expresamente así se indique.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Legislación aplicable y jurisdicción</h2>
        <p>
          El presente aviso se rige por la legislación española. Para cualquier controversia, las
          partes se someten a los Juzgados y Tribunales de la Comunitat Valenciana, salvo que la
          legislación aplicable a consumidores establezca un fuero distinto.
        </p>
      </section>

      <p className="text-ink-pencil text-xs italic">
        Documento en borrador v0.1. La versión definitiva se publicará una vez completada la
        constitución de Iniciativa Alexendros, S.L. y la aprobación del responsable.
      </p>
    </>
  );
}
