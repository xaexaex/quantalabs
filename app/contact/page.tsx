import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: "Contact Us — Enterprise Blockchain Consulting",
  description:
    "Get in touch with Quantalabs to discuss enterprise blockchain development, sovereign L2 AppChains, post-quantum cryptography migrations, and institutional AI agent frameworks.",
  alternates: {
    canonical: "https://quantalabs.cc/contact",
  },
  openGraph: {
    title: "Contact Us — Enterprise Blockchain Consulting | Quantalabs",
    description:
      "Reach the Quantalabs protocol engineering team to discuss sovereign L2 builds, PQC migrations, AI agent deployments, and institutional blockchain infrastructure.",
    url: "https://quantalabs.cc/contact",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Quantalabs — Enterprise Blockchain Engineering",
      },
    ],
  },
  twitter: {
    title: "Contact Us — Enterprise Blockchain Consulting | Quantalabs",
    description:
      "Discuss sovereign L2 builds, PQC migrations, and AI blockchain solutions with the Quantalabs team.",
    images: [ogImage],
  },
};

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-24 bg-white min-h-screen">
      <ContactSection />
    </div>
  );
}
