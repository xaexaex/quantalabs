import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Cpu,
  Shield,
  Zap,
  Globe,
  Package,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WASM Cryptography — Browser & Mobile PQC Libraries | Quantalabs",
  description:
    "Quantalabs' proprietary Rust-to-WASM post-quantum cryptographic libraries power secure browser wallets, mobile apps, and enterprise integrations with Falcon-512 and Kyber KEM.",
  alternates: { canonical: "https://quantalabs.cc/services/wasm-crypto" },
  openGraph: {
    title: "WASM Cryptography — Browser & Mobile PQC Libraries | Quantalabs",
    description:
      "Rust-to-WASM post-quantum cryptographic libraries for browser wallets and mobile apps. Falcon-512 and Kyber KEM in pure WebAssembly.",
    url: "https://quantalabs.cc/services/wasm-crypto",
    images: [{ url: "/seo/image.png", width: 1200, height: 630 }],
  },
};

const features = [
  {
    icon: Cpu,
    title: "Rust-to-WASM Compilation",
    desc: "Our cryptographic core is written in memory-safe Rust and compiled to highly optimized WASM binaries — running at near-native speed in any environment.",
  },
  {
    icon: Shield,
    title: "Falcon-512 Signatures",
    desc: "NIST-standardized lattice-based digital signatures. Sign wallet transactions, authenticate sessions, and protect key material in the browser sandbox.",
  },
  {
    icon: Lock,
    title: "Kyber KEM Integration",
    desc: "Key Encapsulation Mechanism for quantum-resistant encrypted communications between wallets, DApps, and RPC nodes.",
  },
  {
    icon: Globe,
    title: "Browser & Chrome Extension",
    desc: "Drop-in integration for any web app. Our library surfaces a clean JS/TS API over complex WASM internals — zero learning curve for frontend engineers.",
  },
  {
    icon: Package,
    title: "NPM & Crates.io Published",
    desc: "The quanta-sdk NPM package and quanta-wasm Rust crate are published and maintained by Quantalabs. Install in one command.",
  },
  {
    icon: Zap,
    title: "Mobile React Native Bridge",
    desc: "Native JNI bridge for Android and iOS — Rust cryptography executed in a hardware-isolated process with hardware-backed key storage.",
  },
];

const codeSnippet = `import { QuantaWallet } from 'quanta-sdk';

// Initialize with Falcon-512 key generation
const wallet = await QuantaWallet.create({
  algorithm: 'falcon-512',
  kem: 'kyber-768',
});

// Sign a transaction (post-quantum secure)
const signedTx = await wallet.sign({
  to: '0xRecipientAddress...',
  amount: '100 QBTC',
  nonce: 42,
});

console.log(signedTx.signature); // Falcon-512 signature
// → "AQAuHkS7v3...+quantum_safe"`;

export default function WasmCryptoPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── BACK NAV ─────────────────────────────────────────────── */}
      <div className="pt-28 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> All Services
          </Link>
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8">
                <Code2 className="w-4 h-4 text-black" />
                <span className="text-xs font-black uppercase tracking-widest text-gray-600">Developer Tools</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black mb-6 leading-[1.0]">
                WASM<br />
                <span className="text-gray-300">Cryptography.</span>
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-xl">
                Our proprietary Rust-to-WASM post-quantum cryptographic libraries power the next generation
                of browser wallets, mobile apps, and enterprise integrations — bringing Falcon-512 and
                Kyber KEM to every JavaScript environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.npmjs.com/package/quanta-sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
                >
                  Install SDK <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-black font-bold rounded-xl hover:border-black transition-all text-sm uppercase tracking-wider"
                >
                  Custom Integration <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Package badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="https://www.npmjs.com/package/quanta-sdk" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full hover:border-black transition-colors font-mono">
                  npm install quanta-sdk
                </a>
                <a href="https://crates.io/crates/quanta-wasm" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full hover:border-black transition-colors font-mono">
                  cargo add quanta-wasm
                </a>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-950 aspect-square md:aspect-[4/3] lg:aspect-square shadow-2xl animate-fade-in">
              <Image
                src="/solutions/wasm.png"
                alt="WASM Cryptography Browser Integration Illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Runtime</p>
                  <p className="text-[#00E599] font-extrabold text-sm font-mono">WebAssembly</p>
                </div>
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Core Language</p>
                  <p className="text-white font-extrabold text-sm">Rust 🦀</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CODE PREVIEW ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block">Developer Experience</span>
              <h2 className="text-4xl font-extrabold text-black tracking-tight mb-6">
                Post-quantum crypto in 5 lines of JS.
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed text-lg mb-6">
                The quanta-sdk abstracts the complexity of WASM initialization, memory management, and
                cryptographic parameter selection into a clean, modern async API.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "TypeScript-first with full type safety",
                  "Automatic WASM module initialization",
                  "Tree-shakeable — only imports what you use",
                  "Works in Node.js, Bun, browsers & React Native",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-black">
                    <div className="w-5 h-5 rounded-full bg-[#00E599]/10 border border-[#00E599]/30 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 bg-[#00E599] rounded-full" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Code block */}
            <div className="bg-[#0A0A0A] rounded-[2rem] border border-gray-800 overflow-hidden shadow-2xl">
              <div className="bg-[#111] border-b border-gray-800 px-5 py-3 flex items-center gap-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <span className="text-gray-500 font-mono text-xs">wallet.ts</span>
              </div>
              <pre className="p-6 font-mono text-sm text-gray-300 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ─────────────────────────────────────────── */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-3 block">Library Capabilities</span>
            <h2 className="text-4xl font-extrabold text-black tracking-tight">Built for production from day one.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white border border-gray-200 rounded-[1.5rem] p-8 hover:border-black hover:shadow-xl transition-all group">
                  <div className="w-11 h-11 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-black group-hover:border-black transition-all">
                    <Icon className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-extrabold text-black mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white opacity-[0.03] blur-[120px] rounded-full" />
            <span className="relative z-10 text-gray-500 font-bold tracking-widest uppercase text-xs mb-6 block">Custom Integration</span>
            <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter">
              Embed post-quantum crypto into any platform.
            </h2>
            <p className="relative z-10 text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              We provide custom WASM module compilation, white-label library integration, and direct
              engineering support for enterprise browser and mobile deployments.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
                Get Custom Integration <ArrowUpRight className="w-5 h-5" />
              </Link>
              <a href="https://quantachain.gitbook.io/quantachain-docs" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 border border-gray-700 text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:border-gray-500 hover:bg-white/5 transition-all">
                Read Docs <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
