"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, MessageSquare, Building2, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white selection:bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-5 block">
            Get In Touch
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-black leading-[1.05]">
              Partner with <br />
              <span className="text-gray-300">Quantalabs</span>.
            </h1>
            <p className="text-lg text-gray-500 font-medium max-w-sm leading-relaxed">
              Whether you are an institution, enterprise, or investor — we want to architect something great with you.
            </p>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <div>
              <h2 className="text-2xl font-extrabold text-black tracking-tight mb-6">Contact Points</h2>
              <div className="flex flex-col gap-6">
                <a href="mailto:hello@quantalabs.cc" className="group flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-black hover:bg-white transition-all shadow-sm hover:shadow-lg">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-black group-hover:border-black transition-colors">
                    <Mail className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">General Inquiries</p>
                    <p className="text-black font-bold text-sm">hello@quantalabs.cc</p>
                  </div>
                </a>
                <a href="mailto:enterprise@quantalabs.cc" className="group flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-black hover:bg-white transition-all shadow-sm hover:shadow-lg">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-black group-hover:border-black transition-colors">
                    <Building2 className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Enterprise & L2 Projects</p>
                    <p className="text-black font-bold text-sm">enterprise@quantalabs.cc</p>
                  </div>
                </a>
                <div className="group flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Registered Entity</p>
                    <p className="text-black font-bold text-sm">Quantalabs Ltd.</p>
                    <p className="text-gray-500 text-sm font-medium">Remote, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="bg-black rounded-[1.5rem] p-8 text-white">
              <MessageSquare className="w-6 h-6 text-gray-400 mb-5" />
              <h3 className="text-xl font-extrabold mb-3 tracking-tight">What to expect</h3>
              <p className="text-gray-400 font-medium text-sm leading-relaxed">
                Our engineering team aims to respond to all institutional inquiries within <strong className="text-white">24–48 business hours</strong>. For urgent infrastructure matters, reference your inquiry in the message field.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              <h2 className="text-2xl font-extrabold text-black tracking-tight mb-8">Send an Inquiry</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-50 border border-gray-100 hover:border-gray-300 rounded-xl px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Company / Org</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full bg-gray-50 border border-gray-100 hover:border-gray-300 rounded-xl px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium text-sm"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Institutional Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-50 border border-gray-100 hover:border-gray-300 rounded-xl px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium text-sm"
                    placeholder="jane@yourcompany.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="topic" className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Inquiry Type</label>
                  <select
                    id="topic"
                    className="w-full bg-gray-50 border border-gray-100 hover:border-gray-300 rounded-xl px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all appearance-none cursor-pointer font-medium text-sm"
                  >
                    <option>L1 / L2 Blockchain Development</option>
                    <option>PQC Migration Services</option>
                    <option>AI Agent Network Integration</option>
                    <option>WASM Cryptography</option>
                    <option>Investor Relations</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Message Details</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-100 hover:border-gray-300 rounded-xl px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all resize-y font-medium text-sm"
                    placeholder="Briefly describe your technical requirements or project scope..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-black text-white py-5 mt-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-xl shadow-black/10 text-sm uppercase tracking-widest flex items-center justify-center gap-2 group"
                >
                  Submit Inquiry
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
