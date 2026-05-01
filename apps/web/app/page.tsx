import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";
import { Hero } from "@/components/marketing/hero";
import { PilaresGrid } from "@/components/marketing/pilares-grid";
import { ProtocolosBelt } from "@/components/marketing/protocolos-belt";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ProtocolosBelt />
        <PilaresGrid />
        <SectionPlaceholder
          id="como-funciona"
          eyebrow="Día X · 10-may"
          title="Cómo funciona"
          subtitle="Diseña → Compra → Opera. Tres pasos, un único atlas."
        />
        <SectionPlaceholder
          id="precios"
          eyebrow="Día X · 10-may"
          title="Precios"
          subtitle="Free · Solo (24,90 €/mes destacado) · Studio (59 €/mes)."
        />
        <SectionPlaceholder
          id="abp"
          eyebrow="Día X · 10-may"
          title="Atlaps Bridge Protocol"
          subtitle="Un MCP para domótica · Apache-2.0."
        />
        <SectionPlaceholder
          id="transparencia"
          eyebrow="Día X · 10-may"
          title="Transparencia radical"
          subtitle="Self-host UE · voz local · comisiones declaradas."
        />
        <SectionPlaceholder
          id="testimonios"
          eyebrow="Día X · 10-may"
          title="Testimonios"
          subtitle="Tres slots reservados (data-testimonial-slot)."
        />
        <SectionPlaceholder
          id="faq"
          eyebrow="Día X · 10-may"
          title="Preguntas frecuentes"
          subtitle="Ocho respuestas rápidas sobre hardware, autohospedaje y migración."
        />
        <SectionPlaceholder
          id="waitlist"
          eyebrow="Día J · 11-may"
          title="Únete a la lista"
          subtitle="Newsletter · waitlist · POST /api/waitlist con Supabase + Resend."
        />
      </main>
      <Footer />
    </>
  );
}

function SectionPlaceholder({
  id,
  eyebrow,
  title,
  subtitle,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section
      id={id}
      className="border-paper-grid/70 bg-paper-bone border-b"
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-blueprint-mid text-xs tracking-widest uppercase">
          {eyebrow} · pendiente
        </p>
        <h2
          id={`${id}-title`}
          className="text-blueprint-deep mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl"
        >
          {title}
        </h2>
        <p className="text-ink-pencil mt-3 max-w-2xl text-base">{subtitle}</p>
      </div>
    </section>
  );
}
