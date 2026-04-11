import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import EcosystemShowcase from "@/components/EcosystemShowcase";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <EcosystemShowcase />
      <CareersSection />
      <ContactSection />
    </>
  );
}
