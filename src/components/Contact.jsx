"use client";

import { useState } from "react";
import { Mail, MapPin, Check, Copy, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdelhaym953@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Banner */}
        <div className="bg-zinc-900/40 border border-white/[0.08] rounded-3xl p-6 sm:p-10 text-center mb-6 shadow-xl relative overflow-hidden">
          
          <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Direct Contact
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Collaborate or <span className="text-yellow-400">Hire?</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base mt-3 max-w-lg mx-auto leading-relaxed">
            I am actively seeking roles in Data Science, Machine Learning, and Applied AI. Whether you have an open position or an engineering problem to discuss, let&apos;s connect.
          </p>

          {/* Direct Email Action Buttons */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-yellow-400 text-zinc-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-yellow-300 transition-all active:scale-95 shadow-sm"
              aria-label="Copy email address"
            >
              {copied ? <Check size={14} className="text-zinc-950" /> : <Copy size={14} />}
              <span>{copied ? "Email Copied to Clipboard!" : "Copy abdelhaym953@gmail.com"}</span>
            </button>

            <a
              href="mailto:abdelhaym953@gmail.com"
              className="inline-flex items-center gap-2 bg-zinc-800/80 hover:bg-zinc-800 text-slate-200 hover:text-white border border-white/[0.08] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
              aria-label="Send direct email"
            >
              <Mail size={14} className="text-yellow-400" />
              <span>Send Direct Email</span>
            </a>
          </div>
        </div>

        {/* 4 Clean Connection Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          
          {/* 1. Email */}
          <a
            href="mailto:abdelhaym953@gmail.com"
            className="bg-zinc-900/40 border border-white/[0.06] hover:border-yellow-400/30 rounded-2xl p-4 flex flex-col items-center text-center transition-colors group"
            aria-label="Email address"
          >
            <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-2 group-hover:scale-105 transition-transform">
              <Mail size={15} />
            </div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Email</span>
            <span className="text-xs font-bold text-white mt-0.5 truncate w-full group-hover:text-yellow-400 transition-colors">
              abdelhaym953
            </span>
          </a>

          {/* 2. LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/40 border border-white/[0.06] hover:border-yellow-400/30 rounded-2xl p-4 flex flex-col items-center text-center transition-colors group"
            aria-label="Visit LinkedIn profile"
          >
            <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-2 group-hover:scale-105 transition-transform">
              <FaLinkedin size={15} />
            </div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</span>
            <span className="text-xs font-bold text-white mt-0.5 truncate w-full group-hover:text-yellow-400 transition-colors flex items-center justify-center gap-1">
              <span>Connect</span>
              <ArrowUpRight size={11} className="opacity-50" />
            </span>
          </a>

          {/* 3. GitHub */}
          <a
            href="https://github.com/abdelhaym953-create"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/40 border border-white/[0.06] hover:border-yellow-400/30 rounded-2xl p-4 flex flex-col items-center text-center transition-colors group"
            aria-label="Visit GitHub repositories"
          >
            <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-2 group-hover:scale-105 transition-transform">
              <FaGithub size={15} />
            </div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">GitHub</span>
            <span className="text-xs font-bold text-white mt-0.5 truncate w-full group-hover:text-yellow-400 transition-colors flex items-center justify-center gap-1">
              <span>Codebases</span>
              <ArrowUpRight size={11} className="opacity-50" />
            </span>
          </a>

          {/* 4. Location */}
          <div className="bg-zinc-900/40 border border-white/[0.06] rounded-2xl p-4 flex flex-col items-center text-center">
            <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-2">
              <MapPin size={15} />
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
