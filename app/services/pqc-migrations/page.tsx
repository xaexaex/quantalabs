import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Lock,
  Cpu,
  GitMerge,
  FileSearch,
  AlertTriangle,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mainnet PQC Migrations — Post-Quantum Cryptography | Quantalabs",
  description:
    "Quantalabs executes zero-downtime mainnet migrations from ECDSA to NIST-standardized Falcon-512 and Kyber KEM. Full auditing, state Merkle-tree transitions, and wallet infrastructure upgrades included.",
  alternates: { canonical: "https://quantalabs.cc/services/pqc-migrations" },
  openGraph: {
    title: "Mainnet PQC Migrations | Quantalabs",
    description:
      "Zero-downtime migration from ECDSA to Falcon-512 and Kyber KEM. NIST-standardized post-quantum cryptography for production blockchain networks.",
    url: "https://quantalabs.cc/services/pqc-migrations",
    images: [{ url: "/seo/image.png", width: 1200, height: 630 }],
  },
};

const features = [
  {
    icon: Lock,
    title: "Falcon-512 DSS",
    desc: "NIST-standardized CRYSTALS-based digital signature scheme replacing ECDSA — 99% smaller key sizes than RSA with superior security margins.",
  },
  {
    icon: ShieldCheck,
    title: "Kyber KEM",
    desc: "Key Encapsulation Mechanism for quantum-resistant session key establishment. Protects against harvest-now-decrypt-later attacks.",
  },
  {
    icon: GitMerge,
    title: "Zero-Downtime Migration",
    desc: "Our migration protocol pauses mempools, coordinates validator upgrades, and applies state transitions atomically — with zero block production gaps.",
  },
  {
    icon: Cpu,
    title: "WASM Cryptographic Modules",
    desc: "All cryptographic primitives are compiled to WebAssembly, allowing rapid deployment across heterogeneous node environments without recompilation.",
  },
  {
    icon: FileSearch,
    title: "Cryptographic Auditing",
    desc: "Independent verification of all state Merkle-tree recalculations, signature scheme transitions, and key derivation paths before migration go-live.",
  },
  {
    icon: AlertTriangle,
    title: "Threat Assessment",
    desc: "Free preliminary audit quantifying your protocol's current cryptographic exposure and estimated vulnerability timeline under Mosca's theorem.",
  },
];

const threatStats = [
  { label: "Harvest-Now Attacks", value: "Active", red: true },
  { label: "ECDSA Vulnerabilities", value: "SECP256K1", warning: true },
  { label: "NIST PQC Standard", value: "Finalized 2024" },
  { label: "Post-Migration Status", value: "Quantum-Safe", green: true },
];

export default function PqcMigrationsPage() {
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
                <ShieldCheck className="w-4 h-4 text-black" />
                <span className="text-xs font-black uppercase tracking-widest text-gray-600">Post-Quantum Security</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black mb-6 leading-[1.0]">
                Mainnet PQC<br />
                <span className="text-gray-300">Migrations.</span>
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-xl">
                The quantum threat is not theoretical — harvest-now-decrypt-later attacks are active today.
                We execute zero-downtime migrations from vulnerable ECDSA to NIST-standardized post-quantum
                cryptography for production blockchain networks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
                >
                  Request Free Audit <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-black font-bold rounded-xl hover:border-black transition-all text-sm uppercase tracking-wider"
                >
                  Read Research <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-950 aspect-square md:aspect-[4/3] lg:aspect-square shadow-2xl animate-fade-in">
              <Image
                src="/solutions/wasm.png"
                alt="Post-Quantum Cryptography Illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Algorithm</p>
                  <p className="text-[#00E599] font-extrabold text-lg font-mono">Falcon-512</p>
                </div>
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">NIST Status</p>
                  <p className="text-white font-extrabold text-lg">FINAL ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREAT CONTEXT BANNER ────────────────────────────────── */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {threatStats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest mb-1">{s.label}</p>
                <p className={`text-lg font-extrabold ${s.red ? "text-red-400" : s.warning ? "text-yellow-400" : s.green ? "text-[#00E599]" : "text-white"}`}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ─────────────────────────────────────────── */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-3 block">What We Deliver</span>
            <h2 className="text-4xl font-extrabold text-black tracking-tight">End-to-end quantum-safe migration.</h2>
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

      {/* ── MIGRATION TERMINAL ───────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block">Migration Protocol</span>
              <h2 className="text-4xl font-extrabold text-black tracking-tight mb-6">How the migration works.</h2>
              <p className="text-gray-500 font-medium leading-relaxed text-lg mb-8">
                Our proprietary migration protocol orchestrates each phase of the cryptographic upgrade atomically.
                Validators coordinate through a temporary governance quorum, ensuring network liveness is maintained
                throughout the transition.
              </p>
              <ul className="space-y-3">
                {[
                  "Mempool pause & validator signature collection",
                  "WASM module deployment & verification",
                  "Merkle-tree state recalculation",
                  "Atomic consensus upgrade & network resume",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-black">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Terminal mock */}
            <div className="bg-[#0A0A0A] rounded-[2rem] border border-gray-800 shadow-2xl overflow-hidden">
              <div className="bg-[#111] border-b border-gray-800 p-4 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-gray-500 font-mono text-xs flex items-center gap-1">
                  <Terminal className="w-3 h-3" /> migration.sh
                </div>
                <div className="w-12" />
              </div>
              <div className="p-6 font-mono text-sm leading-loose text-gray-300">
                <div><span className="text-green-400">root@quanta:~$</span> quanta-cli network upgrade --target pqc_falcon512</div>
                <div className="text-gray-500 mt-2">[INFO] Initiating mainnet state migration protocol...</div>
                <div className="text-gray-500">[INFO] Pausing mempool &amp; securing validator signatures...</div>
                <div className="text-gray-500">[INFO] Compiling WASM cryptographic primitives...</div>
                <div className="mt-3"><span className="text-blue-400">Loading module:</span> kyber_kem_v1.wasm [100%]</div>
                <div><span className="text-blue-400">Loading module:</span> falcon_512_sig.wasm [100%]</div>
                <div className="mt-3 text-emerald-400">✔ Cryptographic modules verified.</div>
                <div className="text-emerald-400">✔ Merkle-tree state recalculated.</div>
                <div className="mt-3 font-bold text-white">Migration Complete. Network is now Post-Quantum Secure.</div>
                <div className="mt-3"><span className="text-green-400">root@quanta:~$</span> <span className="animate-pulse">_</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
            <span className="relative z-10 text-gray-500 font-bold tracking-widest uppercase text-xs mb-6 block">Free Assessment</span>
            <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter">
              Is your protocol quantum-vulnerable?
            </h2>
            <p className="relative z-10 text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              We offer free preliminary cryptographic exposure audits. Get a written assessment of your protocol&apos;s
              vulnerability timeline and recommended migration path — no commitment required.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1">
                Request Free Audit <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link href="/research" className="inline-flex items-center gap-2 px-10 py-5 border border-gray-700 text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:border-gray-500 hover:bg-white/5 transition-all">
                Read Our Research <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
