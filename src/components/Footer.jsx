"use client";

import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent text-white border-t border-white/[0.08] py-12 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Purpose */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1.5">
            <div className="w-6 h-6 rounded-md bg-yellow-400 text-zinc-950 font-black text-[10px] flex items-center justify-center">
              MA
            </div>
            <span className="text-base font-black tracking-tight text-white">
              Mohamed <span className="text-yellow-400">Abdelhay</span>
            </span>
          </div>
          <p className="text-slate-400 text-xs">
            Data Scientist & Machine Learning Engineer • Al-Azhar University
          </p>
        </div>

        {/* Quick Jump Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-400">
          <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-yellow-400 transition-colors">Journey</a>
          <a href="#skills" className="hover:text-yellow-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-yellow-400 transition-colors">Case Studies</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
        </div>

        {/* Social Icons & Back-to-Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/abdelhaym953-create"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-xl bg-zinc-900/40 border border-white/[0.08] hover:border-yellow-400/40 flex items-center justify-center text-slate-300 hover:text-yellow-400 transition-colors"
          >
            <FaGithub size={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-xl bg-zinc-900/40 border border-white/[0.08] hover:border-yellow-400/40 flex items-center justify-center text-slate-300 hover:text-yellow-400 transition-colors"
          >
            <FaLinkedin size={15} />
          </a>

          <a
            href="mailto:abdelhaym953@gmail.com"
            aria-label="Send Email"
            className="w-9 h-9 rounded-xl bg-zinc-900/40 border border-white/[0.08] hover:border-yellow-400/40 flex items-center justify-center text-slate-300 hover:text-yellow-400 transition-colors"
          >
            <Mail size={15} />
          </a>

          <div className="h-4 w-px bg-white/10" />

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="w-9 h-9 rounded-xl bg-zinc-900/40 border border-white/[0.08] hover:border-yellow-400/40 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto text-center mt-8 pt-6 border-t border-white/[0.04] text-slate-400 text-xs">
        <p>© {new Date().getFullYear()} Mohamed Abdelhay. Architected with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
