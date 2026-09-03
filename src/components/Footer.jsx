"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-8 sm:py-10 px-4 sm:px-6 relative z-10 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-2.5">
        
        {/* Name & Title */}
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
          Mohamed <span className="text-cyan-400">Abdelhay</span>
        </h3>
        
        <p className="text-xs text-slate-400">
          Data Scientist &amp; Machine Learning Developer
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 text-xs text-slate-400">
          <a
            href="https://github.com/abdelhaym953-create"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 p-1"
          >
            <FaGithub size={13} />
            <span>GitHub</span>
          </a>
          <span className="text-white/20">·</span>
          <a
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 p-1"
          >
            <FaLinkedin size={13} />
            <span>LinkedIn</span>
          </a>
          <span className="text-white/20">·</span>
          <a
            href="mailto:abdelhaym953@gmail.com"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 p-1"
          >
            <Mail size={13} />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-slate-400 mt-1">
          © 2026 Mohamed Abdelhay
        </p>

      </div>
    </footer>
  );
}
