"use client";

import { useState } from "react";
import { Mail, MapPin, Check, Copy, ArrowUpRight, Send, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdelhaym953@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Banner */}
        <div className="bg-slate-900/40 border border-white/[0.08] rounded-3xl p-6 sm:p-10 text-center mb-6 shadow-2xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            <span>Direct Inquiry</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Collaborate or <span className="text-cyan-400">Hire?</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base mt-3 max-w-lg mx-auto leading-relaxed">
            I am actively seeking roles in Data Science, Machine Learning, and Applied AI. Whether you have an open position, an engineering challenge, or an idea to discuss, let&apos;s connect.
          </p>

          {/* Direct Email Action Buttons */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-cyan-500/20 min-h-[44px]"
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} className="text-slate-950" /> : <Copy size={16} />}
              <span>{copied ? "Email Copied to Clipboard!" : "Copy abdelhaym953@gmail.com"}</span>
            </button>

            <a
              href="mailto:abdelhaym953@gmail.com"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/[0.1] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all min-h-[44px]"
              aria-label="Send direct email"
            >
              <Send size={15} className="text-cyan-400" />
              <span>Send Direct Email</span>
            </a>
          </div>
        </div>

        {/* 4 Clean Connection Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          
          {/* 1. Email */}
          <a
            href="mailto:abdelhaym953@gmail.com"
            className="bg-slate-900/40 border border-white/[0.06] hover:border-cyan-500/40 rounded-2xl p-4 flex flex-col items-center text-center transition-colors group min-h-[110px] justify-center"
            aria-label="Email address"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
              <Mail size={16} />
            </div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Email</span>
            <span className="text-xs font-bold text-white mt-0.5 truncate w-full group-hover:text-cyan-400 transition-colors">
              abdelhaym953
            </span>
          </a>

          {/* 2. LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/40 border border-white/[0.06] hover:border-cyan-500/40 rounded-2xl p-4 flex flex-col items-center text-center transition-colors group min-h-[110px] justify-center"
            aria-label="Visit LinkedIn profile"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
              <FaLinkedin size={16} />
            </div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</span>
            <span className="text-xs font-bold text-white mt-0.5 truncate w-full group-hover:text-cyan-400 transition-colors flex items-center justify-center gap-1">
              <span>Connect</span>
              <ArrowUpRight size={11} className="opacity-50" />
            </span>
          </a>

          {/* 3. GitHub */}
          <a
            href="https://github.com/abdelhaym953-create"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/40 border border-white/[0.06] hover:border-cyan-500/40 rounded-2xl p-4 flex flex-col items-center text-center transition-colors group min-h-[110px] justify-center"
            aria-label="Visit GitHub repositories"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
              <FaGithub size={16} />
            </div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">GitHub</span>
            <span className="text-xs font-bold text-white mt-0.5 truncate w-full group-hover:text-cyan-400 transition-colors flex items-center justify-center gap-1">
              <span>Codebases</span>
              <ArrowUpRight size={11} className="opacity-50" />
            </span>
          </a>

          {/* 4. Location */}
          <div className="bg-slate-900/40 border border-white/[0.06] rounded-2xl p-4 flex flex-col items-center text-center min-h-[110px] justify-center">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2">
              <MapPin size={16} />
            </div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Location</span>
            <span className="text-xs font-bold text-white mt-0.5 truncate w-full">
              Cairo, Egypt
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
