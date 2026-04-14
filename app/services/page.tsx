import type { Metadata } from "next";
import { Blocks, BrainCircuit, ShieldCheck, Code2, ArrowUpRight, ArrowRight, Network, CheckCircle2, Terminal } from "lucide-react";
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

export default function ServicesPage() {

  return (
    <div className="pt-24 min-h-screen pb-32 bg-white selection:bg-gray-200">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center pt-12 md:pt-20">
        <div className="animate-fade-in">
          <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block">
            Capabilities & R&D
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-black mb-8 leading-[1.05]">
            Engineering the <br />
            <span className="text-gray-300">Decentralized Future</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            From bespoke sovereign rollups to full-scale post-quantum algorithmic migrations, our engineering team architects the next generation of institutional networks.
          </p>
        </div>
      </section>

      {/* Deep Dive 1: L2 AppChains */}
      <section id="appchains" className="py-24 border-y border-gray-100 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 animate-fade-in">
              <div className="bg-white border border-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                 <Blocks className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-extrabold text-black mb-6 tracking-tight">Sovereign L2 AppChains</h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                We construct specialized Layer 2 rollups that leverage Quantachain’s native Rust/WASM execution environment. Designed for institutional throughput, our AppChains guarantee high execution speed and instant deterministic finality.
              </p>
              <ul className="space-y-4">
                {['Custom Gas & Tokenomics Modules', 'Zero-Knowledge (zK) Sequencer Integration', 'Trustless Interoperability Bridges', '120K+ Peak TPS Architecture'].map((feat, i) => (
                  <li key={i} className="flex items-center text-black font-bold text-sm bg-white border border-gray-100 px-4 py-3 rounded-xl shadow-sm w-max">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-3" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2 animate-fade-in">
               <div className="bg-white rounded-[2rem] border border-gray-200 shadow-xl p-8 aspect-square md:aspect-auto md:h-[450px] flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-[100px] -mr-40 -mt-40 transition-transform group-hover:scale-110"></div>
                  
                  <div className="relative z-10 flex justify-between items-start mb-12">
                     <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Network Status</span>
                     </div>
                     <span className="text-xs font-mono font-bold text-black border border-gray-200 bg-gray-50 px-3 py-1 rounded-full">MAINNET-BETA</span>
                  </div>

                  <div className="relative z-10 grid grid-cols-2 gap-4 flex-grow">
                     <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-center">
                        <span className="text-gray-400 font-mono text-xs mb-2">BLOCK_TIME</span>
                        <span className="text-4xl font-extrabold text-black">&lt;400<span className="text-xl text-gray-400 ml-1">ms</span></span>
                     </div>
                     <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-center">
                        <span className="text-gray-400 font-mono text-xs mb-2">ACTIVE_NODES</span>
                        <span className="text-4xl font-extrabold text-black">12,480</span>
                     </div>
                     <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-center col-span-2">
                        <span className="text-gray-400 font-mono text-xs mb-2">THROUGHPUT_MAX</span>
                        <span className="text-5xl font-extrabold text-black tracking-tighter">124,000<span className="text-2xl text-gray-400 ml-2">TPS</span></span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 2: PQC Migrations */}
      <section id="pqc-migrations" className="py-24 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2 order-2 lg:order-1 animate-fade-in">
               <div className="bg-[#0A0A0A] rounded-[2rem] border border-gray-800 shadow-2xl overflow-hidden h-[450px] flex flex-col">
                  {/* Terminal Header */}
                  <div className="bg-[#111] border-b border-gray-800 p-4 flex items-center justify-between">
                     <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                     </div>
                     <div className="text-gray-500 font-mono text-xs flex items-center"><Terminal className="w-3 h-3 mr-2"/> migration.sh</div>
                     <div className="w-12"></div>
                  </div>
                  {/* Terminal Body */}
                  <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden text-gray-300">
                     <div><span className="text-green-400">root@quanta:~$</span> quanta-cli network upgrade --target pqc_falcon512</div>
                     <div className="text-gray-500 mt-2">[INFO] Initiating mainnet state migration protocol...</div>
                     <div className="text-gray-500">[INFO] Pausing mempool & securing validator signatures...</div>
                     <div className="text-gray-500">[INFO] Compiling WASM cryptographic primitives...</div>
                     <div className="mt-4"><span className="text-blue-400">Loading module:</span> kyber_kem_v1.wasm [100%]</div>
                     <div><span className="text-blue-400">Loading module:</span> falcon_512_sig.wasm [100%]</div>
                     <div className="mt-4 text-emerald-400">✔ Cryptographic modules verified.</div>
                     <div className="text-emerald-400">✔ Merkle-tree state recalculated.</div>
                     <div className="mt-4 font-bold text-white">Migration Complete. Network is now Post-Quantum Secure.</div>
                     <div className="mt-4"><span className="text-green-400">root@quanta:~$</span> <span className="animate-pulse">_</span></div>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-in">
              <div className="bg-gray-50 border border-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                 <ShieldCheck className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-extrabold text-black mb-6 tracking-tight">Mainnet PQC Migrations</h2>
              <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                The quantum threat is imminent. We partner with legacy protocols to execute zero-downtime migrations from vulnerable ECDSA algorithms to NIST-standardized Post-Quantum schemes.
              </p>
              <ul className="space-y-4">
                {['Kyber KEM & Falcon-512 DSS implementations', 'State Merkle-Tree transitions', 'Wallet Infrastructure Upgrades', 'Cryptographic Auditing & Verification'].map((feat, i) => (
                  <li key={i} className="flex items-center text-black font-bold text-sm bg-gray-50 border border-gray-100 px-4 py-3 rounded-xl shadow-sm w-max">
                    <CheckCircle2 className="w-4 h-4 text-gray-400 mr-3" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 3: AI Networks */}
      <section id="ai-agents" className="bg-black py-24 mb-24 overflow-hidden text-white relative">
         <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-white opacity-[0.02] blur-[150px] rounded-full"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 animate-fade-in">
              <div className="bg-white/10 border border-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                 <BrainCircuit className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Autonomous AI Agents</h2>
              <p className="text-lg text-gray-400 font-medium leading-relaxed mb-8">
                Integrate intelligent autonomy at the protocol level. We architect specialized nodes running LLM-driven deterministic agents performing predictive automated trading, risk-monitoring, and dynamic gas optimization.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Deterministic On-Chain AI', 'Predictive Resource Pricing', 'Validator Agent Frameworks', 'Decentralized Compute Pipelines'].map((feat, i) => (
                  <div key={i} className="flex items-center text-white font-bold text-sm bg-white/5 border border-white/10 px-4 py-4 rounded-xl">
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
                        <span className="text-blue-400 mr-2">[14:02:01]</span> Analyzing mempool transactions...
                     </div>
                     <div className="text-gray-400">
                        <span className="text-yellow-400 mr-2">[14:02:04]</span> Arbitrage opportunity identified in Liquidity Pool A.
                     </div>
                     <div className="text-gray-400">
                        <span className="text-blue-400 mr-2">[14:02:05]</span> Calculating deterministic execution path...
                     </div>
                     <div className="text-white font-bold bg-green-500/10 border border-green-500/20 p-3 rounded-lg mt-4 shadow-lg shadow-green-500/5">
                        <span className="text-green-400 mr-2">➜</span> Executing Atomic Swap Tx: 0x8a92...b14e
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Capabilities Grid */}
      <section id="enterprise-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         <div className="mb-12 text-center">
            <h3 className="text-3xl font-extrabold text-black tracking-tight">Additional Enterprise Services</h3>
         </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
           <div className="p-10 bg-white border border-gray-200 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-black transition-all group">
             <Code2 className="w-8 h-8 text-black mb-6" />
             <h4 className="text-2xl font-extrabold text-black mb-4 tracking-tight">WASM Cryptography</h4>
             <p className="text-gray-500 font-medium leading-relaxed">
               Custom web and mobile browser integrations utilizing our highly-optimized, proprietary Rust-to-WASM post-quantum cryptographic libraries for end-user wallets.
             </p>
           </div>
           <div className="p-10 bg-white border border-gray-200 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-black transition-all group">
             <Network className="w-8 h-8 text-black mb-6" />
             <h4 className="text-2xl font-extrabold text-black mb-4 tracking-tight">Validation & RPC Nodes</h4>
             <p className="text-gray-500 font-medium leading-relaxed">
               Enterprise-grade dedicated RPC infrastructure and Bare-Metal highly available validator active/passive clusters supporting Quantachain and its localized L2 networks.
             </p>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-gray-50 border border-gray-200 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <h3 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tighter">
               Ready to engineer your sovereign protocol?
             </h3>
             <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               Our core protocol architecture team is available for deep-tech consulting and end-to-end institutional engineering.
             </p>
             <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-black text-white font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:-translate-y-1">
                Discuss Infrastructure
                <ArrowUpRight className="w-5 h-5 ml-2" />
             </Link>
         </div>
      </section>

    </div>
  );
}
