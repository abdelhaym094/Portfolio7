"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdelhaym953@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Banner الرئيسي الترحيبي */}
        <div className="bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-10 text-center mb-8 shadow-xl relative overflow-hidden">
          
          {/* لمسة إضاءة خلفية دافئة */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none" />

          <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Get In Touch
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Let's Build Something <span className="text-yellow-400">Amazing</span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-base mt-3 max-w-lg mx-auto leading-relaxed">
            Interested in data science, AI solutions, or intelligent dashboards? Let's connect and transform your data into reality.
          </p>

          {/* زر نسخ/إرسال إيميل سريع للموبايل */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-yellow-400 text-zinc-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-yellow-300 transition-all active:scale-95 shadow-lg shadow-yellow-400/10"
            >
              {copied ? "✓ Email Copied!" : "✉ Copy abdelhaym953@gmail.com"}
            </button>
          </div>
        </div>

        {/* 
          تنسيق كروت التواصل للموبايل:
          الموبايل: Grid من 2 columns مدمجين جداً وأنيقين بدلاً من كروت طويلة
          الكمبيوتر: 4 columns في صف واحد متناسق
        */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          
          {/* 1. Email Card */}
          <a
            href="mailto:abdelhaym953@gmail.com"
            className="bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-yellow-400/30 rounded-xl p-3.5 sm:p-4 flex flex-col items-center text-center transition-all hover:bg-zinc-900/70 group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-sm sm:text-base mb-2 group-hover:scale-110 transition-transform">
              ✉
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</span>
            <span className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate w-full">
              abdelhaym953
            </span>
          </a>

          {/* 2. LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-yellow-400/30 rounded-xl p-3.5 sm:p-4 flex flex-col items-center text-center transition-all hover:bg-zinc-900/70 group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 font-bold text-xs sm:text-sm mb-2 group-hover:scale-110 transition-transform">
              in
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</span>
            <span className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate w-full">
              Mohamed Abdelhay
            </span>
          </a>

          {/* 3. GitHub Card */}
          <a
            href="https://github.com/abdelhaym953-create"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-yellow-400/30 rounded-xl p-3.5 sm:p-4 flex flex-col items-center text-center transition-all hover:bg-zinc-900/70 group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-sm sm:text-base mb-2 group-hover:scale-110 transition-transform">
              💻
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub</span>
            <span className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate w-full">
              abdelhaym953
            </span>
          </a>

          {/* 4. Location Card */}
          <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-xl p-3.5 sm:p-4 flex flex-col items-center text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-sm sm:text-base mb-2">
              📍
            </div>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</span>
            <span className="text-xs sm:text-sm font-bold text-white mt-0.5 truncate w-full">
              Cairo, Egypt
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}