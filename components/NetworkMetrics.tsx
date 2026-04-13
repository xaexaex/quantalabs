"use client";

import { motion } from "framer-motion";

export default function NetworkMetrics() {
  const metrics = [
    { value: "120K+", label: "Peak TPS" },
    { value: "<400ms", label: "Global Finality" },
    { value: "$4.1B", label: "Secured Volume" },
    { value: "100%", label: "Quantum Secure" }
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black py-16 md:py-20 rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden shadow-2xl">
          
          {/* Background glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-white opacity-[0.03] blur-[120px] rounded-[100%] pointer-events-none"></div>

          <div className="relative z-10 w-full px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center text-center group cursor-default"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-300">
                    {metric.value}
                  </div>
                  <div className="text-gray-400 font-bold tracking-widest text-[10px] sm:text-xs uppercase">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
