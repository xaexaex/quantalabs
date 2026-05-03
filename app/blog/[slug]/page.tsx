import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, Calendar, User } from "lucide-react";
import { getBlogPost } from "@/lib/blog";

const ogImage = "/seo/image.png";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://quantalabs.cc/blog/${slug}` },
    openGraph: {
      title: `${post.title} | Quantalabs`,
      description: post.excerpt,
      url: `https://quantalabs.cc/blog/${slug}`,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { title: post.title, description: post.excerpt, images: [ogImage] },
  };
}

export function generateStaticParams() {
  return [{ slug: "ecdsa-liability-2026" }];
}

// ── ECDSA BLOG POST CONTENT ──────────────────────────────────────────────────

function ECDSAPost() {
  return (
    <article className="prose-custom">

      <p className="lead">
        Five days ago, an independent researcher named Giancarlo Lelli broke a 15-bit elliptic curve key on a publicly accessible IBM quantum computer and collected a 1 BTC bounty from Project Eleven. The result was debated — some Bitcoin developers showed the winning result could be replicated with random noise, suggesting limited true quantum advantage at this scale. But the debate misses the point entirely.
      </p>
      <p>The real story is what happened three weeks before that, in the research papers.</p>

      <hr />

      <h2>The Three Papers That Changed the Timeline</h2>
      <p>In the last week of March 2026, two papers dropped on the same day that fundamentally rewrote the resource estimates for breaking ECDSA:</p>

      <h3>Google Quantum AI (March 31, 2026)</h3>
      <p>
        Google&apos;s research team published a 57-page whitepaper outlining a significantly more efficient implementation of Shor&apos;s algorithm against secp256k1 — the elliptic curve that secures Bitcoin, Ethereum, and virtually every EVM-compatible blockchain. Their circuits require <strong>fewer than 500,000 physical qubits</strong> on a superconducting architecture to break ECDSA-P256. Critically, the estimated execution time is <strong>under 9 minutes</strong>.
      </p>
      <p>
        Bitcoin&apos;s average block time is 10 minutes. The implication: a sufficiently powerful quantum computer could theoretically crack an exposed public key faster than a transaction confirms on-chain.
      </p>
      <p>
        The previous estimate from Litinski (2023) required ~9 million qubits. Google&apos;s paper represents an approximately <strong>20-fold reduction</strong> in the qubit threshold. The paper closed with a line that should be framed on the wall of every blockchain security team:
      </p>
      <blockquote>
        &ldquo;It is conceivable that the existence of early CRQCs may first be detected on the blockchain rather than announced.&rdquo;
      </blockquote>

      <h3>Oratomic / Caltech / UC Berkeley (March 31, 2026)</h3>
      <p>
        On the exact same day, a team spanning Oratomic, Caltech, and UC Berkeley published a paper showing Shor&apos;s algorithm can be executed at cryptographically relevant scales with <strong>as few as 10,000 reconfigurable neutral-atom qubits</strong>.
      </p>
      <p>
        That is 50× lower than Google&apos;s already-shocking estimate. The key insight: high-rate quantum Low-Density Parity-Check (qLDPC) codes achieve approximately 30% encoding rate, compared to ~4% for surface codes in Google&apos;s architecture. Under plausible assumptions, a 26,000-qubit neutral-atom system could crack P-256 in a matter of <strong>a few days</strong>.
      </p>

      <h3>Chevignard-Fouque-Schrottenloher (EUROCRYPT 2026)</h3>
      <p>French researchers published a new quantum circuit architecture for the 256-bit Elliptic Curve Discrete Logarithm Problem at EUROCRYPT 2026, further optimizing the circuit depth needed to attack full production keys.</p>

      <hr />

      <h2>Three Papers. Three Weeks. The Timeline Just Moved.</h2>
      <p>
        This is not distant future speculation. The shift from &ldquo;we need 20 million qubits&rdquo; to &ldquo;we might need 10,000&rdquo; happened in three months. The trajectory matters more than today&apos;s hardware state.
      </p>
      <p>
        Cloudflare put it bluntly in their post-quantum roadmap published this month: &ldquo;Q-Day has been pulled forward significantly from typical 2035+ timelines, with neutral atoms in the lead, and other approaches not far behind.&rdquo;
      </p>
      <p>
        Google followed with a formal 2029 deadline to transition their entire infrastructure to post-quantum cryptography. Android 17 is shipping with ML-DSA (post-quantum digital signatures) by default. As of their latest reporting, <strong>65% of human traffic to Cloudflare is now post-quantum encrypted</strong>.
      </p>
      <p><em>The web is already migrating. Blockchain hasn&apos;t started.</em></p>

      <hr />

      <h2>Why Blockchain Is More Exposed Than TLS</h2>
      <p>There&apos;s a subtle but critical difference between what Cloudflare is protecting and what your blockchain is exposing.</p>
      <p>TLS key exchange is ephemeral. The keys are fresh for every session. Even if a quantum adversary harvests ciphertext today, breaking the key later only reveals that session&apos;s traffic — not the ability to forge future transactions.</p>
      <p><strong>Blockchain public keys are permanent and on-chain.</strong></p>
      <p>
        When you receive funds to an Ethereum address and spend from it, your public key is visible in the transaction history. Anyone who archives that public key today can attempt to derive the private key later. Every wallet that has ever signed a transaction exposes its public key to &ldquo;harvest now, decrypt later&rdquo; attacks.
      </p>
      <p>
        ~6.9 million Bitcoin currently sit in wallets where the public key is already fully exposed on-chain. All of those funds can be targeted the moment a sufficiently powerful quantum computer exists.
      </p>

      <hr />

      <h2>What a Production Falcon-512 Blockchain Actually Looks Like</h2>
      <p>We didn&apos;t write this post from theory. QuantaLabs builds <a href="https://quantachain.org" target="_blank" rel="noopener noreferrer">Quantachain</a> — the first publicly live Layer 1 blockchain using NIST-standardized Falcon-512 lattice signatures from genesis. Here is what our engineering team measured in the April 2026 benchmark run (Node v0.7.1, Ubuntu 22.04, 4-core environment):</p>

      <h3>Cryptographic Core — Falcon-512</h3>
      <div className="overflow-x-auto my-6">
        <table>
          <thead><tr><th>Operation</th><th>Quantachain</th><th>ECDSA-P256</th><th>Overhead</th></tr></thead>
          <tbody>
            <tr><td>Sign</td><td><strong>0.227 ms</strong></td><td>~0.05 ms</td><td>~4.5×</td></tr>
            <tr><td>Verify (serial)</td><td><strong>0.006 µs</strong></td><td>~0.12 ms</td><td>&lt; 1× (faster)</td></tr>
            <tr><td>Verify (parallel, 4 cores)</td><td><strong>0.001 µs</strong></td><td>—</td><td>—</td></tr>
            <tr><td>Key generation</td><td>6.8 ms</td><td>~0.05 ms</td><td>Higher</td></tr>
            <tr><td>Signature size</td><td><strong>689 bytes avg</strong></td><td>64 bytes</td><td>~10.8×</td></tr>
            <tr><td>Public key size</td><td>897 bytes</td><td>64 bytes</td><td>~14×</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The signing overhead is real — Falcon-512 costs approximately 4.5× more to sign than ECDSA-P256. But look at verification: Falcon-512 serial verification in our implementation runs at <strong>168,000+ verifications per second</strong>. With Rayon-based parallel batch verification across 4 physical cores, a block of 200 transactions verifies in <strong>0.169 ms total</strong> — a 7× speedup over serial.
      </p>

      <h3>Mempool and Throughput</h3>
      <div className="overflow-x-auto my-6">
        <table>
          <thead><tr><th>Metric</th><th>Result</th></tr></thead>
          <tbody>
            <tr><td>Mempool insert throughput</td><td><strong>230,041 tx/sec</strong></td></tr>
            <tr><td>Duplicate rejection latency (Bloom filter)</td><td><strong>3.3 µs</strong> (O(1))</td></tr>
            <tr><td>Fee-ordered top-1200 selection</td><td><strong>590 µs</strong></td></tr>
            <tr><td>Eviction under flood</td><td><strong>251,312 ops/sec</strong></td></tr>
          </tbody>
        </table>
      </div>

      <h3>Block Compression</h3>
      <p>Falcon-512 signatures are ~10× larger than ECDSA. We integrated zstd Level-3 block compression:</p>
      <div className="overflow-x-auto my-6">
        <table>
          <thead><tr><th>Block size</th><th>Raw</th><th>Compressed</th><th>Ratio</th><th>Time</th></tr></thead>
          <tbody>
            <tr><td>100 txs</td><td>171 KB</td><td>86 KB</td><td><strong>1.97×</strong></td><td>0.37 ms</td></tr>
            <tr><td>500 txs</td><td>856 KB</td><td>359 KB</td><td><strong>2.38×</strong></td><td>1.57 ms</td></tr>
            <tr><td>1,200 txs (full block)</td><td><strong>2,054 KB</strong></td><td><strong>838 KB</strong></td><td><strong>2.45×</strong></td><td>5.48 ms</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Live Node — End-to-End HTTP Pipeline</h3>
      <ul>
        <li><strong>Median round-trip latency (p50): 0.70 ms</strong> — full pipeline (HTTP + JSON deserialize + Falcon-512 verify + nonce + balance + mempool)</li>
        <li><strong>Concurrent flood throughput: 792 tx/sec</strong> (end-to-end, real network path)</li>
        <li><strong>Sequential acceptance rate: 100%</strong> — zero false rejections, zero signature errors</li>
      </ul>

      <hr />

      <h2>Falcon-512 vs. Every Alternative</h2>
      <div className="overflow-x-auto my-6">
        <table>
          <thead><tr><th>Scheme</th><th>Quantum-Safe</th><th>Sig Size</th><th>PK Size</th><th>Verify Speed</th></tr></thead>
          <tbody>
            <tr><td><strong>Falcon-512</strong></td><td>Yes</td><td><strong>~689 B</strong></td><td>897 B</td><td>~168K ops/s</td></tr>
            <tr><td>CRYSTALS-Dilithium3</td><td>Yes</td><td>3,309 B</td><td>1,952 B</td><td>High</td></tr>
            <tr><td>ECDSA-P256</td><td>No</td><td>64 B</td><td>64 B</td><td>~8K ops/s</td></tr>
            <tr><td>Ed25519</td><td>No</td><td>64 B</td><td>32 B</td><td>Very high</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>Falcon-512 produces the smallest signature of any NIST-standardized PQC scheme.</strong> At ~689 bytes average, it is 4.8× smaller than Dilithium3.</p>

      <hr />

      <h2>What &ldquo;Harvest Now, Decrypt Later&rdquo; Means for Your Infrastructure Today</h2>
      <p>
        Nation-state-level adversaries have been operating HNDL campaigns since at least the Snowden-era disclosures. Every ECDSA-signed transaction in your history is already being harvested. You cannot retroactively re-sign historical transactions. You can only control what you build from now forward.
      </p>
      <p>
        The NSA&apos;s CNSA 2.0 framework mandates that <strong>all new national security systems must be quantum-safe by January 2027.</strong> NIST&apos;s deprecation timeline calls for RSA and ECDSA to be disallowed after 2035.
      </p>

      <hr />

      <h2>What We Built, and Why It&apos;s Different</h2>
      <p>Quantachain is not a proof of concept. It is a live mainnet-adjacent network with:</p>
      <ul>
        <li>Falcon-512 signatures from genesis — every transaction on every block, since block #1</li>
        <li>A <a href="https://chromewebstore.google.com/detail/quanta-wallet/glofbcgdmodmaohealombcgoapdbdaff" target="_blank" rel="noopener noreferrer">Chrome extension wallet</a> with Falcon-512 key generation, mnemonic recovery, and AES-256-GCM encrypted local storage</li>
        <li>External node operators running independent validating nodes</li>
        <li>A live block explorer at <a href="https://scan.quantachain.org" target="_blank" rel="noopener noreferrer">scan.quantachain.org</a></li>
        <li>A <a href="https://doi.org/10.5281/zenodo.18753528" target="_blank" rel="noopener noreferrer">Zenodo-published research paper</a> documenting the architecture</li>
      </ul>

      <hr />

      <h2>What You Should Do If You&apos;re Building on ECC Today</h2>
      <p><strong>Immediate:</strong></p>
      <ul>
        <li>Audit your signing scheme. Know every place ECDSA or Ed25519 is used — transaction signing, TLS certificates, internal service auth, HSM configuration.</li>
        <li>Migrate TLS key exchange to ML-KEM (this is already handled by Cloudflare for your edge, but your origin servers need manual configuration).</li>
      </ul>
      <p><strong>Medium term (before 2027):</strong></p>
      <ul>
        <li>If you are building a new chain or significant protocol upgrade, do not build on ECDSA. The engineering cost of migrating later — coordinating a hard fork, building parallel signing schemes, migrating wallet key material — will be an order of magnitude larger than building on Falcon-512 from genesis.</li>
        <li>Implement crypto agility in your signing layer. Even if you stay on ECDSA today, your codebase should be structured so the signing scheme is swappable without a full protocol rewrite.</li>
      </ul>
      <p>
        <strong>If you want help:</strong> QuantaLabs offers cryptographic readiness audits and Falcon-512 / Kyber-1024 migration engineering. We have done this on a production network. Reach us at <a href="mailto:contact@quantalabs.cc">contact@quantalabs.cc</a>.
      </p>

      <hr />

      <h2>The Line That Should Stay With You</h2>
      <blockquote>
        &ldquo;It is conceivable that the existence of early CRQCs may first be detected on the blockchain rather than announced.&rdquo;
        <footer>— Google Quantum AI, March 2026</footer>
      </blockquote>
      <p>
        Meaning: the first sign that Q-Day has arrived might not be a press release. It might be $2.5 trillion in ECC-secured digital assets draining to an unknown address.
      </p>
      <p><em>The migration window is open. Build accordingly.</em></p>
    </article>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const tagColors: Record<string, string> = {
    "Post-Quantum": "bg-emerald-50 text-emerald-700 border-emerald-100",
    "ECDSA": "bg-red-50 text-red-700 border-red-100",
    "Falcon-512": "bg-blue-50 text-blue-700 border-blue-100",
    "Security": "bg-gray-100 text-gray-700 border-gray-200",
  };

  return (
    <div className="pt-24 min-h-screen pb-32 bg-white">

      {/* ── BACK NAV ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* ── HERO HEADER ───────────────────────────────────────────── */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${tagColors[tag] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-black leading-[1.05] mb-8">
          {post.title}
        </h1>

        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8 max-w-3xl">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-6 pb-10 border-b border-gray-100">
          <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>
      </header>

      {/* ── ARTICLE BODY ──────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <style>{`
          .prose-custom { color: #1a1a1a; font-size: 1.0625rem; line-height: 1.8; }
          .prose-custom h2 { font-size: 1.75rem; font-weight: 800; letter-spacing: -0.03em; color: #000; margin: 3rem 0 1rem; line-height: 1.2; }
          .prose-custom h3 { font-size: 1.25rem; font-weight: 700; color: #111; margin: 2rem 0 0.75rem; }
          .prose-custom p { margin: 1.25rem 0; color: #374151; }
          .prose-custom p.lead { font-size: 1.15rem; color: #1f2937; font-weight: 500; }
          .prose-custom a { color: #059669; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
          .prose-custom a:hover { color: #047857; }
          .prose-custom strong { color: #111; font-weight: 700; }
          .prose-custom em { color: #374151; font-style: italic; }
          .prose-custom hr { border: none; border-top: 1px solid #e5e7eb; margin: 2.5rem 0; }
          .prose-custom blockquote { border-left: 3px solid #00E599; padding: 1rem 1.5rem; margin: 2rem 0; background: #f9fafb; border-radius: 0 0.75rem 0.75rem 0; }
          .prose-custom blockquote p { color: #111; font-size: 1.1rem; font-style: italic; font-weight: 600; margin: 0 0 0.5rem; }
          .prose-custom blockquote footer { font-size: 0.8rem; color: #6b7280; font-style: normal; font-weight: 700; }
          .prose-custom ul { list-style: disc; padding-left: 1.75rem; margin: 1.25rem 0; }
          .prose-custom ul li { margin: 0.5rem 0; color: #374151; }
          .prose-custom table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
          .prose-custom th { background: #f3f4f6; font-weight: 800; text-align: left; padding: 0.6rem 1rem; border: 1px solid #e5e7eb; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: #374151; }
          .prose-custom td { padding: 0.6rem 1rem; border: 1px solid #e5e7eb; color: #1f2937; }
          .prose-custom tr:hover td { background: #f9fafb; }
        `}</style>
        <ECDSAPost />
      </div>

      {/* ── REFERENCES ────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
          <h2 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">References</h2>
          <ul className="space-y-2 text-sm text-gray-500">
            {[
              ["Google Quantum AI — Safeguarding cryptocurrency by disclosing quantum vulnerabilities responsibly (March 2026)", "https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly/"],
              ["Oratomic/Caltech/UCB — Shor's algorithm with as few as 10,000 atomic qubits", "https://arxiv.org/pdf/2603.28627"],
              ["Project Eleven — Q-Day Prize awarded (April 24, 2026)", "https://blog.projecteleven.com/posts/project-eleven-awards-1-btc-q-day-prize-for-largest-quantum-attack-on-elliptic-curve-cryptography-to-date"],
              ["Cloudflare — Post-Quantum Roadmap (2026)", "https://blog.cloudflare.com/post-quantum-roadmap/"],
              ["Google — Cryptography migration timeline (2029 commitment)", "https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/"],
              ["NIST IR 8547 — PQC deprecation timeline", "https://csrc.nist.gov/pubs/ir/8547/ipd"],
              ["NSA CNSA 2.0 — Post-quantum cybersecurity resources", "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cybersecurity-Resources/"],
              ["Quantachain Research — QUANTA: Engineering a Production-Ready Post-Quantum Blockchain (Zenodo)", "https://doi.org/10.5281/zenodo.18753528"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors font-medium hover:underline underline-offset-2"
                >
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── FOOTER CTA ────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E599] opacity-[0.04] rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <div className="w-12 h-12 bg-[#00E599]/10 border border-[#00E599]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#00E599] font-extrabold text-xl">Q</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
              QuantaLabs — Building the Post-Quantum Future
            </h3>
            <p className="text-gray-400 font-medium mb-8 max-w-lg mx-auto leading-relaxed">
              The engineering lab behind Quantachain — the first live post-quantum blockchain running Falcon-512 in production. We publish our benchmarks, architecture, and research openly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://quantachain.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00E599] text-black font-bold rounded-xl hover:bg-white transition-all text-sm"
              >
                Visit Quantachain <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-700 text-white font-bold rounded-xl hover:border-white transition-all text-sm"
              >
                Enterprise Enquiries
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
