"use client";

import { Layers, BrainCircuit, ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPreview() {
  const services = [
    {
      icon: Layers,
      title: "L1/L2 AppChains",
      desc: "Sovereign Layer 2 rollups on Quantachain's Rust/WASM VM — 124K TPS, ZK sequencers, trustless bridges.",
      href: "/services/appchains",
      badge: "Live",
    },
    {
      icon: ShieldCheck,
      title: "PQC Migrations",
      desc: "Zero-downtime migrations from ECDSA to NIST-standardized Falcon-512 & Kyber KEM for production networks.",
      href: "/services/pqc-migrations",
      badge: null,
    },
    {
      icon: BrainCircuit,
      title: "AI Agents",
      desc: "Deterministic LLM-driven autonomous agents running natively at the validator and consensus layer.",
      href: "/services/ai-agents",
      badge: null,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-14">
          <div className="max-w-xl animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tighter mb-6">
              Deep-Tech Solutions <br className="hidden md:block" />for the Vanguard.
            </h2>
            <p className="text-lg text-gray-500 font-medium mb-8">
              We don&apos;t build generic smart contracts. We architect sovereign infrastructure
              at the frontier of blockchain, AI, and post-quantum cryptography.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-bold text-black border-b-[3px] border-black pb-1 hover:text-[#00E599] hover:border-[#00E599] transition-colors uppercase tracking-widest"
            >
              Explore All Services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* 3 service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 animate-fade-in">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:border-black transition-all shadow-sm hover:shadow-xl flex flex-col"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-gray-100 w-11 h-11 rounded-xl flex items-center justify-center group-hover:bg-black transition-all">
                    <Icon className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                  </div>
                  {service.badge && (
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-100">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-extrabold text-black text-xl mb-3 tracking-tight">{service.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed flex-1">{service.desc}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-gray-400 group-hover:text-black transition-colors">
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
