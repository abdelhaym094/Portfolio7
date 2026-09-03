"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  LineChart, 
  Sparkles, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp,
  Milestone
} from "lucide-react";

const milestones = [
  {
    id: "ml-systems",
    icon: Code2,
    title: "Applied Machine Learning & Predictive Modeling",
    subtitle: "Algorithm Benchmarking & Time-Series Architectures",
    period: "2025 — Present",
    oneSentence: "Engineered physical regression pipelines for solar radiation forecasting using GBDT models with strict TimeSeriesSplit validation.",
    fullDetails: "Benchmarked LightGBM, XGBoost, and CatBoost models with forward-chaining cross-validation to prevent temporal data leakage. Engineered astronomical and atmospheric features (solar zenith angles, pressure differentials) achieving R² = 0.941 and sub-45ms inference.",
    tags: ["LightGBM", "CatBoost", "Scikit-Learn", "Streamlit", "TimeSeriesSplit"]
  },
  {
    id: "bi-analytics",
    icon: LineChart,
    title: "Business Intelligence & Interactive Dashboards",
    subtitle: "E-Commerce & Hospitality Decision Systems",
    period: "2024 — Present",
    oneSentence: "Built scalable data aggregation pipelines translating complex transactional records into real-time KPI dashboards and cohort retention heatmaps.",
    fullDetails: "Constructed star-schema dimensional tables from raw order databases. Implemented monthly cohort retention matrices from Month 0 to Month 12, uncovering customer churn inflection points. Developed hotel cancellation risk models achieving AUC = 0.89.",
    tags: ["Python", "SQL", "Pandas", "Plotly", "Cohort Analysis", "Risk Modeling"]
  },
  {
    id: "ai-profiling",
    icon: Sparkles,
    title: "AI Solutions & Automated Data Exploration",
    subtitle: "LLM Orchestration & Natural Language Processing",
    period: "2024 — Present",
    oneSentence: "Developed DataVision AI, combining deterministic Python profiling with LLM narrative summaries to eliminate numerical hallucinations.",
    fullDetails: "Architected a dual-stage pipeline where mathematical distributions, skew, and missingness are calculated in Pandas before passing token-optimized JSON schemas to LLM endpoints. Implemented CatBoost NLP models for multi-class customer review sentiment.",
    tags: ["LLM Integration", "Automated EDA", "NLP", "CatBoost", "TF-IDF"]
  },
  {
    id: "academic-degree",
    icon: GraduationCap,
    title: "B.Sc. in Agricultural & Biosystems Engineering",
    subtitle: "Al-Azhar University",
    period: "2023 — 2027 (Expected)",
    oneSentence: "Rigorous engineering coursework covering physical dynamics, solar radiation physics, thermodynamics, and differential calculus.",
    fullDetails: "Academic curriculum focused on energy transfer thermodynamics, fluid dynamics, numerical methods, and mathematical optimization. Provides the quantitative foundation for domain-informed machine learning modeling.",
    tags: ["Solar Energy Systems", "Thermodynamics", "Applied Statistics", "Calculus"]
  }
];

export default function Experience() {
  // Store set of expanded milestone IDs (default first one open)
  const [expandedIds, setExpandedIds] = useState(new Set(["ml-systems"]));

  const toggleMilestone = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-2.5">
            <Milestone size={12} />
            <span>Interactive Timeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Academic Foundation &amp; <span className="text-cyan-400">Milestones</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-xl">
            Click any milestone below to expand the engineering details and technical context.
          </p>
        </div>

        {/* Clean Vertical Timeline */}
        <div className="relative border-l border-white/[0.1] ml-3 sm:ml-5 space-y-5 sm:space-y-6">
          {milestones.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedIds.has(item.id);

            return (
              <div key={item.id} className="relative pl-6 sm:pl-8">
                {/* Interactive Node Marker */}
                <button
                  onClick={() => toggleMilestone(item.id)}
                  className={`absolute -left-[14px] top-3 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isExpanded 
                      ? "bg-cyan-500 text-slate-950 ring-4 ring-cyan-500/20" 
                      : "bg-slate-950 border border-white/[0.2] text-slate-400 hover:border-cyan-400 hover:text-cyan-400"
                  }`}
                  aria-label={`Toggle details for ${item.title}`}
                >
                  <Icon size={14} />
                </button>

                {/* Milestone Card */}
                <div
                  onClick={() => toggleMilestone(item.id)}
                  className={`cursor-pointer bg-slate-900/40 border rounded-2xl p-4 sm:p-5 transition-all duration-200 ${
                    isExpanded 
                      ? "border-cyan-500/30 bg-slate-900/60 shadow-lg shadow-cyan-500/5" 
                      : "border-white/[0.06] hover:border-white/[0.15]"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                      <span>{item.title}</span>
                    </h3>
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="text-[11px] font-mono font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-md">
                        {item.period}
                      </span>
                      <div className="text-slate-400 hover:text-cyan-400 transition-colors p-1">
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-cyan-400/90 mb-2">
                    {item.subtitle}
                  </p>

                  {/* One-Sentence Summary Always Visible */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.oneSentence}
                  </p>

                  {/* Expandable Technical Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden pt-3 mt-3 border-t border-white/[0.06]"
                      >
                        <p className="text-xs text-slate-200 leading-relaxed mb-3">
                          {item.fullDetails}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono font-medium text-slate-300 bg-slate-950/80 border border-white/[0.06] px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
