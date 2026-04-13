"use client";

import { Users, Code, Globe2, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CareersPage() {
  const [hoveredRole, setHoveredRole] = useState<number | null>(null);

  const roles = [
    {
      title: "Senior Rust Engineer",
      type: "Full-Time",
      location: "Remote (Global)",
      department: "Core Protocol",
    },
    {
      title: "Cryptography Researcher (PQC)",
      type: "Full-Time",
      location: "Remote / London",
      department: "Research",
    },
    {
      title: "AI Integration Lead",
      type: "Full-Time",
      location: "Remote (US/EU)",
      department: "AppChains",
    },
    {
      title: "Frontend Engineer (Next.js)",
      type: "Full-Time",
      location: "Remote (Global)",
      department: "Web Ecosystem",
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 pt-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl animate-fade-in">
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block">
              Careers
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-8 tracking-tighter leading-[1.05]">
              Build the Future of <br/>
              <span className="text-gray-300">Web3.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              We are a team of cryptographers, distributed systems engineers, and AI researchers. Join us to solve the hardest problems in scaling and securing decentralized networks against quantum threats.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-5 group">
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-2xl border border-gray-100 group-hover:bg-black transition-colors duration-500">
                  <Globe2 className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <span className="block font-bold text-black text-base">Global Remote Culture</span>
                  <span className="block text-gray-500 text-sm font-medium">Work from anywhere with our distributed team.</span>
                </div>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-2xl border border-gray-100 group-hover:bg-black transition-colors duration-500">
                  <Code className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <span className="block font-bold text-black text-base">Frontier Tech Stack</span>
                  <span className="block text-gray-500 text-sm font-medium">Next-Gen L1/L2, PQC, and AI integrations.</span>
                </div>
              </div>

              <div className="flex items-center space-x-5 group">
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-2xl border border-gray-100 group-hover:bg-black transition-colors duration-500">
                  <Users className="w-6 h-6 text-black group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <span className="block font-bold text-black text-base">Elite Engineering Teams</span>
                  <span className="block text-gray-500 text-sm font-medium">Collaborate with top talent in the industry.</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="w-full bg-gray-50 border border-gray-100 rounded-[2rem] flex items-center justify-center lg:min-h-[600px] min-h-[400px] shadow-sm overflow-hidden relative group animate-fade-in"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             <div className="text-center p-8 relative z-10 scale-95 group-hover:scale-100 transition-transform duration-700">
               <Users className="w-10 h-10 text-gray-300 mx-auto mb-6" />
               <p className="font-mono text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">Workspace & Culture</p>
               <p className="text-sm font-medium text-gray-500 max-w-xs mx-auto">
                 [ Insert high-end photography of the engineering team collaborating or modern minimalist office environment here ]
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="bg-gray-50 py-24 md:py-32 border-t border-gray-100">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block text-center">
                Join the Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight text-center">Open Roles</h2>
            </div>

            <div className="flex flex-col gap-4">
               {roles.map((role, idx) => (
                  <a 
                    key={idx}
                    href="mailto:careers@quantalabs.cc"
                    onMouseEnter={() => setHoveredRole(idx)}
                    onMouseLeave={() => setHoveredRole(null)}
                    className="group block bg-white border border-gray-200 p-8 rounded-2xl hover:border-black hover:shadow-xl transition-all duration-300 relative overflow-hidden animate-fade-in"
                  >
                     <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                           <h3 className="text-2xl font-bold text-black mb-2 flex items-center">
                             {role.title}
                           </h3>
                           <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500">
                              <span className="bg-gray-100 px-3 py-1 rounded-md">{role.department}</span>
                              <span>{role.location}</span>
                              <span className="hidden sm:inline text-gray-300">•</span>
                              <span>{role.type}</span>
                           </div>
                        </div>

                        <div className="shrink-0 flex items-center justify-center p-4 bg-gray-50 rounded-xl group-hover:bg-black transition-colors duration-300">
                           <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                     </div>
                  </a>
               ))}
            </div>
            
            <div className="mt-16 text-center">
               <p className="text-gray-500 font-medium mb-6">Don't see a perfect fit? We are always looking for exceptional talent.</p>
               <a href="mailto:careers@quantalabs.cc" className="inline-flex items-center text-sm font-bold text-black border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors uppercase tracking-widest">
                  Send Open Application <ArrowRight className="w-4 h-4 ml-2" />
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
