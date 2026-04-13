"use client";

import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
  };

  return (
    <section className="relative pt-16 pb-8 md:pt-20 md:pb-12 overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center max-w-2xl mt-4 md:mt-0"
          >
            <motion.h1 
              variants={item} 
              className="text-[3.25rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black mb-6 md:mb-8 leading-tight md:leading-[1.05]"
            >
              The Protocol <br className="hidden md:block" />
              <span className="text-gray-400">Standard for</span> Web3.
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium max-w-xl">
              We build core infrastructure at the frontier of AI and Post-Quantum Cryptography, natively integrated at the blockchain consensus layer.
            </motion.p>


            <motion.div variants={item} className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <Link 
                href="/services" 
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto hover:shadow-xl"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact" 
                className="group flex items-center justify-center space-x-2 px-6 py-4 bg-transparent text-gray-600 rounded-full font-bold hover:text-black hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <PlayCircle className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                <span>Contact Partnerships</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Abstract Shape (Static) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
             <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[90%] flex items-center justify-center">
                <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fafafa" />
                      <stop offset="100%" stopColor="#eeeeee" />
                    </linearGradient>
                    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(0,0,0,0.05)" />
                      <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                    </radialGradient>
                    <filter id="shadowC" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="15" stdDeviation="25" floodOpacity="0.05" />
                    </filter>
                  </defs>
                  
                  {/* Thick Revolving Ring System */}
                  <g fill="none">
                    <circle cx="300" cy="300" r="235" stroke="#e5e7eb" strokeWidth="6" strokeDasharray="50 15 10 15">
                      <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="25s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="300" r="248" stroke="#f3f4f6" strokeWidth="12" strokeDasharray="80 20 20 20">
                      <animateTransform attributeName="transform" type="rotate" from="360 300 300" to="0 300 300" dur="35s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="300" r="264" stroke="#e5e7eb" strokeWidth="10" strokeDasharray="120 30">
                      <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="45s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="300" r="278" stroke="#f9fafb" strokeWidth="8" strokeDasharray="40 10 10 10">
                      <animateTransform attributeName="transform" type="rotate" from="360 300 300" to="0 300 300" dur="20s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="300" r="290" stroke="#f3f4f6" strokeWidth="14" strokeDasharray="200 40">
                      <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="50s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="300" r="306" stroke="#e5e7eb" strokeWidth="6" strokeDasharray="15 15">
                      <animateTransform attributeName="transform" type="rotate" from="360 300 300" to="0 300 300" dur="60s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="300" r="320" stroke="#f3f4f6" strokeWidth="18" strokeDasharray="100 50">
                      <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="40s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="300" r="338" stroke="#f9fafb" strokeWidth="8" strokeDasharray="300 100">
                      <animateTransform attributeName="transform" type="rotate" from="360 300 300" to="0 300 300" dur="70s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="300" r="360" stroke="#f3f4f6" strokeWidth="20" strokeDasharray="400 200">
                      <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="90s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="300" r="380" stroke="#e5e7eb" strokeWidth="8" strokeDasharray="5 20">
                      <animateTransform attributeName="transform" type="rotate" from="360 300 300" to="0 300 300" dur="120s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  
                  {/* Network Traces */}
                  <g className="stroke-gray-200 fill-none" strokeWidth="1">
                    <path d="M 300 20 L 300 180" strokeDasharray="4 6" />
                    <path d="M 300 420 L 300 580" strokeDasharray="4 6" />
                    <path d="M 20 300 L 180 300" strokeDasharray="4 6" />
                    <path d="M 420 300 L 580 300" strokeDasharray="4 6" />
                    <path d="M 100 100 L 210 210" strokeDasharray="4 6" />
                    <path d="M 500 500 L 390 390" strokeDasharray="4 6" />
                    <path d="M 500 100 L 390 210" strokeDasharray="4 6" />
                    <path d="M 100 500 L 210 390" strokeDasharray="4 6" />
                  </g>
                  
                  {/* Main Processor Base */}
                  <rect x="180" y="180" width="240" height="240" rx="36" fill="url(#chipGrad)" stroke="#e5e7eb" strokeWidth="2" filter="url(#shadowC)" />
                  
                  {/* High Density Pins Around Chip Border */}
                  <g fill="#d1d5db">
                    {Array.from({length: 12}).map((_, i) => (
                      <rect key={`t-${i}`} x={212 + i * 16} y="168" width="4" height="12" rx="1.5" />
                    ))}
                    {Array.from({length: 12}).map((_, i) => (
                      <rect key={`b-${i}`} x={212 + i * 16} y="420" width="4" height="12" rx="1.5" />
                    ))}
                    {Array.from({length: 12}).map((_, i) => (
                      <rect key={`l-${i}`} x="168" y={212 + i * 16} width="12" height="4" rx="1.5" />
                    ))}
                    {Array.from({length: 12}).map((_, i) => (
                      <rect key={`r-${i}`} x="420" y={212 + i * 16} width="12" height="4" rx="1.5" />
                    ))}
                  </g>

                  {/* Inner Logic Gates Pattern */}
                  <rect x="200" y="200" width="200" height="200" rx="20" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
                  <rect x="215" y="215" width="170" height="170" rx="16" fill="#ffffff" stroke="#f3f4f6" strokeWidth="2" className="shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]" />
                  
                  {/* Decorative Circuit Lines on Chip */}
                  <path d="M 215 250 L 235 250 L 255 270" stroke="#e5e7eb" fill="none" strokeWidth="2" />
                  <path d="M 385 350 L 365 350 L 345 330" stroke="#e5e7eb" fill="none" strokeWidth="2" />
                  <path d="M 250 385 L 250 365 L 270 345" stroke="#e5e7eb" fill="none" strokeWidth="2" />
                  <path d="M 350 215 L 350 235 L 330 255" stroke="#e5e7eb" fill="none" strokeWidth="2" />
                  <circle cx="215" cy="250" r="2" fill="#d1d5db" />
                  <circle cx="385" cy="350" r="2" fill="#d1d5db" />
                  <circle cx="250" cy="385" r="2" fill="#d1d5db" />
                  <circle cx="350" cy="215" r="2" fill="#d1d5db" />

                  {/* Central Quantum Core Base */}
                  <circle cx="300" cy="300" r="60" fill="url(#coreGlow)" />
                  <rect x="255" y="255" width="90" height="90" rx="16" fill="#000000" className="shadow-xl" />
                  
                  {/* QBIT Internal Animation Rings */}
                  <circle cx="300" cy="300" r="24" fill="none" stroke="#222" strokeWidth="1" strokeDasharray="4 6">
                     <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="300" cy="300" r="18" fill="none" stroke="#333" strokeWidth="1.5" strokeDasharray="3 3">
                     <animateTransform attributeName="transform" type="rotate" from="360 300 300" to="0 300 300" dur="4s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* QBIT Core Node */}
                  <circle cx="300" cy="300" r="12" fill="#ffffff" />
                  <circle cx="300" cy="300" r="5" fill="#000000">
                     <animate attributeName="r" values="3.5; 5; 3.5" dur="2s" repeatCount="indefinite" />
                  </circle>

                  {/* QBIT Text Branding */}
                  <text x="300" y="380" textAnchor="middle" className="font-sans text-[11px] fill-black tracking-[0.25em]" style={{ fontWeight: 800 }}>QBIT</text>
                  <text x="300" y="394" textAnchor="middle" className="font-mono text-[7px] fill-gray-400 tracking-widest font-bold">NPU COMPUTE CACHE</text>
                </svg>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
