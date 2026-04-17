"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Briefcase, BookOpen, Globe, MessageSquare, Blocks, BrainCircuit, ShieldCheck, Cpu, FlaskConical, Users, Newspaper, ArrowUpRight, Layers, Code2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

type NavItem = {
  name: string;
  href: string;
  external?: boolean;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type NavGroup = {
  name: string;
  items: NavItem[];
};

const navItems: NavGroup[] = [
  {
    name: "Solutions",
    items: [
      { name: "L2 Protocol Engineering", href: "/services#appchains", description: "Sovereign Layer 2 rollups & appchains", icon: Layers },
      { name: "Post-Quantum Security", href: "/services#pqc-migrations", description: "NIST-standardized PQC infrastructure migrations", icon: ShieldCheck },
      { name: "AI-Driven Node Networks", href: "/services#ai-agents", description: "Autonomous on-chain intelligence architectures", icon: BrainCircuit },
      { name: "Enterprise Advisory", href: "/services#advisory", description: "Strategic blockchain & cryptography consulting", icon: Briefcase },
    ],
  },
  {
    name: "Ecosystem",
    items: [
      { name: "Quantachain L1", href: "https://quantachain.org", external: true, description: "The post-quantum Layer 1 blockchain", icon: Blocks },
      { name: "Quanta Wallet", href: "https://chrome.google.com/webstore/detail/glofbcgdmodmaohealombcgoapdbdaff", external: true, description: "Falcon-512 secured Chrome extension wallet", icon: Cpu },
      { name: "Developer SDK", href: "https://www.npmjs.com/package/quanta-sdk", external: true, description: "Official JS/TS client library", icon: Code2 },
      { name: "Block Explorer", href: "https://scan.quantachain.org", external: true, description: "Real-time chain analytics & transactions", icon: Globe },
    ],
  },
  {
    name: "Research",
    items: [
      { name: "Publications", href: "/research", description: "Peer-reviewed cryptography research", icon: FlaskConical },
      { name: "Whitepaper", href: "/docs/WHITEPAPER.docx", description: "Protocol architecture & technical specs", icon: BookOpen },
      { name: "Open Source", href: "https://github.com/quantachain", external: true, description: "Core protocol repositories on GitHub", icon: GithubIcon },
    ],
  },
  {
    name: "Company",
    items: [
      { name: "About Us", href: "/about", description: "Our mission in sovereign digital infrastructure", icon: Globe },
      { name: "Team", href: "/team", description: "The engineers & cryptographers behind Quanta", icon: Users },
      { name: "Careers", href: "/careers", description: "Join a world-class protocol engineering team", icon: ArrowUpRight },
      { name: "Press & Media", href: "/press", description: "Brand assets, news & announcements", icon: Newspaper },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container mx-auto px-6 h-20">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/logo/quanta-transparent-bg-logo.svg"
              alt="Quantalabs Logo"
              width={48}
              height={48}
              className="w-10 h-10 transition-transform group-hover:scale-110"
              priority
            />
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-black">
              Quantalabs<span className="text-[#00E599]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                  activeDropdown === item.name ? "text-[#00E599]" : "text-gray-600 hover:text-black"
                }`}>
                  {item.name}
                </button>

                {/* Dropdown */}
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[22rem] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-2 border border-black/5 overflow-hidden ring-1 ring-black/5">
                      <div className="grid gap-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.external ? "_blank" : undefined}
                            className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-[#00E599] group-hover:text-black transition-all duration-300">
                              {subItem.icon && <subItem.icon className="w-5 h-5" />}
                            </div>
                            <div>
                              <span className="text-sm font-bold text-gray-900 group-hover:text-black transition-colors block mb-0.5">{subItem.name}</span>
                              <p className="text-xs text-gray-500 leading-relaxed font-medium group-hover:text-gray-600">
                                {subItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="https://github.com/quantachain"
              target="_blank"
              className="hidden md:inline-flex items-center justify-center w-10 h-10 text-gray-600 hover:text-[#00E599] transition-all hover:bg-gray-50 rounded-full hover:scale-110"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-[#00E599] hover:text-black transition-all hover:scale-105 active:scale-95"
            >
              Contact Us
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white fixed inset-x-0 top-20 bottom-0 overflow-y-auto z-40">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.name}>
                <h4 className="font-bold text-sm uppercase tracking-wider text-gray-900 mb-3">{item.name}</h4>
                <div className="space-y-1 pl-4">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      target={subItem.external ? "_blank" : undefined}
                      className="flex items-center justify-between py-2 text-gray-600 hover:text-[#00E599] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-sm font-medium">{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-base font-black text-white bg-black rounded-full text-center mt-2 hover:bg-[#00E599] hover:text-black transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
