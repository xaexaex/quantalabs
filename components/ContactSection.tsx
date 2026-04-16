"use client";

import { Mail, MapPin, ArrowUpRight, MessageSquare, Building2, Phone, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";

const TOPICS = [
  "Custom Blockchain",
  "AI Infrastructure",
  "PQC Migration",
  "Partnerships",
  "Business Enquiry",
  "Careers",
  "Others"
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    topic: "Custom Blockchain",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isTopicOpen, setIsTopicOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", topic: "Custom Blockchain", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-10 md:py-16 bg-white selection:bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-4 block">
            Get In Touch
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-10">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-black leading-[1.05]">
              Partner with <br />
              <span className="text-gray-300">Quantalabs</span>.
            </h1>
            <p className="text-base text-gray-500 font-medium max-w-sm leading-relaxed">
              Whether you are an institution, enterprise, or investor — we want to architect something great with you.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left: Contact Info */}
          <div
            className="lg:col-span-2 flex flex-col gap-10 animate-fade-in"
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
          </div>

          {/* Right: Form */}
          <div
            className="lg:col-span-3 animate-fade-in"
          >
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
              <h2 className="text-2xl font-extrabold text-black tracking-tight mb-8">Send an Inquiry</h2>
              
              {status === "success" ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-black mb-3">Message Received</h3>
                  <p className="text-gray-500 font-medium max-w-sm">
                    Thank you for reaching out. Our team will review your inquiry and respond shortly.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm font-bold uppercase tracking-widest text-black hover:text-gray-600 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-5 relative" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full bg-gray-50 border border-gray-100 hover:border-gray-300 rounded-xl px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium text-sm disabled:opacity-50"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Company / Org</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full bg-gray-50 border border-gray-100 hover:border-gray-300 rounded-xl px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium text-sm disabled:opacity-50"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Institutional Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full bg-gray-50 border border-gray-100 hover:border-gray-300 rounded-xl px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium text-sm disabled:opacity-50"
                      placeholder="jane@yourcompany.com"
                    />
                  </div>

                  <div className="space-y-2 relative z-20">
                    <label htmlFor="topic" className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Inquiry Type</label>
                    <div className="relative">
                      <button
                        type="button"
                        id="topic"
                        disabled={status === "loading"}
                        onClick={() => setIsTopicOpen(!isTopicOpen)}
                        className="w-full bg-gray-50 border border-gray-100 hover:border-gray-300 rounded-xl px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-medium text-sm disabled:opacity-50 text-left flex justify-between items-center"
                      >
                        {formData.topic}
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isTopicOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isTopicOpen && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setIsTopicOpen(false)} />
                          <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-y-auto max-h-52 p-1.5 custom-scrollbar">
                            {TOPICS.map((t) => (
                              <button
                                key={t}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, topic: t }));
                                  setIsTopicOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors rounded-lg mb-0.5 last:mb-0 hover:bg-gray-100 ${formData.topic === t ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black'}`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Message Details</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full bg-gray-50 border border-gray-100 hover:border-gray-300 rounded-xl px-4 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all resize-y font-medium text-sm disabled:opacity-50"
                      placeholder="Briefly describe your technical requirements or project scope..."
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="text-red-500 text-sm font-bold flex items-center gap-2">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-black text-white py-5 mt-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-xl shadow-black/10 text-sm uppercase tracking-widest flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Submitting..." : "Submit Inquiry"}
                    {status !== "loading" && <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
