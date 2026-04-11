import Link from "next/link";
import { Users, Code, Globe2, ArrowRight } from "lucide-react";

export default function CareersSection() {
  return (
    <section id="careers" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 tracking-tight">
              Build the Future of Enterprise Web3
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              We are a team of cryptographers, distributed systems engineers, and AI researchers. Join us to solve the hardest problems in scaling and securing decentralized networks.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl border border-gray-100">
                  <Globe2 className="w-6 h-6 text-black" />
                </div>
                <div>
                  <span className="block font-bold text-black text-sm">Global Remote Culture</span>
                  <span className="block text-gray-500 text-sm">Work from anywhere with our distributed team.</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl border border-gray-100">
                  <Code className="w-6 h-6 text-black" />
                </div>
                <div>
                  <span className="block font-bold text-black text-sm">Frontier Tech Stack</span>
                  <span className="block text-gray-500 text-sm">Next-Gen L1/L2, PQC, and AI integrations.</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-xl border border-gray-100">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <span className="block font-bold text-black text-sm">Elite Engineering Teams</span>
                  <span className="block text-gray-500 text-sm">Collaborate with top talent in the industry.</span>
                </div>
              </div>
            </div>

            <Link href="#open-roles" className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg">
              <span>View Open Roles</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="w-full bg-gray-50 border border-gray-100 rounded-3xl flex items-center justify-center min-h-[400px] shadow-sm overflow-hidden">
            <div className="text-center p-8">
               <Users className="w-8 h-8 text-gray-400 mx-auto mb-4" />
               <p className="font-mono text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">Workspace & Culture</p>
               <p className="text-sm text-gray-500 max-w-xs mx-auto">
                 [ Image Placeholder: Insert high quality photography of the engineering team or modern office environment here ]
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
