import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import ServicesPreview from "@/components/ServicesPreview";
import WalletShowcase from "@/components/WalletShowcase";
import DeveloperShowcase from "@/components/DeveloperShowcase";
import NetworkMetrics from "@/components/NetworkMetrics";
import EcosystemShowcase from "@/components/EcosystemShowcase";
import ResearchTeaser from "@/components/ResearchTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <ServicesPreview />
      <WalletShowcase />
      <DeveloperShowcase />
      <NetworkMetrics />
      <EcosystemShowcase />
      <ResearchTeaser />
    </>
  );
}
