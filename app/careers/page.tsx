import type { Metadata } from "next";
import CareersSection from "@/components/CareersSection";

const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: "Careers — Join the Protocol Engineering Team",
  description:
    "Join Quantalabs to work on the hardest problems in blockchain, post-quantum cryptography, and decentralized AI. Open roles for Rust engineers, PQC researchers, and AI integration leads.",
  alternates: {
    canonical: "https://quantalabs.cc/careers",
  },
  openGraph: {
    title: "Careers — Join the Protocol Engineering Team | Quantalabs",
    description:
      "Open roles for senior Rust engineers, PQC researchers, AI integration leads, and frontend engineers. Build the post-quantum decentralized future with Quantalabs.",
    url: "https://quantalabs.cc/careers",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Careers at Quantalabs — Blockchain & PQC Engineering",
      },
    ],
  },
  twitter: {
    title: "Careers — Join the Protocol Engineering Team | Quantalabs",
    description:
      "Rust engineers, PQC researchers, and AI leads wanted. Build the future of post-quantum blockchain at Quantalabs.",
    images: [ogImage],
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <CareersSection />
    </div>
  );
}
