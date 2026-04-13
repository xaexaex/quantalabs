"use client";

import { Building2, Landmark, Wallet, ShieldCheck, Factory, Network } from "lucide-react";

export default function LogoTicker() {
  const logos = [
    { icon: Building2, name: "Global Finance" },
    { icon: Landmark, name: "Central Banks" },
    { icon: Wallet, name: "Treasuries" },
    { icon: ShieldCheck, name: "Defense" },
    { icon: Factory, name: "Supply Chain" },
    { icon: Network, name: "Telecom" },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 opacity-40 grayscale">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div key={index} className="flex items-center space-x-2 text-gray-600 hover:text-black hover:grayscale-0 transition-all cursor-default scale-90 sm:scale-100">
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-bold text-xs md:text-sm tracking-tight">{logo.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
