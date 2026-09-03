"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileDownload, FaExternalLinkAlt, FaTimes, FaCheck } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import TypingText from "@/components/TypingText";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdelhaym953@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="min-h-screen text-white overflow-x-hidden relative bg-transparent selection:bg-yellow-400 selection:text-black">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none select-none hidden md:block">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-yellow-400/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-zinc-800/30 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar onOpenResume={() => setCvModalOpen(true)} />

        {/* ==================== HERO SECTION ==================== */}
        <section className="min-h-[90vh] md:min-h-screen flex items-center px-4 sm:px-6 pt-28 md:pt-32 pb-14 md:pb-20">
          <div className="max-w-6xl mx-auto w-full flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            
            {/* 1. Profile Visual with Animated Neural Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center w-full md:order-last"
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[350px] md:h-[350px] group">
                {/* Glow & Orbit effects */}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/30 via-yellow-500/10 to-zinc-700/20 blur-xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-full border border-yellow-400/30 animate-pulse pointer-events-none" />
                
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-900 ring-2 ring-yellow-400/40 shadow-2xl bg-zinc-950">
                  <Image
                    src="/me.jpeg"
                    alt="Mohamed Abdelhay - Data Scientist & AI Engineer"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Status Pill */}
                <div className="absolute -bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur-md border border-yellow-400/30 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-semibold text-slate-200 tracking-wide">
                    Available for AI & Data Roles
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 2. Hero Content & Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              {/* Domain Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 px-3.5 py-1 rounded-full text-yellow-400 text-xs sm:text-sm font-semibold mb-4 select-none tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                Applied Machine Learning & AI
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
                Mohamed <span className="text-yellow-400">Abdelhay</span>
              </h1>

              {/* Dynamic Role Subtitle */}
              <div className="text-lg sm:text-2xl md:text-3xl mt-3 font-bold text-slate-200 min-h-[38px] flex items-center">
                <TypingText />
              </div>

              {/* Focused Value Proposition */}
              <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base max-w-lg">
                I design end-to-end Machine Learning pipelines, predictive systems, and high-impact analytics dashboards. Transforming messy real-world datasets into reliable mathematical intelligence and actionable business decisions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-7 w-full sm:w-auto">
                <a 
                  href="#projects" 
                  className="flex-1 sm:flex-none bg-yellow-400 text-zinc-950 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all text-sm text-center shadow-lg shadow-yellow-400/15"
                >
                  Explore Projects
                </a>

                <button
                  onClick={() => setCvModalOpen(true)}
                  className="flex-1 sm:flex-none border border-yellow-400/30 hover:border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-5 py-3 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2"
                >
                  <FaFileDownload className="text-xs" />
                  View Resume
                </button>
                
                <a 
                  href="https://github.com/abdelhaym953-create" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className="border border-white/10 text-slate-300 hover:text-white hover:border-white/30 bg-zinc-900/60 px-4 py-3 rounded-xl font-semibold transition-all text-sm text-center"
                >
                  GitHub
                </a>
              </div>

              {/* Quantitative ML Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-9 pt-6 border-t border-white/10 w-full">
                <div className="bg-zinc-900/60 backdrop-blur-sm border border-white/5 rounded-xl p-3 text-center">
                  <h3 className="text-xl sm:text-2xl font-black text-yellow-400">10+</h3>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wider">
                    ML Projects
                  </p>
                </div>
                <div className="bg-zinc-900/60 backdrop-blur-sm border border-white/5 rounded-xl p-3 text-center">
                  <h3 className="text-xl sm:text-2xl font-black text-yellow-400">&lt;45ms</h3>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wider">
                    Avg Latency
                  </p>
                </div>
                <div className="bg-zinc-900/60 backdrop-blur-sm border border-white/5 rounded-xl p-3 text-center">
                  <h3 className="text-xl sm:text-2xl font-black text-yellow-400">99.2%</h3>
                  <p className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-0.5 uppercase tracking-wider">
                    Peak ROC-AUC
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ==================== CONTENT SECTIONS ==================== */}
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* ==================== RESUME MODAL VIEWER ==================== */}
      <AnimatePresence>
        {cvModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-zinc-900 border border-yellow-400/30 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl"
            >
              <button
                onClick={() => setCvModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 text-base transition-colors"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center text-yellow-400">
                  <FaFileDownload size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Mohamed Abdelhay — Resume</h3>
                  <p className="text-xs text-slate-400">Data Scientist & AI Specialist</p>
                </div>
              </div>

              <div className="bg-zinc-950/70 border border-white/5 rounded-xl p-4 text-xs text-slate-300 space-y-2 mb-5">
                <p><strong>Education:</strong> B.Sc. Agricultural Engineering (Solar Energy focus), Al-Azhar University</p>
                <p><strong>Key Skills:</strong> Python, LightGBM, XGBoost, CatBoost, Scikit-learn, SQL, Streamlit, Pandas</p>
                <p><strong>Focus:</strong> Predictive Machine Learning, Solar Radiation Forecasting, NLP Sentiment Analysis, Business Intelligence</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-yellow-400 text-zinc-950 font-bold text-xs py-2.5 rounded-xl text-center hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt size={12} />
                  View Full Profile on LinkedIn
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 border border-white/10 hover:border-yellow-400/40 text-slate-200 hover:text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {copiedEmail ? <FaCheck className="text-emerald-400" /> : null}
                  {copiedEmail ? "Email Copied!" : "Request PDF via Email"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
