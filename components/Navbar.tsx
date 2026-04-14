"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100 py-3" : "bg-white/50 backdrop-blur-sm py-5 border-b border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3 group">
              <Image 
                src="/logo/quanta-transparent-bg-logo.svg" 
                alt="Quantalabs Logo" 
                width={32} 
                height={32} 
              />
              <span className="font-extrabold text-2xl tracking-tighter text-black">
                Quantalabs<span className="text-gray-300">.</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-gray-500 hover:text-black transition-colors text-sm font-bold">Home</Link>
            <Link href="/services" className="text-gray-500 hover:text-black transition-colors text-sm font-bold">Services</Link>
            <Link href="/ecosystem" className="text-gray-500 hover:text-black transition-colors text-sm font-bold">Ecosystem</Link>
            <Link href="/research" className="text-gray-500 hover:text-black transition-colors text-sm font-bold">Research</Link>
            <Link href="/contact" className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-500 transition-colors p-2"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 overflow-y-auto w-full h-screen">
          <div className="space-y-2 flex flex-col">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-xl font-bold text-black border-b border-gray-50 hover:bg-gray-50 transition-colors">Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-xl font-bold text-black border-b border-gray-50 hover:bg-gray-50 transition-colors">Services</Link>
            <Link href="/ecosystem" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-xl font-bold text-black border-b border-gray-50 hover:bg-gray-50 transition-colors">Ecosystem</Link>
            <Link href="/research" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-xl font-bold text-black border-b border-gray-50 hover:bg-gray-50 transition-colors">Research</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-5 text-lg font-black text-white bg-black rounded-xl text-center mt-6 uppercase tracking-wider shadow-lg shadow-black/10">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
