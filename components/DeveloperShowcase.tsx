"use client";

import { Terminal, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function DeveloperShowcase() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// Bootstrap a Post-Quantum Autonomous L2 Node
use quanta_core::consensus::PqcConsensus;
use quanta_ai::agents::ValidatorAgent;

fn main() -> Result<(), CoreError> {
    // 1. Initialize NIST-standardized PQC layer
    let pqc_layer = PqcConsensus::new(SignatureScheme::Falcon512);

    // 2. Attach local autonomous validator AI
    let mut ai_validator = ValidatorAgent::new(Model::Qwen3);
    ai_validator.set_strategy(ValidationStrategy::OptimizeYield);

    // 3. Launch the custom network node
    let node = QuantaNodeBuilder::new()
        .with_consensus(pqc_layer)
        .with_ai_validator(ai_validator)
        .build()?;

    node.start().await
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-5/12 animate-fade-in">
            <span className="text-[#00E599] font-bold tracking-widest uppercase text-xs mb-6 block">
              Core Protocol R&D
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tighter mb-6 leading-tight">
              Architected for AI. <br />
              Secured for the Quantum Era.
            </h2>
            <p className="text-lg text-gray-500 font-medium mb-8">
              We specialize in custom L1/L2 blockchain engineering, seamless mainnet Post-Quantum Cryptography (PQC) migrations, and native AI validator integration. Build sovereign infrastructure that outlives modern encryption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-[#00E599] hover:text-black transition-all hover:scale-105 active:scale-95 text-center">
                Explore Services
              </Link>
              <Link href="/research" className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-medium hover:border-[#00E599] hover:text-[#00E599] transition-all text-center">
                Read Research
              </Link>
            </div>
          </div>

          {/* Code Terminal */}
          <div className="w-full lg:w-7/12 animate-fade-in">
            <div className="bg-[#0A0A0A] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#111]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="flex items-center text-gray-500 text-xs font-mono">
                  <Terminal className="w-3 h-3 mr-2" />
                  src/node/bootstrap.rs
                </div>
                <button onClick={copyToClipboard} className="text-gray-500 hover:text-[#00E599] transition-colors">
                  {copied ? <CheckCircle2 className="w-4 h-4 text-[#00E599]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              
              {/* Terminal Body */}
              <div className="p-4 sm:p-6 overflow-x-auto">
                <pre className="text-[10px] sm:text-xs md:text-sm font-mono leading-relaxed">
                  <code className="text-gray-300">
                    <span className="text-gray-500">// Bootstrap a Post-Quantum Autonomous L2 Node</span><br />
                    <span className="text-blue-400">use</span> quanta_core::consensus::PqcConsensus;<br />
                    <span className="text-blue-400">use</span> quanta_ai::agents::ValidatorAgent;<br />
                    <br />
                    <span className="text-blue-400">fn</span> <span className="text-yellow-200">main</span>() -&gt; <span className="text-[#00E599]">Result</span>&lt;(), <span className="text-[#00E599]">CoreError</span>&gt; {'{'}<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// 1. Initialize NIST-standardized PQC layer</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">let</span> pqc_layer = <span className="text-[#00E599]">PqcConsensus</span>::<span className="text-yellow-200">new</span>(<span className="text-[#00E599]">SignatureScheme</span>::Falcon512);<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// 2. Attach local autonomous validator AI</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">let mut</span> ai_validator = <span className="text-[#00E599]">ValidatorAgent</span>::<span className="text-yellow-200">new</span>(<span className="text-[#00E599]">Model</span>::Qwen3);<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;ai_validator.<span className="text-yellow-200">set_strategy</span>(<span className="text-[#00E599]">ValidationStrategy</span>::OptimizeYield);<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// 3. Launch the custom network node</span><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">let</span> node = <span className="text-[#00E599]">QuantaNodeBuilder</span>::<span className="text-yellow-200">new</span>()<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-yellow-200">with_consensus</span>(pqc_layer)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-yellow-200">with_ai_validator</span>(ai_validator)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-yellow-200">build</span>()?;<br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;node.<span className="text-yellow-200">start</span>().<span className="text-blue-400">await</span><br />
                    {'}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
