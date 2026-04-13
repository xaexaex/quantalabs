"use client";

import { Blocks, BrainCircuit, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPreview() {
  const teasers = [
    {
      icon: Blocks,
      title: "L2 AppChains",
      desc: "Custom Layer 2 rollups on the Quanta base layer.",
    },
    {
      icon: ShieldCheck,
      title: "PQC Migrations",
      desc: "NIST-standardized Post-Quantum transition services.",
    },
    {
      icon: BrainCircuit,
      title: "AI Networks",
      desc: "Decentralized autonomous agent architectures.",
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
           <div 
             className="max-w-xl animate-fade-in"
           >
              <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tighter mb-6">
                Deep-Tech Solutions <br className="hidden md:block"/> for the Vanguard.
              </h2>
              <p className="text-lg text-gray-500 font-medium mb-8">
                We don't build generic smart contracts. We architect the sovereign infrastructure required by institutions entering the quantum era.
              </p>
              <Link href="/services" className="inline-flex items-center text-sm font-bold text-black border-b-[3px] border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors uppercase tracking-widest">
                 Explore All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
           </div>

           <div 
             className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto animate-fade-in"
           >
             {teasers.map((service, index) => {
               const Icon = service.icon;
               return (
               <div key={index} className="bg-white border border-gray-200 rounded-3xl p-8 hover:border-black transition-all shadow-sm hover:shadow-xl w-full lg:w-[240px]">
                 <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                   <Icon className="w-6 h-6 text-black" />
                 </div>
                 <h3 className="font-extrabold text-black text-xl mb-3 tracking-tight">{service.title}</h3>
                 <p className="text-sm text-gray-500 font-medium leading-relaxed">{service.desc}</p>
               </div>
             )})}
           </div>
        </div>

      </div>
    </section>
  );
}
