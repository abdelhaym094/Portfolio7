"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCheck, FaCopy } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdelhaym953@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-14 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Banner */}
        <div className="bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-10 text-center mb-8 shadow-xl relative overflow-hidden">
          
          {/* Subtle warm glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none" />

          <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Get In Touch
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Let&apos;s Build Something <span className="text-yellow-400">Exceptional</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base mt-3 max-w-lg mx-auto leading-relaxed">
            Interested in predictive modeling, end-to-end data pipelines, or executive decision dashboards? Feel free to reach out.
          </p>

          {/* Quick email action */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-yellow-400 text-zinc-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-yellow-300 transition-all active:scale-95 shadow-lg shadow-yellow-400/10"
              aria-label="Copy email address"
            >
              {copied ? <FaCheck className="text-zinc-950" /> : <FaCopy />}
              <span>{copied ? "Email Copied to Clipboard!" : "Copy abdelhaym953@gmail.com"}</span>
            </button>

            <a
              href="mailto:abdelhaym953@gmail.com"
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-slate-200 border border-white/10 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
              aria-label="Open email client"
            >
              <FaEnvelope className="text-yellow-400" />
              <span>Send Direct Email</span>
            </a>
          </div>
        </div>

        {/* 4 Connection Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          
          {/* 1. Email Card */}
          <a
            href="mailto:abdelhaym953@gmail.com"
            className="bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-yellow-400/30 rounded-xl p-4 flex flex-col items-center text-center transition-all hover:bg-zinc-900/80 group shadow-md"
            aria-label="Send email to Mohamed Abdelhay"
          >
            <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-sm mb-2 group-hover:scale-110 transition-transform">
              <FaEnvelope size={15} />
            </div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Email</span>
            <span className="text-xs font-bold text-white mt-0.5 truncate w-full group-hover:text-yellow-400 transition-colors">
              abdelhaym953
            </span>
          </a>

          {/* 2. LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-yellow-400/30 rounded-xl p-4 flex flex-col items-center text-center transition-all hover:bg-zinc-900/80 group shadow-md"
            aria-label="Visit LinkedIn Profile"
          >
            <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-sm mb-2 group-hover:scale-110 transition-transform">
              <FaLinkedin size={16} />
            </div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</span>
            <span className="text-xs font-bold text-white mt-0.5 truncate w-full group-hover:text-yellow-400 transition-colors">
              Mohamed Abdelhay
            </span>
          </a>

          {/* 3. GitHub Card */}
          <a
            href="https://github.com/abdelhaym953-create"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-yellow-400/30 rounded-xl p-4 flex flex-col items-center text-center transition-all hover:bg-zinc-900/80 group shadow-md"
            aria-label="Visit GitHub Profile"
          >
            <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-sm mb-2 group-hover:scale-110 transition-transform">
              <FaGithub size={16} />
            </div>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">GitHub</span>
            <span className="text-xs font-bold text-white mt-0.5 truncate w-full group-hover:text-yellow-400 transition-colors">
              abdelhaym953
            </span>
          </a>

          {/* 4. Location Card */}
          <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-center text-center shadow-md">
            <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-sm mb-2">
              <FaMapMarkerAlt size={16} />
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
