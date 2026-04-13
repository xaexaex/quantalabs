"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Shield, Wallet } from "lucide-react";

export default function EcosystemGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {/* Quanta L1 Core - Large feature card (Spans 2 columns) */}
      <motion.a
        variants={item}
        href="https://github.com/quantachain/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative md:col-span-2 rounded-[2rem] border border-gray-200 p-8 md:p-12 bg-white hover:border-black transition-all overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 flex flex-col justify-between min-h-[340px]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex justify-between items-start mb-12">
          <div className="bg-black w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-sm group-hover:border-black transition-colors">
            Layer 1 Base
          </span>
        </div>
        
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-4 flex items-center tracking-tight">
            Quanta L1 Core
            <ArrowUpRight className="w-8 h-8 ml-3 text-gray-300 group-hover:text-black transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </h3>
          <p className="text-gray-500 font-medium leading-relaxed text-lg max-w-xl pr-4">
            The bare-metal institutional settlement node. Written entirely in memory-safe Rust with adaptive PoW, delivering the highest degree of post-quantum security without smart contract vulnerabilities.
          </p>
        </div>
      </motion.a>

      {/* QuaScan Explorer - Vertical Card */}
      <motion.a
        variants={item}
        href="https://scan.quantachain.org"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative md:col-span-1 border border-transparent p-8 md:p-10 bg-gray-50 hover:bg-white rounded-[2rem] hover:border-black transition-all shadow-none hover:shadow-2xl hover:shadow-gray-200/50 flex flex-col justify-between min-h-[340px]"
      >
        <div className="relative z-10">
          <div className="bg-white border border-gray-200 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:border-black">
            <Globe className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-2xl font-extrabold text-black mb-3 tracking-tight">
            QuaScan Explorer
          </h3>
          <p className="text-gray-500 font-medium leading-relaxed">
            Real-time block explorer and network analytics dashboard. Monitor the live testnet in real-time.
          </p>
        </div>
        
        <div className="mt-8 relative z-10 flex justify-end">
             <div className="bg-white border border-gray-200 rounded-full p-3 group-hover:bg-black group-hover:border-black transition-colors shadow-sm">
                <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
             </div>
        </div>
      </motion.a>

      {/* Quanta Wallet - Horizontal Card */}
      <motion.a
        variants={item}
        href="https://chrome.google.com/webstore/detail/glofbcgdmodmaohealombcgoapdbdaff"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative md:col-span-1 border border-transparent p-8 md:p-10 bg-gray-50 hover:bg-white rounded-[2rem] hover:border-black transition-all shadow-none hover:shadow-2xl hover:shadow-gray-200/50 flex flex-col justify-between"
      >
        <div className="relative z-10">
          <div className="bg-white border border-gray-200 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:border-black">
            <Wallet className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-2xl font-extrabold text-black mb-3 tracking-tight">
            Quanta Wallet
          </h3>
          <p className="text-gray-500 font-medium leading-relaxed text-sm">
            A robust browser extension wallet utilizing Falcon-512 signatures and Kyber-1024 encryption.
          </p>
        </div>

        <div className="mt-8 relative z-10 flex justify-between items-center">
            <span className="text-[10px] bg-white border border-gray-200 px-3 py-1 rounded-full font-black uppercase tracking-[0.1em] text-gray-500 group-hover:border-black group-hover:text-black transition-colors">
              v1.0.3 WebStore
            </span>
             <div className="bg-white border border-gray-200 rounded-full p-2.5 group-hover:bg-black group-hover:border-black transition-colors shadow-sm">
                <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
             </div>
        </div>
      </motion.a>

      {/* Quanta SDK - Wide Card */}
      <motion.div
        variants={item}
        className="group relative md:col-span-2 rounded-[2rem] border border-gray-200 p-8 md:p-12 bg-white hover:border-black transition-all shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full overflow-hidden"
      >
         <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-bl-full opacity-50 transition-transform duration-700 ease-out group-hover:scale-125" />

        <div className="relative z-10 max-w-lg">
          <div className="flex items-center space-x-4 mb-8">
              <div className="bg-black border border-black w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-sm group-hover:border-black transition-colors">
                Developer SDK
              </span>
          </div>
          <h3 className="text-3xl font-extrabold text-black mb-3 tracking-tight">Quanta SDK (WASM)</h3>
          <p className="text-gray-500 font-medium leading-relaxed">
            Post-quantum cryptography bindings compiled to WebAssembly. Enables generation of Falcon-512 signatures natively in JS/TS environments.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row md:flex-col gap-4">
              <a href="https://www.npmjs.com/package/quanta-wasm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-6 py-4 border border-gray-200 shadow-sm bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-50 hover:border-black transition-all w-full md:w-56">
                <span>NPM Package</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black ms-2" />
              </a>
              <a href="https://lib.rs/crates/quanta-wasm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-6 py-4 border border-gray-200 shadow-sm bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-50 hover:border-black transition-all w-full md:w-56">
                <span>Crates.io</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black ms-2" />
              </a>
        </div>
      </motion.div>

    </motion.div>
  );
}
