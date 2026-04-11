import { Blocks, BrainCircuit, ShieldCheck, Cpu, Code2 } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      icon: Blocks,
      title: "Custom Blockchains",
      description: "Tailor-made Layer 1 and Layer 2 decentralized networks built to scale with your institution's specific demands.",
    },
    {
      icon: Code2,
      title: "Core Development",
      description: "Smart contract development, dApps, wallets, and ecosystem tools engineered for peak performance and security.",
    },
    {
      icon: BrainCircuit,
      title: "Blockchain with AI",
      description: "Integrating intelligent agents and decentralized ML models on-chain for the next generation of smart applications.",
    },
    {
      icon: ShieldCheck,
      title: "PQC Migrations",
      description: "Future-proofing your network with our specialized Post-Quantum Cryptography transition algorithms.",
    },
    {
      icon: Cpu,
      title: "Enterprise Solutions",
      description: "Private consortium networks and permissioned solutions designed for regulatory compliance and high throughput.",
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean, Massive Header Centered */}
        <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-32">
           <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-8 block">
              Capabilities
           </span>
           <h2 className="text-5xl md:text-7xl font-extrabold text-black tracking-tighter leading-[1.05]">
              Engineering the<br/>Decentralized Future.
           </h2>
        </div>

        {/* Minimalist Swiss-Style Typographical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 mb-24">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group cursor-default">
              {/* Massive Abstract Number */}
              <div className="text-[6rem] leading-none font-thin text-gray-100 mb-6 font-mono tracking-tighter group-hover:text-black transition-colors duration-500">
                0{index + 1}
              </div>
              
              <h3 className="text-2xl font-extrabold text-black mb-4 tracking-tight flex items-center space-x-3">
                 <service.icon className="w-6 h-6 text-black" />
                 <span>{service.title}</span>
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}

          {/* Inline CTA block matching the grid layout */}
          <div className="flex flex-col justify-center p-8 bg-gray-50 rounded-3xl h-full border border-gray-100 hover:border-black transition-colors">
            <h3 className="text-2xl font-extrabold text-black mb-4">Have a custom requirement?</h3>
            <p className="text-lg text-gray-500 mb-8 font-medium">Our engineering team is ready to architect your vision.</p>
            <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg self-start">
              Talk to our Engineers
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
