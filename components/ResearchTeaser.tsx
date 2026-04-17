"use client";

import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";

const papers = [
  {
    doi: "10.5281/zenodo.18753528",
    title: "QUANTA: Engineering a Production-Ready Post-Quantum Blockchain with Falcon-512 Lattice Signatures",
    tag: "ZENODO PUBLICATION",
    date: "February 24, 2026",
    href: "https://doi.org/10.5281/zenodo.18753528",
  },
  {
    doi: "10.5281/zenodo.18753529",
    title: "Learning with Correlated Errors: A New Lattice Hard Problem with Worst-Case Reductions",
    tag: "ZENODO PUBLICATION",
    date: "March 11, 2026",
    href: "https://doi.org/10.5281/zenodo.18753528",
  },
  {
    doi: "10.5281/zenodo.18753530",
    title: "Quantum Temporal Order: Structural Inevitability of Modular Flow and the Problem of Time",
    tag: "ZENODO PUBLICATION",
    date: "March 3, 2026",
    href: "https://doi.org/10.5281/zenodo.18753528",
  },
];

export default function ResearchTeaser() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-fade-in"
        >
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <BookOpen className="w-5 h-5 text-[#00E599]" />
              <span className="font-bold tracking-widest text-xs uppercase text-gray-400">Academic Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tighter leading-tight">
              Peer-reviewed cryptography. <br className="hidden md:block" /> Built for reality.
            </h2>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-[#00E599] hover:text-black transition-all hover:scale-105 active:scale-95 shadow-lg text-sm shrink-0"
          >
            Read All Whitepapers
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Subheading */}
        <p className="text-lg text-gray-500 font-medium mb-12 leading-relaxed max-w-2xl">
          Our core architecture is derived from rigorous academic research. We are the first to actively implement state-aware NIST-standardized Falcon-512 signatures into a globally distributed consensus engine.
        </p>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {papers.map((paper, i) => (
            <a
              key={i}
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-50 border border-gray-100 rounded-[1.5rem] p-8 hover:bg-white hover:border-[#00E599] hover:shadow-[0_8px_40px_rgba(0,229,153,0.08)] transition-all duration-300 relative overflow-hidden animate-fade-in"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-5 text-[4rem] font-extrabold text-gray-100 leading-none select-none pointer-events-none group-hover:text-gray-200 transition-colors">
                0{i + 1}
              </div>

              <div className="relative z-10 flex justify-between items-start mb-4">
                <span className="text-[9px] font-black tracking-[0.15em] text-gray-400 uppercase">
                  {paper.tag}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors shrink-0 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="relative z-10 text-base font-bold text-black leading-snug mb-6 pr-2">
                {paper.title}
              </h3>

              <div className="relative z-10 flex flex-col gap-1 pt-4 border-t border-gray-100">
                <span className="text-[10px] font-mono text-gray-300">DOI: {paper.doi}</span>
                <span className="text-xs font-bold text-gray-400">{paper.date}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
