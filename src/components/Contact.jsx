"use client";

import { useState } from "react";
import { Mail, Check, Copy, Send, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdelhaym953@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-14 sm:py-18 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          number="05"
          eyebrow="INQUIRY"
          title="Let's Work"
          titleHighlight="Together"
          description="Open to machine learning, data science, and applied AI opportunities."
          align="center"
          className="mb-5 sm:mb-7"
        />

        {/* Main Card */}
        <div className="bg-slate-900/40 border border-white/[0.08] rounded-2xl p-6 sm:p-8 text-center shadow-xl">
          
          <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Whether you have an open engineering role, a machine learning challenge, or a data project to collaborate on, let&apos;s connect directly.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:abdelhaym953@gmail.com"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-cyan-500/20 active:scale-95 min-h-[42px]"
            >
              <Send size={14} />
              <span>Send Me an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-slate-950/80 hover:bg-slate-900 text-slate-200 hover:text-white border border-white/[0.1] font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all min-h-[42px]"
              aria-label="Copy email address"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Direct Channels */}
          <div className="grid grid-cols-3 gap-2.5 mt-8 pt-6 border-t border-white/[0.06]">
            
            {/* Email */}
            <a
              href="mailto:abdelhaym953@gmail.com"
              className="bg-slate-950/60 border border-white/[0.06] hover:border-cyan-500/40 rounded-xl p-3 flex flex-col items-center justify-center text-center transition-colors group min-h-[80px]"
            >
              <Mail size={16} className="text-cyan-400 mb-1" />
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Email</span>
              <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate max-w-full">
                abdelhaym953
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950/60 border border-white/[0.06] hover:border-cyan-500/40 rounded-xl p-3 flex flex-col items-center justify-center text-center transition-colors group min-h-[80px]"
            >
              <FaLinkedin size={16} className="text-cyan-400 mb-1" />
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</span>
              <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                <span>Profile</span>
                <ArrowUpRight size={11} className="opacity-50" />
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/abdelhaym953-create"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950/60 border border-white/[0.06] hover:border-cyan-500/40 rounded-xl p-3 flex flex-col items-center justify-center text-center transition-colors group min-h-[80px]"
            >
              <FaGithub size={16} className="text-cyan-400 mb-1" />
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">GitHub</span>
              <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                <span>Codebases</span>
                <ArrowUpRight size={11} className="opacity-50" />
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
