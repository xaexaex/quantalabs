import type { Metadata } from "next";
import {
  Blocks,
  BrainCircuit,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Terminal,
  MessageSquare,
  CalendarCheck,
  FileSearch,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: "Services — L2 AppChains, PQC Migrations & AI Agents",
  description:
    "Quantalabs engineers sovereign L2 rollups, executes mainnet post-quantum cryptography migrations (Falcon-512, Kyber KEM), and deploys autonomous AI agent frameworks for institutional blockchain networks.",
  alternates: {
    canonical: "https://quantalabs.cc/services",
  },
  openGraph: {
    title: "Services — L2 AppChains, PQC Migrations & AI Agents | Quantalabs",
    description:
      "Sovereign L2 AppChains, mainnet PQC migrations (Falcon-512 / Kyber KEM), and autonomous on-chain AI agents. Enterprise-grade protocol engineering by Quantalabs.",
    url: "https://quantalabs.cc/services",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Quantalabs Services — Blockchain, PQC & AI Engineering",
      },
    ],
  },
  twitter: {
    title: "Services — L2 AppChains, PQC Migrations & AI Agents | Quantalabs",
    description:
      "Sovereign L2 rollups, mainnet post-quantum migrations, and AI agent frameworks. By Quantalabs.",
    images: [ogImage],
  },
};

