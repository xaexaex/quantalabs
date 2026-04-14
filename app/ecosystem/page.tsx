import type { Metadata } from "next";
import EcosystemShowcase from "@/components/EcosystemShowcase";
import EcosystemGrid from "@/components/EcosystemGrid";
import { ArrowUpRight } from "lucide-react";

const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: "Quantachain Ecosystem & Product Suite",
  description:
    "Explore Quantalabs' post-quantum product suite: the Quantachain L1 node, WASM SDK with Falcon-512 bindings, Block Explorer, and the Quanta wallet Chrome extension.",
  alternates: {
    canonical: "https://quantalabs.cc/ecosystem",
  },
  openGraph: {
    title: "Quantachain Ecosystem & Product Suite | Quantalabs",
    description:
      "The post-quantum product suite built by Quantalabs — Quantachain L1, WASM SDK, block explorer, and the world's first post-quantum Chrome wallet.",
    url: "https://quantalabs.cc/ecosystem",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Quantachain Ecosystem — Post-Quantum Product Suite by Quantalabs",
      },
    ],
  },
  twitter: {
    title: "Quantachain Ecosystem & Product Suite | Quantalabs",
    description:
      "Post-quantum L1 node, WASM SDK, block explorer, and Chrome wallet — all built by Quantalabs.",
    images: [ogImage],
  },
};

export default function EcosystemPage() {
  return (
    <div className="pt-24 min-h-screen pb-24 bg-white selection:bg-gray-200">
      
      {/* Ecosystem Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12 gap-6">
          <div>
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-5 block">
              Product Suite
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tighter text-black leading-tight">
              The Post-Quantum <br />
              <span className="text-gray-300">Product Suite</span>.
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-500 max-w-sm font-medium leading-relaxed md:text-right">
            Quantalabs builds and maintains the core infrastructure stack for the Quantachain network.
          </p>
        </div>
      </section>

      {/* Three pillars intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: "01", title: "Layer 1 Core", desc: "Memory-safe Rust L1 with adaptive Proof-of-Work and Falcon-512 consensus signing." },
            { num: "02", title: "Developer SDK", desc: "Rust-to-WASM Post-Quantum cryptographic bindings, natively usable in JS/TS environments." },
            { num: "03", title: "Browser Wallet", desc: "The first post-quantum wallet as a Chrome extension, protecting against harvest-now attacks." },
          ].map((p, i) => (
            <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-[1.5rem] hover:bg-white hover:border-gray-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all">
              <span className="font-mono text-[10px] font-bold text-gray-300 mb-5 block tracking-widest">{p.num}</span>
              <h3 className="text-xl font-extrabold text-black mb-3 tracking-tight">{p.title}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grid of Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <EcosystemGrid />
      </section>

      {/* The Live Network Showcase Component */}
      <EcosystemShowcase />

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-black rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-[0.02] blur-[120px] pointer-events-none"></div>
          <div className="relative z-10">
            <span className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-4 block">Open Source</span>
            <h3 className="text-3xl font-extrabold text-white tracking-tight mb-3">Contribute to Quantachain</h3>
            <p className="text-gray-400 font-medium max-w-lg leading-relaxed">The L1 core node and WASM SDK are open source. Developers are welcome to submit PRs, open issues, or build on top of the protocol.</p>
          </div>
          <a
            href="https://github.com/quantachain/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0 inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-xl text-sm uppercase tracking-widest"
          >
            View on GitHub <ArrowUpRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>

    </div>
  );
}
