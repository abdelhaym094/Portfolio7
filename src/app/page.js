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
  Sparkles,
  ChevronRight
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import DataLattice from "@/components/DataLattice";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdelhaym953@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <main className="min-h-screen text-white overflow-x-hidden relative bg-transparent selection:bg-cyan-500 selection:text-slate-950">
      <Navbar onOpenResume={() => setCvModalOpen(true)} />

      {/* ==================== 1. HERO SECTION (WHO I AM & WHAT I DO) ==================== */}
      <section 
        id="hero" 
        className="min-h-[85vh] sm:min-h-[90vh] flex items-center px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 relative"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Left: Core Identity & High-Level Purpose */}
            <div className="flex-1 text-center md:text-left">
              
              {/* Engineering Affiliation Tag */}
              <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-white/[0.08] px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Al-Azhar University • Biosystems Engineering</span>
              </div>

              {/* Primary Name Display */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Mohamed <span className="text-cyan-400">Abdelhay</span>
              </h1>

              {/* Subtitle / Role Focus */}
              <p className="text-lg sm:text-2xl font-bold text-slate-200 mt-2">
                Data Scientist &amp; Machine Learning Developer
              </p>

              {/* Focused 1–2 Sentence Statement */}
              <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base max-w-xl">
                I build predictive machine learning models, end-to-end data pipelines, and interactive decision dashboards. Grounded in engineering discipline, I turn complex telemetry and real-world datasets into clear operational intelligence.
              </p>

              {/* Direct Primary CTAs */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-7">
                <a 
                  href="#projects" 
                  className="min-h-[44px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-xl font-bold transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-95"
                >
                  <span>View Projects</span>
                  <ArrowDown size={15} />
                </a>

                <a 
                  href="#contact" 
                  className="min-h-[44px] border border-white/[0.12] hover:border-cyan-500/40 bg-slate-900/60 hover:bg-slate-900 text-slate-200 hover:text-white px-5 py-2.5 rounded-xl font-semibold transition-all text-sm flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Contact Me</span>
                </a>

                <button
                  onClick={() => setCvModalOpen(true)}
                  className="min-h-[44px] border border-white/[0.08] hover:border-white/20 bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-1.5"
                  aria-label="View Resume Summary"
                >
                  <FileText size={14} className="text-cyan-400" />
                  <span>Resume</span>
                </button>
              </div>

              {/* Subtle Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-4 mt-7 pt-5 border-t border-white/[0.06] text-xs text-slate-400">
                <a 
                  href="https://github.com/abdelhaym953-create" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors p-1"
                >
                  <FaGithub size={15} />
                  <span>GitHub</span>
                </a>
                <span className="text-white/10">•</span>
                <a 
                  href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors p-1"
                >
                  <FaLinkedin size={15} />
                  <span>LinkedIn</span>
                </a>
                <span className="text-white/10">•</span>
                <a 
                  href="mailto:abdelhaym953@gmail.com"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors p-1"
                >
                  <Mail size={15} />
                  <span>abdelhaym953@gmail.com</span>
                </a>
              </div>

            </div>

            {/* Right: Portrait with Subtle Data Lattice Geometry */}
            <div className="shrink-0 flex justify-center relative">
              {/* Subtle Data Science Neural Lattice */}
              <DataLattice />

              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-2 border-white/[0.1] bg-slate-900 shadow-2xl p-1 group hover:border-cyan-500/40 transition-colors duration-300">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src="/me.jpeg"
                    alt="Mohamed Abdelhay"
                    fill
                    sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 224px"
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 2. SELECTED PROJECTS (PROGRESSIVE DISCLOSURE TABS) ==================== */}
      <Projects />

      {/* ==================== 3. TECHNICAL SKILLS (INTERACTIVE CATEGORIES) ==================== */}
      <Skills />

      {/* ==================== 4. ABOUT (SHORT + EXPANDABLE DETAILS) ==================== */}
      <About />

      {/* ==================== 5. EXPERIENCE & TRAJECTORY (INTERACTIVE TIMELINE) ==================== */}
      <Experience />

      {/* ==================== 6. CONTACT SECTION (PROMINENT & DIRECT) ==================== */}
      <Contact />

      {/* ==================== 7. MINIMAL FOOTER ==================== */}
      <Footer />

      {/* ==================== RESUME SUMMARY MODAL ==================== */}
      <AnimatePresence>
        {cvModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0b101c] border border-white/[0.12] rounded-3xl max-w-lg w-full p-6 sm:p-7 relative shadow-2xl"
            >
              <button
                onClick={() => setCvModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Mohamed Abdelhay</h3>
                  <p className="text-xs text-slate-400">Data Scientist &amp; Machine Learning Developer</p>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-white/[0.06] rounded-2xl p-4 text-xs text-slate-300 space-y-3 mb-5">
                <div>
                  <span className="text-cyan-400 font-bold block text-[11px] uppercase tracking-wider mb-0.5">
                    Academic Background
                  </span>
                  <p className="leading-relaxed">
                    B.Sc. in Agricultural &amp; Biosystems Engineering (Solar Energy focus), Al-Azhar University (Expected 2027). Coursework in physical systems modeling, thermodynamics, differential equations, and statistical inference.
                  </p>
                </div>

                <div>
                  <span className="text-amber-400 font-bold block text-[11px] uppercase tracking-wider mb-0.5">
                    Core Technical Stack
                  </span>
                  <p className="leading-relaxed font-mono text-[11px] text-slate-200">
                    Python, LightGBM, CatBoost, XGBoost, Scikit-Learn, Pandas, NumPy, SQL, Streamlit, Plotly, Git, Feature Engineering, TimeSeriesSplit.
                  </p>
                </div>

                <div>
                  <span className="text-emerald-400 font-bold block text-[11px] uppercase tracking-wider mb-0.5">
                    Flagship Practical Implementations
                  </span>
                  <p className="leading-relaxed">
                    Solar Radiation Prediction Engine (R² = 0.941), DataVision AI (Autonomous profiling + LLM summaries), Online Sales Cohort Platform, Hotel Booking Cancellation AUC = 0.89, Mobile Sentiment NLP Engine.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[44px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shadow-cyan-500/20"
                >
                  <ExternalLink size={13} />
                  <span>Connect on LinkedIn</span>
                </a>
                
                <button
                  onClick={handleCopyEmail}
                  className="min-h-[44px] px-4 border border-white/[0.12] hover:border-cyan-500/40 text-slate-200 hover:text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 bg-slate-900/60"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Mail size={14} />}
                  <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
