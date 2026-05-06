import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Atlaps · RGPD UE 2016/679 · LOPDGDD 3/2018.",
  robots: { index: false, follow: false },
};

export default function Privacidad() {
  return (
    <>
      <h1 className="text-3xl font-bold">Política de privacidad</h1>
      <p className="text-ink-pencil text-sm">
        Última actualización: 1-may-2026 · v0.1 borrador · RGPD UE 2016/679 · LOPDGDD 3/2018
      </p>

      <section>
        <h2 className="text-xl font-semibold">Responsable del tratamiento</h2>
        <ul className="space-y-1 text-sm">
          <li>
            <strong>Iniciativa Alexendros, S.L.</strong>
          </li>
          <li>Comunitat Valenciana, España</li>
          <li>contacto@alexendros.me</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Finalidad del tratamiento</h2>
        <p>
          Los datos recogidos en el formulario de contacto del subdominio /socios/ se tratan con la
          única finalidad de responder a la solicitud de conversación enviada por el usuario.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Base jurídica</h2>
        <p>
          Consentimiento explícito del interesado (art. 6.1.a RGPD), prestado mediante la marcación
          de la casilla correspondiente en el formulario.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Categorías de datos</h2>
        <ul className="list-disc space-y-1 pl-6 text-sm">
          <li>Datos identificativos: nombre y apellidos.</li>
          <li>Datos de contacto: dirección de correo electrónico.</li>
          <li>Datos profesionales (opcionales): empresa u organización.</li>
          <li>Contenido libre: mensaje proporcionado por el interesado.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Plazo de conservación</h2>
        <p>
          Los datos se conservarán durante un máximo de 24 meses desde su recepción, o hasta que el
          interesado solicite su supresión, lo que ocurra primero.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Destinatarios y encargados de tratamiento</h2>
        <p>
          Los correos se envían a través de <strong>Resend</strong> (Resend, Inc., Estados Unidos),
          encargado del tratamiento bajo cláusulas contractuales tipo. Los datos no se ceden a
          terceros con fines comerciales.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Derechos del interesado</h2>
        <p>
          El interesado puede ejercer sus derechos de acceso, rectificación, supresión, oposición,
          limitación del tratamiento y portabilidad escribiendo a{" "}
          <a href="mailto:contacto@alexendros.me" className="underline">
            contacto@alexendros.me
          </a>
          . También puede presentar una reclamación ante la Agencia Española de Protección de Datos
          (
          <a href="https://www.aepd.es" className="underline">
            aepd.es
          </a>
          ).
        </p>
      </section>

      <p className="text-ink-pencil text-xs italic">
        Documento en borrador v0.1. Pendiente de revisión por asesoría legal antes de su publicación
        oficial.
      </p>
    </>
  );
}
