"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  ExternalLink, 
  X, 
  Check, 
  ArrowDown, 
  Mail, 
  Terminal,
  Activity,
  Cpu,
  GraduationCap
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import TypingText from "@/components/TypingText";
import DataLattice from "@/components/DataLattice";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdelhaym953@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <main className="min-h-screen text-white overflow-x-hidden relative bg-transparent selection:bg-yellow-400 selection:text-zinc-950">
      <Navbar onOpenResume={() => setCvModalOpen(true)} />

      {/* ==================== HERO SECTION ==================== */}
      <section 
        id="hero" 
        className="min-h-[92vh] md:min-h-screen flex items-center px-4 sm:px-6 pt-28 md:pt-32 pb-16 md:pb-24 relative"
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* 1. Left: Hero Content & Positioning (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start"
          >
            {/* Status & Specialization Pill */}
            <div className="inline-flex items-center gap-2.5 bg-zinc-900/80 border border-white/[0.08] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-300 text-[11px] sm:text-xs">
                Available for Data Science & ML Roles
              </span>
              <span className="text-white/20">•</span>
              <span className="text-yellow-400 text-[11px] sm:text-xs font-mono">
                Al-Azhar University
              </span>
            </div>

            {/* Authority Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Mohamed <span className="text-yellow-400">Abdelhay</span>
            </h1>

            {/* Dynamic Role Subtitle */}
            <div className="text-lg sm:text-2xl font-bold text-slate-200 mt-3 min-h-[36px] flex items-center">
              <TypingText />
            </div>

            {/* Supporting Value Proposition */}
            <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base max-w-xl">
              Agricultural & Biosystems Engineering researcher at Al-Azhar University specializing in Solar Energy systems. I architect machine learning models (LightGBM, CatBoost), automated data pipelines, and real-time decision dashboards that translate messy telemetry into operational intelligence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-7 w-full sm:w-auto">
              <a 
                href="#projects" 
                className="flex-1 sm:flex-none bg-yellow-400 text-zinc-950 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all text-xs sm:text-sm text-center shadow-lg shadow-yellow-400/10 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Explore Case Studies</span>
                <ArrowDown size={14} />
              </a>

              <button
                onClick={() => setCvModalOpen(true)}
                className="flex-1 sm:flex-none border border-white/[0.12] hover:border-yellow-400/50 bg-zinc-900/60 hover:bg-zinc-900 text-slate-200 hover:text-white px-5 py-3 rounded-xl font-semibold transition-all text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95"
              >
                <FileText size={14} className="text-yellow-400" />
                <span>View Resume</span>
              </button>
              
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/abdelhaym953-create" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className="p-3 border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/20 bg-zinc-900/40 rounded-xl transition-all"
                >
                  <FaGithub size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="p-3 border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/20 bg-zinc-900/40 rounded-xl transition-all"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>

            {/* Credible Technical Indicators (Verifiable only - no fake numbers!) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-9 pt-6 border-t border-white/[0.08] w-full">
              <div className="bg-zinc-900/40 border border-white/[0.06] rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-yellow-400 mb-1">
                  <Activity size={13} />
                  <span className="text-[11px] font-bold">4 Live</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Streamlit Cloud Apps
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-white/[0.06] rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-yellow-400 mb-1">
                  <Cpu size={13} />
                  <span className="text-[11px] font-bold">GBDT Focus</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  LightGBM & CatBoost
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-white/[0.06] rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-yellow-400 mb-1">
                  <GraduationCap size={13} />
                  <span className="text-[11px] font-bold">B.Sc. Eng</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Solar Energy Focus
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-white/[0.06] rounded-xl p-3 text-left">
                <div className="flex items-center gap-1.5 text-yellow-400 mb-1">
                  <Terminal size={13} />
                  <span className="text-[11px] font-bold">100% Code</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Open Source on GitHub
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. Right: Profile Presentation with Neural Lattice (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-5 flex justify-center w-full relative"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px] flex items-center justify-center">
              
              {/* Discrete Neural Graph Background */}
              <DataLattice />

              {/* Architectural Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl bg-zinc-900/80 p-1.5 group">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <Image
                    src="/me.jpeg"
                    alt="Mohamed Abdelhay - Data Scientist & AI Engineer"
                    fill
                    sizes="(max-width: 768px) 240px, 320px"
                    priority
                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Subtle Dark Vignette at base of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Verified Spec Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900/95 border border-white/[0.1] px-4 py-1.5 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span className="text-[11px] font-mono font-semibold text-slate-200">
                  Solar ML • Predictive AI
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==================== CONTENT SECTIONS ==================== */}
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* ==================== EXECUTIVE RESUME MODAL ==================== */}
      <AnimatePresence>
        {cvModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-zinc-900 border border-white/[0.12] rounded-2xl max-w-lg w-full p-6 relative shadow-2xl"
            >
              <button
                onClick={() => setCvModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center text-yellow-400">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Mohamed Abdelhay — Technical Profile</h3>
                  <p className="text-xs text-slate-400">Data Scientist & Machine Learning Engineer</p>
                </div>
              </div>

              <div className="bg-zinc-950/80 border border-white/[0.08] rounded-xl p-4 text-xs text-slate-300 space-y-3 mb-5">
                <div>
                  <span className="text-yellow-400 font-semibold block text-[11px] uppercase tracking-wider mb-1">
                    Academic Background
                  </span>
                  <p>
                    B.Sc. in Agricultural & Biosystems Engineering (Solar Energy focus), Al-Azhar University (Expected 2027). Coursework in physical systems modeling, thermodynamics, and applied statistics.
                  </p>
                </div>

                <div>
                  <span className="text-yellow-400 font-semibold block text-[11px] uppercase tracking-wider mb-1">
                    Core Technical Stack
                  </span>
                  <p>
                    Python, LightGBM, XGBoost, CatBoost, Scikit-Learn, Pandas, NumPy, SQL, Streamlit, Plotly, Git, Data Cleaning, Feature Engineering.
                  </p>
                </div>

                <div>
                  <span className="text-yellow-400 font-semibold block text-[11px] uppercase tracking-wider mb-1">
                    Key Practical Projects
                  </span>
                  <p>
                    Solar Radiation Prediction Engine (LightGBM regression), DataVision AI (Autonomous EDA with LLMs), Online Sales Intelligence Dashboard, Hotel Booking Cancellation Modeling, Mobile Sentiment Analysis (CatBoost).
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-yellow-400 text-zinc-950 font-bold text-xs py-2.5 rounded-xl text-center hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <ExternalLink size={13} />
                  <span>LinkedIn Profile</span>
                </a>
                
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 border border-white/[0.12] hover:border-yellow-400/40 text-slate-200 hover:text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 bg-white/[0.03]"
                >
                  {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Mail size={13} />}
                  <span>{copiedEmail ? "Email Copied to Clipboard!" : "Copy Email to Request CV"}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
