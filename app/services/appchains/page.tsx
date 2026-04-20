import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Blocks,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Zap,
  Shield,
  Network,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sovereign L2 AppChains — Custom Layer 2 Rollups | Quantalabs",
  description:
    "Quantalabs designs and deploys bespoke Layer 2 rollups on the Quantachain base layer — with custom tokenomics, ZK sequencers, 120K+ TPS throughput, and trustless bridge infrastructure.",
  alternates: { canonical: "https://quantalabs.cc/services/appchains" },
  openGraph: {
    title: "Sovereign L2 AppChains | Quantalabs",
    description:
      "Enterprise-grade custom Layer 2 rollups with ZK sequencers, 120K+ TPS, and trustless bridges. Built on Quantachain's Rust/WASM execution environment.",
    url: "https://quantalabs.cc/services/appchains",
    images: [{ url: "/seo/image.png", width: 1200, height: 630 }],
  },
};

const features = [
  {
    icon: Zap,
    title: "120K+ Peak TPS",
    desc: "Our AppChain architecture achieves over 120,000 transactions per second under peak load using Quantachain's parallel execution model.",
  },
  {
    icon: Shield,
    title: "ZK Sequencer Integration",
    desc: "Zero-Knowledge sequencers provide cryptographic proof of correct state transitions — eliminating trust assumptions entirely.",
  },
  {
    icon: Network,
    title: "Trustless Bridge Infrastructure",
    desc: "Native interoperability with the Quantachain L1 and external EVM-compatible chains through non-custodial, message-passing bridges.",
  },
  {
    icon: Code2,
    title: "Custom Gas & Tokenomics",
    desc: "Design your own fee market, gas token, and economic model — fully configurable at the protocol genesis level.",
  },
  {
    icon: Blocks,
    title: "Rust/WASM Execution",
    desc: "Smart contracts run in our memory-safe Rust/WASM VM — deterministic, fast, and protected against entire classes of EVM vulnerabilities.",
  },
  {
    icon: ArrowRight,
    title: "Sub-400ms Block Time",
    desc: "Near-instant finality with adaptive block production tuned to your network's throughput requirements.",
  },
];

const steps = [
  { step: "01", title: "Protocol Design", desc: "Architecture your AppChain's consensus model, gas parameters, and tokenomics with our engineering team." },
  { step: "02", title: "Testnet Deployment", desc: "Launch on a private testnet. Stress-test throughput, bridge latency, and sequencer reliability." },
  { step: "03", title: "Mainnet Genesis", desc: "Deploy to production with a fully documented genesis config, validator bootstrapping, and SDK integration." },
];

export default function AppChainsPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── BACK NAV ─────────────────────────────────────────────── */}
      <div className="pt-28 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
          >
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
                <Blocks className="w-4 h-4 text-black" />
                <span className="text-xs font-black uppercase tracking-widest text-gray-600">L2 Infrastructure</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black mb-6 leading-[1.0]">
                Sovereign<br />
                <span className="text-gray-300">L2 AppChains.</span>
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-xl">
                We construct specialized Layer 2 rollups on Quantachain&apos;s native Rust/WASM execution
                environment. Designed for institutional throughput — 120K+ TPS, sub-400ms finality,
                and cryptographic security by default.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
                >
                  Start Your AppChain <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/ecosystem"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-black font-bold rounded-xl hover:border-black transition-all text-sm uppercase tracking-wider"
                >
                  View Ecosystem <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-950 aspect-square md:aspect-[4/3] lg:aspect-square shadow-2xl animate-fade-in">
              <Image
                src="/solutions/appchains.png"
                alt="L2 AppChain Architecture Illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Live metrics badge */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Block Time</p>
                  <p className="text-white font-extrabold text-2xl">&lt;400<span className="text-sm text-gray-400 ml-1">ms</span></p>
                </div>
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Max TPS</p>
                  <p className="text-[#00E599] font-extrabold text-2xl">124K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-3 block">Capabilities</span>
            <h2 className="text-4xl font-extrabold text-black tracking-tight">Everything your AppChain needs.</h2>
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

      {/* ── LIVE NETWORK STATS ───────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-[2rem] p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-white opacity-[0.02] rounded-full blur-[120px]" />
            <div className="relative z-10 mb-10">
              <span className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-3 block">Live Network</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Quantachain Mainnet Beta</h2>
            </div>
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Network Status", value: "MAINNET-BETA", green: true },
                { label: "Active Nodes", value: "12,480" },
                { label: "Block Time", value: "<400ms" },
                { label: "Peak Throughput", value: "124K TPS" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className={`text-2xl font-extrabold ${stat.green ? "text-[#00E599]" : "text-white"}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-3 block">Engagement</span>
            <h2 className="text-4xl font-extrabold text-black tracking-tight">From genesis to mainnet.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-[1.5rem] p-8 hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all">
                <span className="font-mono text-[10px] font-bold text-gray-300 mb-5 block tracking-widest">{s.step}</span>
                <h3 className="text-xl font-extrabold text-black mb-3 tracking-tight">{s.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-[2.5rem] p-12 md:p-20 text-center">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tighter">
              Launch your sovereign AppChain.
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              From architecture to mainnet, our protocol engineering team handles every layer of your L2 deployment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:-translate-y-1"
              >
                Discuss Your Project <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-10 py-5 border border-gray-200 text-gray-700 font-bold uppercase tracking-wider text-sm rounded-xl hover:border-black hover:text-black transition-all"
              >
                All Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
