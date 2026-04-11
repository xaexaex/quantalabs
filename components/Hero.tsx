import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col justify-center max-w-2xl mt-4 md:mt-0">
            <h1 className="text-5xl sm:text-6xl lg:text-[6rem] font-extrabold tracking-tighter text-black mb-6 md:mb-8 leading-tight md:leading-[1.05]">
              Enterprise <br />
              <span className="text-gray-400">Blockchain</span> <br />
              Innovation.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium max-w-lg">
              We engineer scalable L1/L2 networks, AI consensus layers, and Post-Quantum cryptography for global institutions.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="#services" 
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto hover:shadow-xl"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              
              <Link 
                href="#contact" 
                className="group flex items-center justify-center space-x-2 px-6 py-4 bg-transparent text-gray-600 rounded-full font-bold hover:text-black hover:bg-gray-50 transition-all w-full sm:w-auto"
              >
                <PlayCircle className="w-6 h-6 text-gray-400 group-hover:text-black transition-colors" />
                <span>Contact Partnerships</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Abstract Shape (Static) */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
             <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[90%] flex items-center justify-center">
                <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
                  {/* Subtle ambient background (breathing) */}
                  <circle cx="250" cy="250" r="180" fill="#fafafa">
                    <animate attributeName="r" values="175; 185; 175" dur="8s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Qubit Orbit Rings (Quantum Bubble) */}
                  <g className="stroke-gray-200 stroke-1" fill="none">
                    {/* Slow rotating outer ring */}
                    <circle cx="250" cy="250" r="200" strokeDasharray="4 12">
                      <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="15s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="250" r="160" />
                    
                    {/* Orbit data flow */}
                    <ellipse cx="250" cy="250" rx="160" ry="40" transform="rotate(45 250 250)" className="stroke-gray-300" strokeDasharray="80 160">
                      <animate attributeName="stroke-dashoffset" values="240; 0" dur="4s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="250" cy="250" rx="160" ry="40" transform="rotate(-45 250 250)" className="stroke-gray-300" strokeDasharray="80 160">
                      <animate attributeName="stroke-dashoffset" values="240; 0" dur="4s" repeatCount="indefinite" />
                    </ellipse>
                  </g>

                  {/* Connecting Traces with subtle moving dashed data */}
                  <g className="stroke-gray-200" strokeWidth="2" fill="none" strokeDasharray="4 6">
                    <line x1="250" y1="50" x2="250" y2="170">
                       <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="250" y1="330" x2="250" y2="450">
                       <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="50" y1="250" x2="170" y2="250">
                       <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="330" y1="250" x2="450" y2="250">
                       <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                    </line>
                  </g>

                  {/* Nodes (pulsing slightly) */}
                  <g className="fill-white stroke-gray-300" strokeWidth="2">
                    <circle cx="250" cy="50" r="4"><animate attributeName="r" values="3; 5; 3" dur="3s" repeatCount="indefinite" /></circle>
                    <circle cx="250" cy="450" r="4"><animate attributeName="r" values="3; 5; 3" dur="3s" repeatCount="indefinite" /></circle>
                    <circle cx="50" cy="250" r="4"><animate attributeName="r" values="3; 5; 3" dur="3s" repeatCount="indefinite" /></circle>
                    <circle cx="450" cy="250" r="4"><animate attributeName="r" values="3; 5; 3" dur="3s" repeatCount="indefinite" /></circle>
                  </g>

                  {/* Core Base Plate */}
                  <rect x="170" y="170" width="160" height="160" rx="24" className="fill-white stroke-gray-100" strokeWidth="1" style={{ filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.03))' }} />
                  
                  {/* Inner Chip Substrate */}
                  <rect x="190" y="190" width="120" height="120" rx="16" className="fill-gray-50 stroke-gray-200" strokeWidth="1" />
                  
                  {/* Quantum Core */}
                  <rect x="215" y="215" width="70" height="70" rx="12" className="fill-black" />
                  
                  {/* Qubit Identity Matrix */}
                  <circle cx="250" cy="250" r="12" className="fill-white" />
                  <circle cx="250" cy="250" r="4" className="fill-black">
                     <animate attributeName="r" values="3.5; 4.5; 3.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Clockwise spinning inner targeting ring */}
                  <circle cx="250" cy="250" r="18" fill="none" className="stroke-gray-700" strokeWidth="1" strokeDasharray="2 4">
                     <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  <text 
                     x="250" 
                     y="298" 
                     textAnchor="middle" 
                     className="font-mono text-[9px] font-bold fill-gray-400 tracking-widest uppercase"
                   >
                     QBIT
                   </text>
                </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
