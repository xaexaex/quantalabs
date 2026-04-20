import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BrainCircuit,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Cpu,
  Zap,
  BarChart2,
  Network,
  Lock,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Autonomous AI Agents — On-Chain Intelligence | Quantalabs",
  description:
    "Quantalabs deploys deterministic LLM-driven agent frameworks at the validator node level — for automated trading, predictive gas pricing, risk monitoring, and decentralized compute pipelines.",
  alternates: { canonical: "https://quantalabs.cc/services/ai-agents" },
  openGraph: {
    title: "Autonomous AI Agents — On-Chain Intelligence | Quantalabs",
    description:
      "LLM-driven deterministic agents running natively on validator nodes. Protocol-level AI for institutional blockchain networks.",
    url: "https://quantalabs.cc/services/ai-agents",
    images: [{ url: "/seo/image.png", width: 1200, height: 630 }],
  },
};

const features = [
  {
    icon: Cpu,
    title: "Deterministic On-Chain AI",
    desc: "LLM-driven agents with guaranteed deterministic outputs — every decision is reproducible, auditable, and consensus-safe.",
  },
  {
    icon: BarChart2,
    title: "Predictive Resource Pricing",
    desc: "ML models trained on mempool dynamics dynamically optimize gas pricing, reducing transaction costs by up to 40% under volatile conditions.",
  },
  {
    icon: Network,
    title: "Validator Agent Frameworks",
    desc: "Specialized node software extensions that run agent inference locally on validator hardware — no centralized API dependency.",
  },
  {
    icon: Zap,
    title: "Atomic Arbitrage Execution",
    desc: "Agents identify cross-pool arbitrage within a single block window and construct atomic multi-step transaction bundles for guaranteed profit extraction.",
  },
  {
    icon: Lock,
    title: "Risk Monitoring Sentinels",
    desc: "Autonomous watchdog agents monitor on-chain liquidity health, whale wallet movements, and protocol anomalies in real time.",
  },
  {
    icon: RefreshCw,
    title: "Decentralized Compute Pipelines",
    desc: "Distribute AI inference workloads across the validator network — eliminating single points of failure and centralized ML infrastructure.",
  },
];

const agentTypes = [
  { name: "ARBITRAGE_AGENT", model: "Qwen-3-72B", status: "RUNNING", color: "text-[#00E599]" },
  { name: "RISK_SENTINEL", model: "Quantalabs-7B", status: "MONITORING", color: "text-blue-400" },
  { name: "GAS_OPTIMIZER", model: "Quantalabs-1B", status: "ACTIVE", color: "text-[#00E599]" },
  { name: "LIQUIDITY_REBAL", model: "Qwen-3-72B", status: "QUEUED", color: "text-yellow-400" },
];

export default function AiAgentsPage() {
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
                <BrainCircuit className="w-4 h-4 text-black" />
                <span className="text-xs font-black uppercase tracking-widest text-gray-600">AI Systems</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black mb-6 leading-[1.0]">
                Autonomous<br />
                <span className="text-gray-300">AI Agents.</span>
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-xl">
                Integrate intelligent autonomy at the protocol level. We architect specialized validator nodes
                running LLM-driven deterministic agents for trading, risk management, and dynamic
                resource optimization — all operating natively on-chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
                >
                  Deploy AI Agents <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-black font-bold rounded-xl hover:border-black transition-all text-sm uppercase tracking-wider"
                >
                  All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-950 aspect-square md:aspect-[4/3] lg:aspect-square shadow-2xl animate-fade-in">
              <Image
                src="/solutions/validators.png"
                alt="Autonomous AI Agents on Blockchain Illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Base Model</p>
                  <p className="text-[#00E599] font-extrabold text-sm font-mono">Qwen-3-72B</p>
                </div>
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Execution</p>
                  <p className="text-white font-extrabold text-sm">Deterministic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE AGENT CONSOLE ───────────────────────────────────── */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Agent dashboard */}
            <div className="bg-[#050505] rounded-[2rem] border border-gray-800 shadow-2xl p-8 font-mono text-sm">
              <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Agent Runtime — Node 4821</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00E599] rounded-full animate-pulse" />
                  <span className="text-[#00E599] text-xs font-bold">LIVE</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {agentTypes.map((a, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-xl p-4">
                    <div>
                      <span className="text-gray-300 font-bold text-xs block">{a.name}</span>
                      <span className="text-gray-600 text-[10px]">model: {a.model}</span>
                    </div>
                    <span className={`text-[10px] font-bold ${a.color}`}>{a.status}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-gray-800 pt-4">
                <div className="text-gray-400"><span className="text-blue-400 mr-2">[14:02:01]</span> ARBITRAGE_AGENT: Analyzing mempool...</div>
                <div className="text-gray-400"><span className="text-yellow-400 mr-2">[14:02:04]</span> Opportunity in Liquidity Pool A → +0.31 QBTC</div>
                <div className="text-white font-bold mt-3 bg-green-500/10 border border-green-500/20 p-3 rounded-lg">
                  <span className="text-green-400 mr-2">➜</span> Executing Atomic Swap: 0x8a92...b14e
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block">Live Agent Runtime</span>
              <h2 className="text-4xl font-extrabold text-white tracking-tight mb-6">
                Intelligence that runs at block speed.
              </h2>
              <p className="text-gray-400 font-medium leading-relaxed text-lg mb-8">
                Our agents don&apos;t call external APIs — they run as first-class node processes with
                direct mempool access and sub-block-time decision latency. Every action is deterministic,
                meaning the same agent state always produces the same transaction output.
              </p>
              <ul className="space-y-3">
                {["No external API dependencies", "Sub-10ms inference latency on validator hardware", "Auditable decision logs for every action", "Slashing-resistant agent isolation sandboxes"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                    <ArrowRight className="w-4 h-4 text-[#00E599] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ─────────────────────────────────────────── */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-3 block">Agent Capabilities</span>
            <h2 className="text-4xl font-extrabold text-black tracking-tight">Protocol-native intelligence.</h2>
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
          <div className="bg-gray-50 border border-gray-200 rounded-[2.5rem] p-12 md:p-20 text-center">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block">Schedule Now</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tighter">
              Deploy intelligence at the consensus layer.
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Our AI systems team will scope your agent deployment in a 60-minute technical review.
              No vendor lock-in, no cloud dependency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:-translate-y-1">
                Schedule a Technical Call <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-10 py-5 border border-gray-200 text-gray-700 font-bold uppercase tracking-wider text-sm rounded-xl hover:border-black hover:text-black transition-all">
                All Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
