"use client";

import { Download, Shield, Key, Fingerprint, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WalletShowcase() {
  const features = [
    { icon: Shield, title: "Falcon-512 signatures", desc: "Lattice-based, quantum-resistant transaction signing baked into a Rust/WASM core." },
    { icon: Key, title: "Raw key export/import", desc: "Exports a combined sk|pk blob for direct backup. Falcon's public key can't always be re-derived from the secret key." },
    { icon: Fingerprint, title: "Deterministic Recovery", desc: "24-word mnemonic recovery deterministically derives your Falcon-512 keypair." },
    { icon: Lock, title: "Multi-account Support", desc: "Up to 10 accounts independently encrypted with AES-256-GCM + PBKDF2 (250k iterations)." },
  ];

  return (
    <section className="py-24 md:py-32 bg-white text-black relative border-t border-gray-100 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#00E599]/5 opacity-50 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="flex flex-col animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#00E599]" />
              <span className="font-bold tracking-widest text-xs uppercase text-gray-400">First-Party Products</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 leading-tight text-black">
              Quanta Wallet
            </h2>

            <p className="text-xl md:text-2xl font-bold text-gray-700 mb-6 leading-relaxed">
              &quot;Harvest now, decrypt later&quot; is already happening.
            </p>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-medium">
              Nation-state actors are archiving encrypted data today to break it once quantum computers arrive. Your wallet addresses and transaction signatures are public. When that day comes, ECC-based wallets are toast. We built something different from the ground up.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="https://chromewebstore.google.com/detail/quanta-wallet/glofbcgdmodmaohealombcgoapdbdaff?pli=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-[#00E599] hover:text-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
              >
                <Download className="w-5 h-5" />
                <span>Download on Chrome</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {features.map((opt, i) => {
                 const Icon = opt.icon;
                 return (
                   <div key={i} className="flex flex-col space-y-3">
                     <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center group hover:bg-[#00E599] hover:border-[#00E599] transition-all">
                       <Icon className="w-5 h-5 text-black" />
                     </div>
                     <h4 className="font-bold text-black text-sm">{opt.title}</h4>
                     <p className="text-xs text-gray-500 font-medium leading-relaxed">{opt.desc}</p>
                   </div>
                 )
               })}
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="relative lg:h-[700px] w-full flex items-center justify-center animate-fade-in">
             <div className="relative w-full max-w-md bg-white rounded-[2.5rem] border border-gray-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-6 aspect-[9/16] overflow-hidden">
                {/* Simulated Chrome Extension UI */}
                <div className="absolute top-0 left-0 w-full bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between z-20">
                   <div className="flex items-center space-x-2">
                     <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
                       <Image src="/logo/quanta-white-bg-logo.svg" alt="Quanta Account" width={24} height={24} className="rounded-md" />
                     </div>
                     <span className="font-bold text-black text-sm">Quanta Account 1</span>
                   </div>
                   <div className="w-2 h-2 rounded-full bg-[#00E599] shadow-[0_0_8px_#00E599]"></div>
                </div>

                <div className="pt-20 pb-8 flex flex-col items-center justify-start h-full relative z-10 space-y-6">
                   <div className="text-center w-full">
                     <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-2 block">Total Balance</span>
                     <h3 className="text-[2.75rem] font-extrabold text-black tracking-tighter">
                       1,240.50 <span className="text-gray-400 text-2xl font-bold">QUA</span>
                     </h3>
                   </div>

                   <div className="flex items-center space-x-3 w-full px-2">
                     <div className="flex-1 bg-black text-white py-3.5 rounded-xl font-bold text-sm text-center shadow-md hover:bg-[#00E599] hover:text-black transition-colors cursor-pointer">Send</div>
                     <div className="flex-1 bg-white text-black py-3.5 rounded-xl font-bold text-sm text-center border border-gray-200 shadow-sm hover:border-[#00E599] hover:text-[#00E599] transition-colors cursor-pointer">Receive</div>
                   </div>

                   <div className="w-full bg-gray-50 rounded-xl border border-gray-200 p-4">
                     <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1.5 block">Signature Scheme</span>
                     <span className="text-[#00E599] text-xs font-mono font-bold flex items-center">
                        <Shield className="w-3.5 h-3.5 mr-1.5" />
                        FALCON-512 SECURE
                     </span>
                   </div>

                   <div className="w-full flex-1">
                     <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">Recent Transactions</h4>
                     <div className="space-y-4 pt-2">
                       {[1,2,3].map((_, i) => (
                         <div key={i} className="flex items-center justify-between">
                           <div className="flex items-center space-x-3">
                             <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                               <ArrowRight className="w-4 h-4 text-black -rotate-45" />
                             </div>
                             <div className="flex flex-col">
                               <span className="text-black text-sm font-bold">Sent QUA</span>
                               <span className="text-gray-400 text-xs font-mono">0x14f...39a</span>
                             </div>
                           </div>
                           <span className="text-black text-sm font-bold">-12.00</span>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ArrowRight locally imported to fix UI component
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
