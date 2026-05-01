import { AbpCallout } from "@/components/marketing/abp-callout";
import { ComoFunciona } from "@/components/marketing/como-funciona";
import { Faq } from "@/components/marketing/faq";
import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";
import { Hero } from "@/components/marketing/hero";
import { PilaresGrid } from "@/components/marketing/pilares-grid";
import { Pricing } from "@/components/marketing/pricing";
import { ProtocolosBelt } from "@/components/marketing/protocolos-belt";
import { Testimonios } from "@/components/marketing/testimonios";
import { Transparencia } from "@/components/marketing/transparencia";
import { WaitlistSection } from "@/components/marketing/waitlist-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ProtocolosBelt />
        <PilaresGrid />
        <ComoFunciona />
        <Pricing />
        <AbpCallout />
        <Transparencia />
        <Testimonios />
        <Faq />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
