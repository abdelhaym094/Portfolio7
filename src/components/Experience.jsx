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
  ArrowRight
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const milestones = [
  {
    id: "ml-systems",
    icon: Code2,
    period: "2025 — Present",
    title: "Applied Machine Learning & Predictive Modeling",
    oneSentence: "Engineered solar radiation regression pipelines using GBDT models with strict TimeSeriesSplit validation.",
    fullDetails: "Benchmarked LightGBM, XGBoost, and CatBoost models with forward-chaining cross-validation to prevent temporal data leakage. Engineered astronomical and atmospheric features (solar zenith angles, pressure differentials) achieving R² = 0.941 and sub-45ms single-sample inference latency.",
    tags: ["LightGBM", "CatBoost", "Scikit-Learn", "Streamlit", "TimeSeriesSplit"]
  },
  {
    id: "bi-analytics",
    icon: LineChart,
    period: "2024 — Present",
    title: "Business Intelligence & Interactive Dashboards",
    oneSentence: "Built scalable data aggregation pipelines translating complex transactional records into real-time KPI dashboards and cohort retention heatmaps.",
    fullDetails: "Constructed star-schema dimensional tables from raw order databases. Implemented monthly cohort retention matrices from Month 0 to Month 12, uncovering customer churn inflection points. Developed hotel cancellation risk models achieving AUC = 0.89.",
    tags: ["Python", "SQL", "Pandas", "Plotly", "Cohort Analysis", "Risk Modeling"]
  },
  {
    id: "ai-profiling",
    icon: Sparkles,
    period: "2024 — Present",
    title: "AI Solutions & Automated Data Exploration",
    oneSentence: "Developed DataVision AI, combining deterministic Python profiling with LLM narrative summaries to eliminate numerical hallucinations.",
    fullDetails: "Architected a dual-stage pipeline where mathematical distributions, skew, and missingness are calculated in Pandas before passing token-optimized JSON schemas to LLM endpoints. Implemented CatBoost NLP models for multi-class customer review sentiment.",
    tags: ["LLM Integration", "Automated EDA", "NLP", "CatBoost", "TF-IDF"]
  },
  {
    id: "academic-degree",
    icon: GraduationCap,
    period: "2023 — 2027 (Expected)",
    title: "B.Sc. in Agricultural & Biosystems Engineering",
    oneSentence: "Academic engineering coursework at Al-Azhar University covering physical dynamics, solar radiation physics, thermodynamics, and calculus.",
    fullDetails: "Rigorous quantitative curriculum focused on energy transfer thermodynamics, fluid mechanics, numerical methods, and mathematical optimization. Provides the quantitative foundation for domain-informed machine learning modeling.",
    tags: ["Solar Energy Systems", "Thermodynamics", "Applied Statistics", "Calculus"]
  }
];

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState(new Set());

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
    <section id="experience" className="py-14 sm:py-18 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          number="03"
          eyebrow="JOURNEY"
          title="Academic & Professional"
          titleHighlight="Journey"
          description="Engineering foundations, applied machine learning, and continuous development."
          className="mb-4 sm:mb-6"
        />

        {/* Compact Vertical Timeline */}
        <div className="relative border-l border-white/[0.08] ml-3 sm:ml-4 space-y-4">
          {milestones.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedIds.has(item.id);

            return (
              <div key={item.id} className="relative pl-6 sm:pl-7">
                {/* Node Marker */}
                <button
                  onClick={() => toggleMilestone(item.id)}
                  className={`absolute -left-[13px] top-3.5 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isExpanded 
                      ? "bg-cyan-500 text-slate-950 ring-4 ring-cyan-500/20" 
                      : "bg-slate-950 border border-white/[0.15] text-slate-400 hover:border-cyan-400 hover:text-cyan-400"
                  }`}
                  aria-label={`Toggle details for ${item.title}`}
                >
                  <Icon size={12} />
                </button>

                {/* Compact Milestone Container */}
                <div
                  className={`bg-slate-900/40 border rounded-2xl p-4 sm:p-5 transition-all duration-200 ${
                    isExpanded 
                      ? "border-cyan-500/30 bg-slate-900/60 shadow-lg shadow-cyan-500/5" 
                      : "border-white/[0.07] hover:border-white/[0.14]"
                  }`}
                >
                  {/* Header: Period & Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-mono font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-md self-start sm:self-auto">
                      {item.period}
                    </span>
                  </div>

                  {/* One-Sentence Summary */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {item.oneSentence}
                  </p>

                  {/* Clickable Expand Trigger */}
                  <button
                    onClick={() => toggleMilestone(item.id)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>{isExpanded ? "Collapse" : "Expand →"}</span>
                    {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                  </button>

                  {/* Expandable Technical Deep Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
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
