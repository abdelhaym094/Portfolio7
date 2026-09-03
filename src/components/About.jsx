"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Target, 
  Wrench, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  BookOpen, 
  Flame, 
  Briefcase 
} from "lucide-react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Engineering Rigor",
      description: "Studying Agricultural & Biosystems Engineering at Al-Azhar University with a focus on Solar Energy systems, thermodynamics, and physical modeling."
    },
    {
      icon: Target,
      title: "Predictive Machine Learning",
      description: "Specializing in gradient-boosted decision trees (LightGBM, CatBoost, XGBoost) with rigorous forward-chaining temporal validation."
    },
    {
      icon: Wrench,
      title: "End-to-End System Delivery",
      description: "Taking projects from raw multi-channel ingestion to live interactive Streamlit Cloud applications with real-time scenario modeling."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-2.5">
            <Compass size={12} />
            <span>Background & Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Engineering Rigor Meets <span className="text-cyan-400">Data Science</span>
          </h2>
        </div>

        {/* Short Essential Narrative Statement */}
        <div className="bg-slate-900/40 border border-white/[0.08] p-5 sm:p-7 rounded-3xl mb-6 shadow-lg">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            I approach data science through the lens of an engineer. Grounded in my studies in Agricultural &amp; Biosystems Engineering at Al-Azhar University—with a quantitative focus on Solar Energy Systems—I bridge physical mechanics, mathematical rigor, and modern machine learning. Rather than treating algorithms as black boxes, I focus on clean feature formulation, temporal validation without leakage, and deploying real-world decision tools that operators can trust.
          </p>
        </div>

        {/* 3 Core Pillars (Visible Initially) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/30 border border-white/[0.06] hover:border-cyan-500/30 rounded-2xl p-5 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Icon size={17} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive "Read More" Expander */}
        <div className="text-center mb-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 bg-slate-900/70 hover:bg-slate-900 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-500/50 text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm min-h-[44px]"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "Show Less" : "More About My Background & Direction"}</span>
            {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>

        {/* Expanded Deep Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden pt-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-900/50 border border-white/[0.08] rounded-3xl p-5 sm:p-7 shadow-xl">
                
                {/* 1. Education */}
                <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <GraduationCap size={15} />
                    <span>Education & Foundation</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    B.Sc. in Agricultural &amp; Biosystems Engineering
                  </h4>
                  <p className="text-xs text-slate-400 mb-2 font-medium">
                    Al-Azhar University (2023 — 2027 Expected)
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Engineering coursework emphasizing physical system thermodynamics, solar radiation geometry, mathematical differential equations, and statistical inference.
                  </p>
                </div>

                {/* 2. Technical Interests */}
                <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <Flame size={15} />
                    <span>Technical Interests</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Gradient Boosting &amp; Temporal Systems
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Deep exploration of decision tree architectures (LightGBM histogram bins, CatBoost oblivious trees), feature interaction attribution (SHAP), and time-series modeling without leakage.
                  </p>
                </div>

                {/* 3. Current Learning */}
                <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <BookOpen size={15} />
                    <span>Current Focus &amp; Growth</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Applied AI &amp; Low-Latency Pipelines
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Developing hybrid profiling architectures combining programmatic Pandas algorithms with structured LLM JSON generation for automated data exploration and defect detection.
                  </p>
                </div>

                {/* 4. Professional Direction */}
                <div className="bg-slate-950/60 border border-white/[0.06] rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2">
                    <Briefcase size={15} />
                    <span>Professional Direction</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Data Science &amp; Machine Learning Roles
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Actively seeking full-time or junior/associate Data Scientist and ML Developer opportunities where I can apply predictive modeling, statistical rigor, and scalable pipeline development.
                  </p>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
