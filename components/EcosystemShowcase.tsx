import { ArrowUpRight } from "lucide-react";
import { getLatestBlocks, getNetworkStats } from "@/lib/quanta-api";

export default async function EcosystemShowcase() {
  const [stats, blocks] = await Promise.all([
    getNetworkStats(),
    getLatestBlocks(3),
  ]);

  const chainLength = stats?.chain_length ?? "—";
  const totalTxs = stats?.total_transactions ?? "—";

  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-white overflow-hidden relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">

          {/* Left: Text + stats */}
          <div className="lg:w-5/12">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block">
              Ecosystem Guardian
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 text-black leading-[1.05]">
              Backing the <span className="text-gray-300">Quantachain</span> Mission.
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
              As the primary development entity, Quantalabs is responsible for the ongoing architecture and expansion of the Quantachain open-source ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 flex flex-col justify-center">
                <div className="text-4xl md:text-5xl font-extrabold text-black mb-2 tracking-tighter">30s</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Avg Finality</div>
              </div>
              <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 flex flex-col justify-center">
                <div className="text-3xl md:text-4xl font-extrabold text-black mb-2 tracking-tighter">
                  {typeof chainLength === "number" ? chainLength.toLocaleString() : chainLength}
                </div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Blocks</div>
              </div>
            </div>
          </div>

          {/* Right: QSCAN live feed */}
          <div className="lg:w-7/12 w-full">
            <div className="relative rounded-[2rem] bg-white border border-gray-200 p-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] h-[500px]">
              <div className="h-full w-full bg-gray-50 rounded-[1.5rem] relative z-10 flex flex-col p-6 md:p-8 overflow-hidden border border-gray-100">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <a
                    href="https://scan.quantachain.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-black font-mono text-sm font-bold tracking-widest border border-gray-200 px-4 py-2 rounded-lg bg-white shadow-sm hover:border-black transition-colors flex items-center space-x-2"
                  >
                    <span>QUASCAN</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                  </a>
                  <span className="text-green-600 font-mono text-xs font-bold uppercase flex items-center space-x-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span>Live Network</span>
                  </span>
                </div>

                {/* Column headers */}
                <div className="grid grid-cols-[auto_1fr_auto] gap-4 px-1 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Block</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Hash</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 text-right">Status</span>
                </div>

                {/* Block rows */}
                <div className="flex-1 flex flex-col justify-start gap-3 overflow-hidden">
                  {blocks.length > 0 ? blocks.map((block, i) => (
                    <a
                      key={i}
                      href={`https://scan.quantachain.org/block/${block.index}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full bg-white rounded-xl p-4 sm:p-5 grid grid-cols-[auto_1fr_auto] gap-4 items-center border border-gray-200 shadow-sm hover:border-black transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-sm text-black font-extrabold font-mono group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                        {block.index}
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-sm font-bold text-black truncate">
                          {block.hash.slice(0, 20)}…
                        </div>
                        <div className="text-xs font-medium text-gray-500 mt-1">
                          {block.transactions?.length ?? 0} tx
                          {block.timestamp ? ` · ${new Date(block.timestamp * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : ""}
                        </div>
                      </div>
                      <div className="text-black font-mono text-[10px] sm:text-xs font-bold border border-gray-200 px-3 py-1.5 rounded bg-gray-50 group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors shrink-0">
                        Verified
                      </div>
                    </a>
                  )) : (
                    /* Fallback skeleton if RPC is unavailable */
                    [0, 1, 2].map((i) => (
                      <div key={i} className="w-full bg-white rounded-xl p-4 sm:p-5 flex justify-between items-center border border-gray-200 shadow-sm">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 animate-pulse" />
                          <div className="space-y-2">
                            <div className="h-3 w-36 bg-gray-200 rounded animate-pulse" />
                            <div className="h-2 w-20 bg-gray-100 rounded animate-pulse" />
                          </div>
                        </div>
                        <div className="h-6 w-16 bg-gray-100 rounded animate-pulse" />
                      </div>
                    ))
                  )}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