/** Small inline CTA strip rendered at the end of each service section */
function ServiceCTA({
  headline,
  subline,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  dark = false,
}: {
  headline: string;
  subline: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`mt-16 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border relative overflow-hidden ${
        dark
          ? "bg-white/5 border-white/10"
          : "bg-white border-gray-200 shadow-sm"
      }`}
    >
      <div className="relative z-10 max-w-xl">
        <p
          className={`text-xs font-black tracking-[0.18em] uppercase mb-2 ${
            dark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Next Step
        </p>
        <h3
          className={`text-2xl md:text-3xl font-extrabold tracking-tight mb-2 ${
            dark ? "text-white" : "text-black"
          }`}
        >
          {headline}
        </h3>
        <p className={`text-base font-medium leading-relaxed ${dark ? "text-gray-400" : "text-gray-500"}`}>
          {subline}
        </p>
      </div>
      <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
        <Link
          href={primaryHref}
          className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-lg ${
            dark
              ? "bg-white text-black hover:bg-gray-100 shadow-white/10"
              : "bg-black text-white hover:bg-gray-800 shadow-black/10"
          }`}
        >
          {primaryLabel} <ArrowUpRight className="w-4 h-4" />
        </Link>
        {secondaryLabel && secondaryHref && (
          <Link
            href={secondaryHref}
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all border ${
              dark
                ? "border-white/20 text-white hover:bg-white/5"
                : "border-gray-200 text-gray-700 hover:border-black hover:text-black"
            }`}
          >
            {secondaryLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen pb-32 bg-white selection:bg-gray-200">

      {/* ── PAGE HERO ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center pt-12 md:pt-20">
        <div className="animate-fade-in">
          <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block">
            Capabilities &amp; R&amp;D
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-black mb-8 leading-[1.05]">
            Engineering the <br />
            <span className="text-gray-300">Decentralized Future</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            From bespoke sovereign rollups to full-scale post-quantum algorithmic migrations, our
            engineering team architects the next generation of institutional networks.
          </p>
          {/* Quick-jump pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "L1/L2 AppChains", href: "#appchains", icon: Blocks },
              { label: "PQC Migrations", href: "#pqc-migrations", icon: ShieldCheck },
              { label: "AI Agents", href: "#ai-agents", icon: BrainCircuit },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:border-black hover:text-black transition-all bg-white"
              >
                <Icon className="w-3.5 h-3.5" /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE 1: L2 APPCHAINS ──────────────────────────── */}
      <section id="appchains" className="py-24 border-y border-gray-100 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 animate-fade-in">
              <div className="bg-white border border-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Blocks className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-extrabold text-black mb-6 tracking-tight">
                Sovereign L2 AppChains
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                We construct specialized Layer 2 rollups that leverage Quantachain&apos;s native
                Rust/WASM execution environment. Designed for institutional throughput, our AppChains
                guarantee high execution speed and instant deterministic finality.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom Gas & Tokenomics Modules",
                  "Zero-Knowledge (zK) Sequencer Integration",
                  "Trustless Interoperability Bridges",
                  "120K+ Peak TPS Architecture",
                ].map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center text-black font-bold text-sm bg-white border border-gray-100 px-4 py-3 rounded-xl shadow-sm w-max"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-3" /> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 animate-fade-in">
              <div className="bg-white rounded-[2rem] border border-gray-200 shadow-xl p-8 aspect-square md:aspect-auto md:h-[450px] flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-[100px] -mr-40 -mt-40 transition-transform group-hover:scale-110" />

                <div className="relative z-10 flex justify-between items-start mb-12">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Network Status
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-black border border-gray-200 bg-gray-50 px-3 py-1 rounded-full">
                    MAINNET-BETA
                  </span>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-4 flex-grow">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-center">
                    <span className="text-gray-400 font-mono text-xs mb-2">BLOCK_TIME</span>
                    <span className="text-4xl font-extrabold text-black">
                      &lt;400<span className="text-xl text-gray-400 ml-1">ms</span>
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-center">
                    <span className="text-gray-400 font-mono text-xs mb-2">ACTIVE_NODES</span>
                    <span className="text-4xl font-extrabold text-black">12,480</span>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-center col-span-2">
                    <span className="text-gray-400 font-mono text-xs mb-2">THROUGHPUT_MAX</span>
                    <span className="text-5xl font-extrabold text-black tracking-tighter">
                      124,000<span className="text-2xl text-gray-400 ml-2">TPS</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA for AppChains ── */}
          {/* Link to dedicated page */}
          <div className="mt-6 flex justify-center">
            <Link href="/services/appchains" className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#00E599] transition-colors border-b-2 border-black hover:border-[#00E599] pb-0.5">
              Deep Dive: L2 AppChains <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
          <ServiceCTA
            headline="Ready to launch your sovereign AppChain?"
            subline="Our team handles architecture, deployment, and ongoing infrastructure — from genesis block to mainnet."
            primaryLabel="Start L2 Project"
            primaryHref="/contact"
            secondaryLabel="Explore Ecosystem"
            secondaryHref="/ecosystem"
          />
        </div>
      </section>

      {/* ── DEEP DIVE 2: PQC MIGRATIONS ────────────────────────── */}
      <section id="pqc-migrations" className="py-24 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 animate-fade-in">
              <div className="bg-[#0A0A0A] rounded-[2rem] border border-gray-800 shadow-2xl overflow-hidden h-[450px] flex flex-col">
                {/* Terminal Header */}
                <div className="bg-[#111] border-b border-gray-800 p-4 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                  </div>
                  <div className="text-gray-500 font-mono text-xs flex items-center">
                    <Terminal className="w-3 h-3 mr-2" /> migration.sh
                  </div>
                  <div className="w-12" />
                </div>
                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden text-gray-300">
                  <div>
                    <span className="text-green-400">root@quanta:~$</span>{" "}
                    quanta-cli network upgrade --target pqc_falcon512
                  </div>
                  <div className="text-gray-500 mt-2">
                    [INFO] Initiating mainnet state migration protocol...
                  </div>
                  <div className="text-gray-500">
                    [INFO] Pausing mempool &amp; securing validator signatures...
                  </div>
                  <div className="text-gray-500">
                    [INFO] Compiling WASM cryptographic primitives...
                  </div>
                  <div className="mt-4">
                    <span className="text-blue-400">Loading module:</span> kyber_kem_v1.wasm [100%]
                  </div>
                  <div>
                    <span className="text-blue-400">Loading module:</span> falcon_512_sig.wasm [100%]
                  </div>
                  <div className="mt-4 text-emerald-400">✔ Cryptographic modules verified.</div>
                  <div className="text-emerald-400">✔ Merkle-tree state recalculated.</div>
                  <div className="mt-4 font-bold text-white">
                    Migration Complete. Network is now Post-Quantum Secure.
                  </div>
                  <div className="mt-4">
                    <span className="text-green-400">root@quanta:~$</span>{" "}
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in">
              <div className="bg-gray-50 border border-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-extrabold text-black mb-6 tracking-tight">
                Mainnet PQC Migrations
              </h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                The quantum threat is imminent. We partner with legacy protocols to execute
                zero-downtime migrations from vulnerable ECDSA algorithms to NIST-standardized
                Post-Quantum schemes.
              </p>
              <ul className="space-y-4">
                {[
                  "Kyber KEM & Falcon-512 DSS implementations",
                  "State Merkle-Tree transitions",
                  "Wallet Infrastructure Upgrades",
                  "Cryptographic Auditing & Verification",
                ].map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center text-black font-bold text-sm bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl shadow-sm w-max"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gray-400 mr-3" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── CTA for PQC ── */}
          <div className="mt-6 flex justify-center">
            <Link href="/services/pqc-migrations" className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#00E599] transition-colors border-b-2 border-black hover:border-[#00E599] pb-0.5">
              Deep Dive: PQC Migrations <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
          <ServiceCTA
            headline="Is your protocol quantum-vulnerable?"
            subline="We conduct free preliminary assessments. Get a report on your current cryptographic exposure before the threat arrives."
            primaryLabel="Request Free Audit"
            primaryHref="/contact"
            secondaryLabel="Read Research"
            secondaryHref="/research"
          />
        </div>
      </section>

      {/* ── DEEP DIVE 3: AI NETWORKS ────────────────────────────── */}
      <section id="ai-agents" className="bg-black py-24 overflow-hidden text-white relative">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-white opacity-[0.02] blur-[150px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 animate-fade-in">
              <div className="bg-white/10 border border-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <BrainCircuit className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">
                Autonomous AI Agents
              </h2>
              <p className="text-lg text-gray-400 font-medium leading-relaxed mb-8">
                Integrate intelligent autonomy at the protocol level. We architect specialized nodes
                running LLM-driven deterministic agents performing predictive automated trading,
                risk-monitoring, and dynamic gas optimization.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Deterministic On-Chain AI",
                  "Predictive Resource Pricing",
                  "Validator Agent Frameworks",
                  "Decentralized Compute Pipelines",
                ].map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-center text-white font-bold text-sm bg-white/5 border border-white/10 px-4 py-4 rounded-xl"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-500 mr-3" /> {feat}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 animate-fade-in">
              <div className="bg-[#050505] rounded-[2rem] border border-gray-800 shadow-2xl p-8 h-[450px] relative overflow-hidden font-mono text-sm flex flex-col justify-end">
                <div className="opacity-40 mb-auto">
                  <span className="text-gray-600 block">Initializing Agent Sequence...</span>
                  <span className="text-gray-600 block">Model: Qwen-3-72B</span>
                  <span className="text-gray-600 block">Risk Tolerance: Strict</span>
                  <span className="text-gray-600 block mt-4">--- STREAM ---</span>
                </div>
                <div className="space-y-3">
                  <div className="text-gray-400">
                    <span className="text-blue-400 mr-2">[14:02:01]</span> Analyzing mempool
                    transactions...
                  </div>
                  <div className="text-gray-400">
                    <span className="text-yellow-400 mr-2">[14:02:04]</span> Arbitrage opportunity
                    identified in Liquidity Pool A.
                  </div>
                  <div className="text-gray-400">
                    <span className="text-blue-400 mr-2">[14:02:05]</span> Calculating deterministic
                    execution path...
                  </div>
                  <div className="text-white font-bold bg-green-500/10 border border-green-500/20 p-3 rounded-lg mt-4 shadow-lg shadow-green-500/5">
                    <span className="text-green-400 mr-2">➜</span> Executing Atomic Swap Tx:
                    0x8a92...b14e
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA for AI Agents (dark variant) ── */}
          <div className="mt-6 flex justify-center">
            <Link href="/services/ai-agents" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#00E599] transition-colors border-b-2 border-white hover:border-[#00E599] pb-0.5">
              Deep Dive: AI Agents <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
          <ServiceCTA
            headline="Deploy intelligence at the consensus layer."
            subline="Schedule a technical call with our AI integration team to scope your agent deployment timeline."
            primaryLabel="Schedule a Call"
            primaryHref="/contact"
            secondaryLabel="View Ecosystem"
            secondaryHref="/ecosystem"
            dark
          />
        </div>
      </section>



      {/* ── HOW WE WORK ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12 text-center">
          <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block">
            Engagement Process
          </span>
          <h3 className="text-3xl font-extrabold text-black tracking-tight">
            How We Work
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              icon: MessageSquare,
              title: "Discovery Call",
              desc: "We start with a technical consultation to understand your protocol, its pain points, and your institutional objectives.",
            },
            {
              step: "02",
              icon: FileSearch,
              title: "Technical Scoping",
              desc: "Our engineers produce a detailed architecture proposal, timeline, and fixed-price engagement plan.",
            },
            {
              step: "03",
              icon: CalendarCheck,
              title: "Build & Deploy",
              desc: "We execute end-to-end — from code to mainnet deployment — with full documentation and knowledge transfer.",
            },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="p-8 bg-gray-50 border border-gray-100 rounded-[1.5rem] relative hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all"
              >
                <span className="font-mono text-[10px] font-bold text-gray-300 mb-5 block tracking-widest">
                  {step.step}
                </span>
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-5 h-5 text-black" />
                </div>
                <h4 className="text-xl font-extrabold text-black mb-3 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FINAL GLOBAL CTA ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
          <span className="relative z-10 text-gray-500 font-bold tracking-widest uppercase text-xs mb-6 block">
            Enterprise Protocol Engineering
          </span>
          <h3 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter">
            Ready to engineer your sovereign protocol?
          </h3>
          <p className="relative z-10 text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            Our core protocol architecture team is available for deep-tech consulting and
            end-to-end institutional engineering.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1"
            >
              Discuss Infrastructure <ArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center justify-center px-10 py-5 border border-gray-700 text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:border-gray-500 hover:bg-white/5 transition-all"
            >
              Read Our Research <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
