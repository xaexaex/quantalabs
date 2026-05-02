import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog";

const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  title: "Blog — Post-Quantum Cryptography & Blockchain Engineering",
  description:
    "Technical insights, research breakdowns, and engineering deep-dives from the QuantaLabs team. Covering post-quantum cryptography, Falcon-512, ECDSA vulnerabilities, and the future of blockchain security.",
  alternates: {
    canonical: "https://quantalabs.cc/blog",
  },
  openGraph: {
    title: "Blog — Post-Quantum Cryptography & Blockchain Engineering | Quantalabs",
    description:
      "Technical insights and research from QuantaLabs. ECDSA vulnerabilities, Falcon-512 benchmarks, and quantum threat timelines.",
    url: "https://quantalabs.cc/blog",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Quantalabs Blog — Post-Quantum Cryptography & Blockchain Engineering",
      },
    ],
  },
  twitter: {
    title: "Blog | Quantalabs",
    description:
      "Technical insights from QuantaLabs on PQC, Falcon-512, and the quantum threat to ECDSA.",
    images: [ogImage],
  },
};

const tagColors: Record<string, string> = {
  "Post-Quantum": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "ECDSA": "bg-red-50 text-red-700 border-red-100",
  "Falcon-512": "bg-blue-50 text-blue-700 border-blue-100",
  "Security": "bg-gray-100 text-gray-700 border-gray-200",
};

function tagClass(tag: string) {
  return tagColors[tag] ?? "bg-gray-100 text-gray-600 border-gray-200";
}

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="pt-24 min-h-screen pb-32 bg-white selection:bg-gray-200">

      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-12 gap-6">
          <div>
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-5 block">
              Technical Insights
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black leading-[1.0]">
              Blog &amp; <br />
              <span className="text-gray-300">Insights</span>
            </h1>
          </div>
          <p className="text-gray-400 font-medium text-base max-w-sm leading-relaxed md:text-right">
            Engineering analysis, research breakdowns, and threat intelligence from the QuantaLabs team.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ───────────────────────────────────────── */}
      {featured && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-black rounded-[2rem] p-10 md:p-16 relative overflow-hidden transition-all hover:shadow-2xl hover:shadow-black/20"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E599] opacity-[0.04] rounded-full blur-[140px] -mr-40 -mt-40 pointer-events-none group-hover:opacity-[0.08] transition-opacity" />

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#00E599] uppercase bg-[#00E599]/10 border border-[#00E599]/20 px-3 py-1 rounded-full">
                    Featured Post
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">{featured.date}</span>
                  <span className="text-[10px] font-mono text-gray-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" />{featured.readTime}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                  {featured.title}
                </h2>

                <p className="text-gray-400 font-medium leading-relaxed text-base max-w-2xl mb-6">
                  {featured.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-black px-2.5 py-1 rounded-full border bg-white/5 border-white/10 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-end gap-4">
                <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-[#00E599] group-hover:border-[#00E599] transition-colors">
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
                <span className="text-gray-600 font-bold text-sm">{featured.author}</span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ── ALL POSTS (remaining) ────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-gray-100 w-9 h-9 rounded-xl flex items-center justify-center">
              <Tag className="w-4 h-4 text-black" />
            </div>
            <span className="text-sm font-extrabold text-black uppercase tracking-widest">
              All Articles
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border border-gray-100 rounded-2xl p-7 bg-white hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-black tracking-[0.15em] text-gray-400 uppercase group-hover:text-black transition-colors">
                    {post.date}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors shrink-0 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="text-base font-bold text-black leading-snug mb-3 pr-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${tagClass(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />{post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA STRIP ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/contact"
          className="group block relative overflow-hidden rounded-[2.5rem] bg-black p-10 md:p-14 border border-gray-900 hover:border-gray-700 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="text-gray-500 font-bold tracking-widest uppercase text-xs mb-4 block">
                Enterprise Advisory
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Need a PQC Readiness Audit?
              </h2>
              <p className="text-gray-400 font-medium text-lg max-w-xl leading-relaxed">
                QuantaLabs offers cryptographic readiness assessments and Falcon-512 migration engineering for enterprise protocols.
              </p>
            </div>
            <div className="shrink-0 flex items-center px-8 py-4 border border-gray-700 text-white font-bold rounded-xl group-hover:bg-[#00E599] group-hover:text-black group-hover:border-[#00E599] transition-all duration-300">
              Contact Us
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </Link>
      </section>

    </div>
  );
}
