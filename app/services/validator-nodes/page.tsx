import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Network,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Server,
  Globe,
  Zap,
  Shield,
  Activity,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Validator & RPC Node Infrastructure — Enterprise Bare-Metal | Quantalabs",
  description:
    "Enterprise-grade dedicated RPC infrastructure and bare-metal validator clusters for Quantachain and L2 networks. High-availability active/passive failover, 99.99% uptime SLA.",
  alternates: { canonical: "https://quantalabs.cc/services/validator-nodes" },
  openGraph: {
    title: "Validator & RPC Node Infrastructure | Quantalabs",
    description:
      "Bare-metal validator clusters and enterprise RPC infrastructure for Quantachain networks. 99.99% uptime SLA and dedicated support.",
    url: "https://quantalabs.cc/services/validator-nodes",
    images: [{ url: "/seo/image.png", width: 1200, height: 630 }],
  },
};

const features = [
  {
    icon: Server,
    title: "Bare-Metal Validators",
    desc: "Dedicated physical hardware validators — no shared cloud infrastructure, no virtualization overhead, maximum consensus participation reliability.",
  },
  {
    icon: Activity,
    title: "Active/Passive HA Clusters",
    desc: "Automatic failover between active and passive validator nodes with sub-second switchover — zero missed blocks during hardware maintenance or failures.",
  },
  {
    icon: Globe,
    title: "Global RPC Infrastructure",
    desc: "Geographically distributed RPC endpoint clusters across 12+ data centres — latency-optimized for DApps, wallets, and institutional trading systems.",
  },
  {
    icon: Zap,
    title: "Priority Mempool Access",
    desc: "Direct mempool connections on validator nodes provide sub-millisecond transaction propagation and priority fee optimization for institutional submitters.",
  },
  {
    icon: Shield,
    title: "DDoS-Hardened Nodes",
    desc: "Multi-layer DDoS protection, IP allowlisting, and traffic scrubbing — your validator and RPC endpoints remain live under adversarial network conditions.",
  },
  {
    icon: Database,
    title: "Dedicated Node Archives",
    desc: "Full archival node deployments with complete blockchain history — required for compliance, analytics, and deep historical RPC queries.",
  },
];

const slaMetrics = [
  { label: "Validator Uptime SLA", value: "99.99%", green: true },
  { label: "RPC Response P99", value: "<12ms" },
  { label: "Node Regions", value: "12+" },
  { label: "Failover Time", value: "<1s", green: true },
];

export default function ValidatorNodesPage() {
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
                <Network className="w-4 h-4 text-black" />
                <span className="text-xs font-black uppercase tracking-widest text-gray-600">Infrastructure</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black mb-6 leading-[1.0]">
                Validator &amp;<br />
                <span className="text-gray-300">RPC Nodes.</span>
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-xl">
                Enterprise-grade bare-metal validator clusters and globally distributed RPC infrastructure
                for Quantachain and its L2 networks. Built for institutions that cannot afford downtime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
                >
                  Get Infrastructure <ArrowUpRight className="w-4 h-4" />
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
                alt="Global Validator Node Infrastructure Illustration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Uptime SLA</p>
                  <p className="text-[#00E599] font-extrabold text-2xl">99.99%</p>
                </div>
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Failover</p>
                  <p className="text-white font-extrabold text-2xl">&lt;1s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SLA METRICS ──────────────────────────────────────────── */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {slaMetrics.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-gray-600 font-mono text-[10px] uppercase tracking-widest mb-1">{s.label}</p>
                <p className={`text-2xl font-extrabold ${s.green ? "text-[#00E599]" : "text-white"}`}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ─────────────────────────────────────────── */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-3 block">Infrastructure Stack</span>
            <h2 className="text-4xl font-extrabold text-black tracking-tight">Enterprise-grade from hardware up.</h2>
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

      {/* ── INFRASTRUCTURE VISUAL ────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Node status dashboard */}
            <div className="bg-white rounded-[2rem] border border-gray-200 shadow-lg p-8">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Node Cluster Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-600 text-xs font-bold">All Systems Nominal</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { name: "validator-01.fra.quantalabs.cc", region: "Frankfurt", status: "ACTIVE", latency: "8ms" },
                  { name: "validator-02.nyc.quantalabs.cc", region: "New York", status: "ACTIVE", latency: "11ms" },
                  { name: "validator-03.sgp.quantalabs.cc", region: "Singapore", status: "ACTIVE", latency: "14ms" },
                  { name: "validator-04.fra.quantalabs.cc", region: "Frankfurt", status: "STANDBY", latency: "—" },
                  { name: "rpc-01.global.quantalabs.cc", region: "Anycast", status: "SERVING", latency: "9ms" },
                ].map((node, i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
                    <div>
                      <p className="text-xs font-mono font-bold text-black">{node.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold mt-0.5">{node.region}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-400 font-mono">{node.latency}</span>
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${
                        node.status === "ACTIVE" || node.status === "SERVING"
                          ? "bg-green-50 text-green-700 border border-green-100"
                          : "bg-gray-100 text-gray-500 border border-gray-200"
                      }`}>
                        {node.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block">Global Coverage</span>
              <h2 className="text-4xl font-extrabold text-black tracking-tight mb-6">
                Your nodes. Our infrastructure.
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed text-lg mb-8">
                We design, provision, and maintain your validator and RPC node cluster end-to-end.
                From hardware selection to BGP peering, colocation agreements, and ongoing
                24/7 operations management — your infrastructure is always on.
              </p>
              <div className="space-y-3">
                {[
                  "Dedicated hardware — no cloud, no neighbours",
                  "Automated switchover under any failure condition",
                  "24/7 NOC monitoring with 15-min SLA response",
                  "Full observability stack (Prometheus / Grafana)",
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
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-[2.5rem] p-12 md:p-20 text-center">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block">Institutional Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tighter">
              Deploy your validator cluster today.
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Speak to our infrastructure team about scoping your validator and RPC deployment — including
              hardware specs, geographic distribution, and SLA requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-black text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:-translate-y-1">
                Get Infrastructure Quote <ArrowUpRight className="w-5 h-5" />
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
