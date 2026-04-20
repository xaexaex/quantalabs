"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, Code, Globe2, ArrowRight, ArrowUpRight, Shield, Brain, Cpu, Zap, MapPin, Clock } from "lucide-react";

const openRoles = [
  {
    title: "Senior Rust Engineer — L1 Core",
    team: "Protocol Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
    icon: Cpu,
    description:
      "Architect and maintain the Quantachain L1 node in Rust. Deep work in memory management, adaptive PoW consensus, and Falcon-512 integration.",
    skills: ["Rust", "Distributed Systems", "Consensus Protocols", "LLVM"],
    highlight: false,
  },
  {
    title: "Post-Quantum Cryptography Researcher",
    team: "Research",
    location: "Remote (Global)",
    type: "Full-Time",
    icon: Shield,
    description:
      "Drive applied PQC research. Work on lattice-based cryptography (Kyber KEM, Falcon-512, SPHINCS+), publish papers, and translate research into production protocol upgrades.",
    skills: ["Lattice Cryptography", "NIST PQC", "C/Rust", "Mathematical Proofs"],
    highlight: true,
  },
  {
    title: "AI Integration Lead — On-Chain Agents",
    team: "AI Systems",
    location: "Remote (Global)",
    type: "Full-Time",
    icon: Brain,
    description:
      "Design and deploy deterministic LLM-driven agent frameworks that run natively on validator nodes. Own the full stack from model selection to on-chain execution.",
    skills: ["LLM Fine-Tuning", "Rust/Python", "Agent Architecture", "Blockchain RPC"],
    highlight: false,
  },
  {
    title: "Frontend Engineer — Protocol UI",
    team: "Developer Experience",
    location: "Remote (Global)",
    type: "Full-Time",
    icon: Zap,
    description:
      "Build world-class interfaces for our block explorer, wallet extension, and developer portal. You care deeply about pixel-perfect UX and performance.",
    skills: ["Next.js", "TypeScript", "WebAssembly", "Chrome Extensions"],
    highlight: false,
  },
];

const perks = [
  {
    icon: Globe2,
    title: "Global Remote Culture",
    desc: "Work from anywhere. We are async-first with engineers spanning 12+ time zones.",
  },
  {
    icon: Code,
    title: "Frontier Tech Stack",
    desc: "Rust, WASM, LLMs, ZK proofs, and NIST PQC — the hardest problems in the industry.",
  },
  {
    icon: Users,
    title: "Elite Engineering Teams",
    desc: "Collaborate with cryptographers, former protocol engineers, and AI researchers.",
  },
];

export default function CareersSection() {
  return (
    <div className="bg-white">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="pt-24 pb-0 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12 gap-6">
            <div>
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-5 block">
                Join the Team
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black leading-[1.0]">
                Build the Future <br />
                <span className="text-gray-300">of Web3.</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-500 max-w-sm font-medium leading-relaxed md:text-right">
              We are a team of cryptographers, distributed systems engineers, and AI researchers
              solving the hardest problems in decentralized infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ── TEAM IMAGE + PERKS ────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative rounded-[2rem] overflow-hidden border border-gray-100 shadow-lg bg-gray-950 aspect-[4/3]">
              <Image
                src="/team-culture.png"
                alt="Quantalabs Engineering Team — Workspace & Culture"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block font-mono text-xs font-bold tracking-widest text-gray-400 uppercase border border-gray-700 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  Workspace &amp; Culture
                </span>
              </div>
            </div>

            {/* Right: Perks */}
            <div className="space-y-8">
              <div>
                <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block">
                  Why Quantalabs
                </span>
                <h2 className="text-4xl font-extrabold text-black tracking-tight mb-4">
                  Where Protocol Engineering Meets Research.
                </h2>
                <p className="text-gray-500 font-medium leading-relaxed text-lg">
                  We are small, technical, and deeply focused. Every engineer ships code that runs
                  on mainnet and influences the next generation of institutional blockchain
                  infrastructure.
                </p>
              </div>

              <div className="space-y-5">
                {perks.map((perk, i) => {
                  const Icon = perk.icon;
                  return (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl border border-gray-100 shrink-0">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <span className="block font-bold text-black text-sm mb-0.5">
                          {perk.title}
                        </span>
                        <span className="block text-gray-500 text-sm leading-relaxed">
                          {perk.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="#open-roles"
                className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg text-sm"
              >
                <span>View Open Roles</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ────────────────────────────────────────── */}
      <section id="open-roles" className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block">
              Current Openings
            </span>
            <h2 className="text-4xl font-extrabold text-black tracking-tight">
              Open Roles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role, i) => {
              const Icon = role.icon;
              return (
                <div
                  key={i}
                  className={`relative p-8 rounded-[1.5rem] border transition-all group hover:shadow-xl hover:-translate-y-0.5 ${
                    role.highlight
                      ? "bg-black border-gray-800 text-white"
                      : "bg-white border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {role.highlight && (
                    <span className="absolute top-6 right-6 text-[10px] font-black tracking-[0.15em] text-black bg-[#00E599] px-3 py-1 rounded-full uppercase">
                      Featured
                    </span>
                  )}

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      role.highlight ? "bg-white/10 border border-white/20" : "bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${role.highlight ? "text-white" : "text-black"}`} />
                  </div>

                  <h3
                    className={`text-xl font-extrabold tracking-tight mb-1 ${
                      role.highlight ? "text-white" : "text-black"
                    }`}
                  >
                    {role.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-bold ${
                        role.highlight ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <MapPin className="w-3 h-3" /> {role.location}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-bold ${
                        role.highlight ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <Clock className="w-3 h-3" /> {role.type}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        role.highlight
                          ? "bg-white/10 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {role.team}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      role.highlight ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {role.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {role.skills.map((skill, j) => (
                      <span
                        key={j}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg ${
                          role.highlight
                            ? "bg-white/5 border border-white/10 text-gray-300"
                            : "bg-gray-50 border border-gray-100 text-gray-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`mailto:careers@quantalabs.cc?subject=Application: ${role.title}`}
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${
                      role.highlight
                        ? "text-[#00E599] hover:text-white"
                        : "text-black hover:text-[#00E599]"
                    }`}
                  >
                    Apply Now <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-xl">
              <span className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                Don&apos;t See a Fit?
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                We hire for talent, not just open roles.
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed text-lg">
                If you are exceptional at what you do and are passionate about the post-quantum
                future of blockchain, we want to hear from you regardless.
              </p>
            </div>

            <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:careers@quantalabs.cc"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-xl text-sm uppercase tracking-wider"
              >
                Send Your Resume <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 text-white font-bold rounded-xl hover:border-gray-500 hover:bg-white/5 transition-colors text-sm uppercase tracking-wider"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
