import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, FileText, ExternalLink, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Publications | Quantalabs",
  description: "Academic papers, preprints, and articles on post-quantum cryptography, Falcon-512, and the Quantachain architecture.",
};

const papers = [
  {
    tag: "ZENODO PUBLICATION",
    title: "QUANTA: Engineering a Production-Ready Post-Quantum Blockchain with Falcon-512 Lattice Signatures",
    abstract: "This paper presents the design and implementation of Quantachain, a production-grade distributed ledger employing NIST-standardized Falcon-512 lattice-based signatures for all transaction authentication and block proposals.",
    date: "February 24, 2026",
    href: "https://doi.org/10.5281/zenodo.18753528",
    doi: "10.5281/zenodo.18753528",
  },
  {
    tag: "ZENODO PUBLICATION",
    title: "Quantum Temporal Order: Structural Inevitability of Modular Flow and the Problem of Time",
    abstract: "We explore a framework for temporal ordering in quantum systems under conditions of causal ambiguity, connecting modular Hamiltonian flow with emergent time directionality in distributed protocols.",
    date: "March 3, 2026",
    href: "https://doi.org/10.5281/zenodo.18753528",
    doi: "10.5281/zenodo.18753529",
  },
  {
    tag: "ZENODO PUBLICATION",
    title: "Learning with Correlated Errors: A New Lattice Hard Problem with Worst-Case Reductions and Public-Key Encryption",
    abstract: "We introduce Learning with Correlated Errors (LCE), a new lattice-based hard problem. We demonstrate worst-case to average-case reductions and construct an efficient public-key encryption scheme from LCE hardness assumptions.",
    date: "March 11, 2026",
    href: "https://doi.org/10.5281/zenodo.18753528",
    doi: "10.5281/zenodo.18753530",
  },
];

const articles = [
  {
    tag: "MEDIUM ARTICLE",
    title: "The Quantum Clock Is Ticking — And Only One Blockchain Was Built to Survive It",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    href: "https://medium.com/@quantachain",
  },
  {
    tag: "MEDIUM ARTICLE",
    title: "Quantum Computers Will Steal Your Crypto. We Built a Blockchain That Can't Be Hacked.",
    date: "Feb 22, 2026",
    readTime: "6 min read",
    href: "https://medium.com/@quantachain",
  },
];

export default function ResearchPage() {
  return (
    <div className="pt-24 min-h-screen pb-32 bg-white selection:bg-gray-200">

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12 gap-6">
          <div>
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-5 block">
              Academic Publications
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black leading-[1.0]">
              Research &amp; <br />
              <span className="text-gray-300">Publications</span>
            </h1>
          </div>
          <p className="text-gray-400 font-medium text-base max-w-sm leading-relaxed md:text-right">
            Operating at the forefront of post-quantum cryptography, distributed consensus, and theoretical physics.
          </p>
        </div>
      </section>

      {/* Featured Paper - Hero Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <a
          href={papers[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-black rounded-[2rem] p-10 md:p-16 relative overflow-hidden transition-all hover:shadow-2xl hover:shadow-black/20"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.02] rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none group-hover:opacity-[0.04] transition-opacity"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">Featured Paper</span>
                <span className="text-[10px] font-mono text-gray-600">DOI: {papers[0].doi}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-6 leading-tight">{papers[0].title}</h2>
              <p className="text-gray-400 font-medium leading-relaxed text-base max-w-2xl">{papers[0].abstract}</p>
            </div>
            <div className="shrink-0 flex flex-col items-end gap-4">
              <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
              </div>
              <span className="text-gray-600 font-bold text-sm">{papers[0].date}</span>
            </div>
          </div>
        </a>
      </section>

      {/* Papers + Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Academic Papers */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gray-100 w-9 h-9 rounded-xl flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-black" />
              </div>
              <span className="text-sm font-extrabold text-black uppercase tracking-widest">All Papers</span>
            </div>

            <div className="flex flex-col gap-4">
              {papers.map((paper, i) => (
                <a
                  key={i}
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-gray-100 rounded-2xl p-7 bg-white hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-black tracking-[0.15em] text-gray-400 uppercase group-hover:text-black transition-colors">
                      {paper.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors shrink-0 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="text-base font-bold text-black leading-snug mb-3 pr-2">{paper.title}</h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                    <p className="text-xs font-bold text-gray-400">Published: {paper.date}</p>
                    <span className="text-[10px] font-mono text-gray-300">{paper.doi}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Articles & Quote Block */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-gray-100 w-9 h-9 rounded-xl flex items-center justify-center">
                  <FileText className="w-4 h-4 text-black" />
                </div>
                <span className="text-sm font-extrabold text-black uppercase tracking-widest">Articles &amp; Insights</span>
              </div>

              <div className="flex flex-col gap-4">
                {articles.map((article, i) => (
                  <a
                    key={i}
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border border-gray-100 rounded-2xl p-7 bg-white hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] font-black tracking-[0.15em] text-gray-400 uppercase group-hover:text-black transition-colors">
                        {article.tag}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors shrink-0 ml-2" />
                    </div>
                    <h3 className="text-base font-bold text-black leading-snug mb-4 pr-2">{article.title}</h3>
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                      <span>{article.readTime}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Pull quote block */}
            <div className="bg-gray-50 border border-gray-100 rounded-[1.5rem] p-8 relative overflow-hidden">
              <Quote className="w-8 h-8 text-gray-200 absolute top-6 right-6" />
              <p className="text-black font-bold text-lg leading-relaxed mb-5 relative z-10">
                &ldquo;We are the first production blockchain to implement NIST-standardized Falcon-512 signatures at the consensus layer — not as a layer-2 patch, but as the protocol primitive.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-xs font-extrabold">Q</div>
                <div>
                  <p className="text-black font-extrabold text-sm">Quantalabs Research Team</p>
                  <p className="text-gray-400 text-xs font-medium">February 2026</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Developer Portal CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="https://quantachain.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative overflow-hidden rounded-[2.5rem] bg-black p-10 md:p-14 border border-gray-900 hover:border-gray-700 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                Developer Portal
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Technical Documentation.
              </h2>
              <p className="text-gray-400 font-medium text-lg max-w-xl leading-relaxed">
                Complete node setup guides, RPC API references, testnet faucet, and SDK documentation maintained by Quantalabs.
              </p>
            </div>
            <div className="shrink-0 flex items-center px-8 py-4 border border-gray-700 text-white font-bold rounded-xl group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
              Go to Documentation
              <ExternalLink className="w-4 h-4 ml-2" />
            </div>
          </div>
        </a>
      </section>

    </div>
  );
}
