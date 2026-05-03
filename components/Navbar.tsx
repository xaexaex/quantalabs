"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Briefcase,
  BookOpen,
  Globe,
  MessageSquare,
  Blocks,
  BrainCircuit,
  ShieldCheck,
  Cpu,
  FlaskConical,
  Users,
  Newspaper,
  ArrowUpRight,
  Layers,
  Code2,
  ChevronDown,
} from "lucide-react";

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
  badge?: string;
};

type NavGroup = {
  name: string;
  href?: string;
  items: NavItem[];
  footer?: { label: string; href: string };
};

const navGroups: NavGroup[] = [
  {
    name: "Solutions",
    href: "/services",
    footer: { label: "View all services →", href: "/services" },
    items: [
      {
        name: "L2 AppChains",
        href: "/services/appchains",
        description: "Sovereign Layer 2 rollups with 124K TPS",
        icon: Layers,
        badge: "Live",
      },
      {
        name: "PQC Migrations",
        href: "/services/pqc-migrations",
        description: "NIST Falcon-512 & Kyber KEM migrations",
        icon: ShieldCheck,
      },
      {
        name: "AI Agents",
        href: "/services/ai-agents",
        description: "Deterministic on-chain LLM agent frameworks",
        icon: BrainCircuit,
      },
    ],
  },
  {
    name: "Ecosystem",
    footer: { label: "Explore the ecosystem →", href: "/ecosystem" },
    items: [
      {
        name: "Quantachain L1",
        href: "https://quantachain.org",
        external: true,
        description: "The post-quantum Layer 1 blockchain",
        icon: Blocks,
        badge: "Live",
      },
      {
        name: "Quanta Wallet",
        href: "https://chrome.google.com/webstore/detail/glofbcgdmodmaohealombcgoapdbdaff",
        external: true,
        description: "Falcon-512 secured Chrome extension wallet",
        icon: Cpu,
        badge: "Live",
      },
      {
        name: "Developer SDK",
        href: "https://www.npmjs.com/package/quanta-sdk",
        external: true,
        description: "Official JS/TS SDK — npm install quanta-sdk",
        icon: Code2,
        badge: "Live",
      },
      {
        name: "Block Explorer",
        href: "https://scan.quantachain.org",
        external: true,
        description: "Real-time chain analytics & transactions",
        icon: Globe,
        badge: "Live",
      },
      {
        name: "Mining Pool Server",
        href: "https://github.com/quantachain/quanta-pool",
        external: true,
        description: "High-performance Stratum-Q pool server",
        icon: Globe,
        badge: "Live",
      },
      {
        name: "Data Indexer",
        href: "https://github.com/quantachain/quanta-indexer",
        external: true,
        description: "High-throughput blockchain data indexer",
        icon: Code2,
        badge: "Live",
      },
      {
        name: "Mobile Wallet",
        href: "https://github.com/quantachain/quanta-mobile-wallet",
        external: true,
        description: "Android native wallet app — Rust JNI Falcon-512",
        icon: Cpu,
        badge: "Building",
      },
    ],
  },
  {
    name: "Research",
    footer: { label: "Read all publications →", href: "/research" },
    items: [
      {
        name: "Publications",
        href: "/research",
        description: "Peer-reviewed PQC & blockchain research",
        icon: FlaskConical,
      },
      {
        name: "Blog",
        href: "/blog",
        description: "Technical insights & threat intelligence",
        icon: Newspaper,
        badge: "New",
      },
      {
        name: "Whitepaper",
        href: "/docs/WHITEPAPER.docx",
        description: "Protocol architecture & technical specs",
        icon: BookOpen,
      },
      {
        name: "Open Source",
        href: "https://github.com/quantachain",
        external: true,
        description: "Core protocol repositories on GitHub",
        icon: GithubIcon,
      },
    ],
  },
  {
    name: "Company",
    footer: { label: "View open roles →", href: "/careers" },
    items: [
      {
        name: "Ecosystem",
        href: "/ecosystem",
        description: "Our post-quantum product suite",
        icon: Globe,
      },
      {
        name: "Careers",
        href: "/careers",
        description: "Join our protocol engineering team",
        icon: Users,
        badge: "Hiring",
      },
      {
        name: "Contact",
        href: "/contact",
        description: "Partnerships, enterprise & press enquiries",
        icon: MessageSquare,
      },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <Image
              src="/logo/quanta-transparent-bg-logo.svg"
              alt="Quantalabs Logo"
              width={48}
              height={48}
              className="w-9 h-9 transition-transform group-hover:scale-110"
              priority
            />
            <span className="text-xl font-bold tracking-tighter text-black">
              Quantalabs<span className="text-[#00E599]">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navGroups.map((group) => (
              <div
                key={group.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(group.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                    activeDropdown === group.name
                      ? "text-black bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {group.name}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === group.name ? "rotate-180 text-[#00E599]" : ""
                    }`}
                  />
                </button>

                {/* Dropdown panel */}
                {activeDropdown === group.name && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                    style={{ minWidth: "22rem" }}
                    onMouseEnter={() => handleMouseEnter(group.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-[0_24px_60px_-10px_rgba(0,0,0,0.12)] border border-black/5 overflow-hidden">
                      <div className="p-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover/item:bg-black group-hover/item:text-white transition-all">
                              {item.icon && <item.icon className="w-4 h-4" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-sm font-bold text-gray-900">{item.name}</span>
                                {item.badge && (
                                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                                    item.badge === "Hiring"
                                      ? "bg-blue-50 text-blue-600 border border-blue-100"
                                      : "bg-green-50 text-green-700 border border-green-100"
                                  }`}>
                                    {item.badge}
                                  </span>
                                )}
                                {item.external && (
                                  <ArrowUpRight className="w-3 h-3 text-gray-300 group-hover/item:text-gray-500 transition-colors" />
                                )}
                              </div>
                              <p className="text-xs text-gray-500 font-medium leading-snug">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Footer link */}
                      {group.footer && (
                        <div className="px-4 py-3 border-t border-gray-50 bg-gray-50/50">
                          <Link
                            href={group.footer.href}
                            className="text-xs font-bold text-gray-400 hover:text-[#00E599] transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {group.footer.label}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://github.com/quantachain"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center w-9 h-9 text-gray-500 hover:text-black transition-all hover:bg-gray-100 rounded-full"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-[#00E599] hover:text-black transition-all"
            >
              Contact Us
            </Link>
            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ───────────────────────────────────────── */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white border-t border-gray-100 overflow-y-auto z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-2">

            {navGroups.map((group) => (
              <div key={group.name} className="border border-gray-100 rounded-2xl overflow-hidden">
                {/* Group header */}
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === group.name ? null : group.name)
                  }
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-bold text-sm text-black uppercase tracking-wider">
                    {group.name}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      mobileExpanded === group.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded items */}
                {mobileExpanded === group.name && (
                  <div className="border-t border-gray-50 bg-gray-50/50 px-3 py-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0">
                          {item.icon && <item.icon className="w-4 h-4 text-gray-600" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gray-900">{item.name}</span>
                            {item.badge && (
                              <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                                item.badge === "Hiring"
                                  ? "bg-blue-50 text-blue-600"
                                  : "bg-green-50 text-green-700"
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 font-medium">{item.description}</p>
                        </div>
                        {item.external && <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 ml-auto shrink-0" />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 block px-6 py-4 text-sm font-bold text-white bg-black rounded-2xl text-center hover:bg-[#00E599] hover:text-black transition-all uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
