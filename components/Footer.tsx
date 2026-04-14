import Link from "next/link";
import Image from "next/image";
import { Mail, Globe, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image 
                src="/logo/quanta-transparent-bg-logo.svg" 
                alt="Quantalabs Logo" 
                width={28} 
                height={28} 
              />
              <span className="font-extrabold text-xl tracking-tight text-black">Quantalabs<span className="text-gray-300">.</span></span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6 font-medium">
              The enterprise development company behind the Quantachain ecosystem. We build robust, scalable, and intelligent blockchain solutions for institutions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="/" className="p-2.5 bg-white border border-gray-200 rounded-full text-black hover:bg-black hover:text-white hover:border-black transition-all">
                <Globe size={18} />
              </a>
              <a href="mailto:contact@quantalabs.com" className="p-2.5 bg-white border border-gray-200 rounded-full text-black hover:bg-black hover:text-white hover:border-black transition-all">
                <Mail size={18} />
              </a>
              <a href="https://quantachain.org" className="p-2.5 bg-white border border-gray-200 rounded-full text-black hover:bg-black hover:text-white hover:border-black transition-all" target="_blank" rel="noopener noreferrer">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-black mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#appchains" className="text-gray-500 hover:text-black text-sm font-medium transition-colors">Sovereign L2 AppChains</Link></li>
              <li><Link href="/services#pqc-migrations" className="text-gray-500 hover:text-black text-sm font-medium transition-colors">Mainnet PQC Migrations</Link></li>
              <li><Link href="/services#ai-agents" className="text-gray-500 hover:text-black text-sm font-medium transition-colors">Autonomous AI Agents</Link></li>
              <li><Link href="/services#enterprise-services" className="text-gray-500 hover:text-black text-sm font-medium transition-colors">Enterprise Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-black mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/ecosystem" className="text-gray-500 hover:text-black text-sm font-medium transition-colors">Quantachain Ecosystem</Link></li>
              <li><Link href="/research" className="text-gray-500 hover:text-black text-sm font-medium transition-colors">Academic Research</Link></li>
              <li><Link href="/careers" className="text-gray-500 hover:text-black text-sm font-medium transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-black text-sm font-medium transition-colors">Investor Relations</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-black text-sm font-medium transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
          <p>&copy; {new Date().getFullYear()} Quantalabs Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
