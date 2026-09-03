"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Layers, 
  Sparkles,
  Rocket
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-14 sm:py-18 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          number="04"
          eyebrow="BACKGROUND"
          title="About"
          titleHighlight="Me"
          description="Engineering principles, scientific curiosity, and practical execution."
          className="mb-4 sm:mb-6"
        />

        {/* Short, Essential Narrative Card (Visible Immediately) */}
        <div className="bg-slate-900/40 border border-white/[0.08] p-5 sm:p-7 rounded-2xl shadow-lg">
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            I approach data science through an engineering mindset, combining mathematical modeling, machine learning, and practical decision systems.
          </p>

          {/* Interactive "Read More" Trigger */}
          <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-xs font-bold transition-colors min-h-[36px]"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? "Show Less" : "Read More →"}</span>
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            <span className="text-[11px] text-slate-500 font-mono">
              {isExpanded ? "Expanded view" : "Click to view full background"}
            </span>
          </div>

          {/* Expanded Deep Details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden pt-5 space-y-3.5 border-t border-white/[0.06] mt-4"
              >
                {/* 1. Academic & Engineering Foundation */}
                <div className="bg-slate-950/60 border border-white/[0.06] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                    <GraduationCap size={15} />
                    <span>Academic &amp; Engineering Rigor</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Al-Azhar University • Biosystems Engineering (Expected 2027)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Engineering coursework grounded in solar energy radiation geometry, thermodynamics, fluid dynamics, and differential equations. This background drives a physics-grounded intuition for feature engineering rather than treating ML algorithms as opaque black boxes.
                  </p>
                </div>

                {/* 2. Machine Learning Specialization */}
                <div className="bg-slate-950/60 border border-white/[0.06] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                    <Cpu size={15} />
                    <span>Machine Learning &amp; Validation Discipline</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Gradient Boosting &amp; Temporal Integrity
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Specialized in gradient-boosted decision trees (LightGBM, CatBoost, XGBoost) applied to physical and tabular records. Always enforcing rigorous temporal cross-validation (TimeSeriesSplit) to guarantee zero lookahead leakage before models touch production.
                  </p>
                </div>

                {/* 3. Applied AI & Data Solutions */}
                <div className="bg-slate-950/60 border border-white/[0.06] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                    <Sparkles size={15} />
                    <span>Applied AI &amp; Grounded Exploration</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Deterministic Math + LLM Reasoning
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Developing hybrid profiling architectures where statistical distributions, skew, and missingness are calculated deterministically in Python/Pandas before passing verified schemas to LLM endpoints—completely eliminating numerical hallucinations.
                  </p>
                </div>

                {/* 4. End-to-End System Delivery */}
                <div className="bg-slate-950/60 border border-white/[0.06] rounded-xl p-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1.5">
                    <Rocket size={15} />
                    <span>End-to-End System Delivery</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    From Ingestion to Interactive Decision Tools
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    I own the full application lifecycle: cleaning multi-channel transactional and sensor datasets, structuring dimensional schemas, training calibrated estimators, and deploying responsive Streamlit Cloud apps equipped with interactive parameter sliders for operators.
                  </p>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
