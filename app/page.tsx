import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import ServicesPreview from "@/components/ServicesPreview";
import WalletShowcase from "@/components/WalletShowcase";
import DeveloperShowcase from "@/components/DeveloperShowcase";
import NetworkMetrics from "@/components/NetworkMetrics";
import EcosystemShowcase from "@/components/EcosystemShowcase";
import ResearchTeaser from "@/components/ResearchTeaser";

const siteUrl = "https://quantalabs.cc";
const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: "Quantalabs — Sovereign Blockchain, AI & Post-Quantum Engineering",
  description:
    "Quantalabs is the enterprise protocol engineering lab behind Quantachain. We build sovereign L2 AppChains, autonomous AI agent networks, and NIST-standardized post-quantum cryptography migrations for institutions worldwide.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Quantalabs — Sovereign Blockchain, AI & Post-Quantum Engineering",
    description:
      "The enterprise protocol lab behind Quantachain. Sovereign L2 AppChains, autonomous AI agents, and PQC migrations for institutions worldwide.",
    url: siteUrl,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Quantalabs — Sovereign Blockchain & Post-Quantum Engineering",
      },
    ],
  },
  twitter: {
    title: "Quantalabs — Sovereign Blockchain, AI & Post-Quantum Engineering",
    description:
      "The enterprise protocol lab behind Quantachain. L2 AppChains, AI agent networks, and PQC migrations for institutions.",
    images: [ogImage],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quantalabs",
  url: siteUrl,
  logo: `${siteUrl}/logo/quanta-transparent-bg-logo.svg`,
  description:
    "Quantalabs is the enterprise protocol engineering lab behind Quantachain, specializing in sovereign L2 AppChains, AI-driven node architectures, and NIST post-quantum cryptography migrations.",
  sameAs: [
    "https://quantachain.org",
    "https://github.com/quantachain",
    "https://medium.com/@quantachain",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@quantalabs.cc",
    contactType: "Customer Support",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
