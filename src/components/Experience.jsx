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
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const milestones = [
  {
    id: "academic-degree",
    year: "2023",
    shortTitle: "Engineering",
    icon: GraduationCap,
    period: "2023 — 2027 (Expected)",
    title: "B.Sc. in Agricultural & Biosystems Engineering",
    oneSentence: "Academic engineering coursework at Al-Azhar University covering physical dynamics, solar radiation physics, thermodynamics, and calculus.",
    fullDetails: "Rigorous quantitative curriculum focused on energy transfer thermodynamics, fluid mechanics, numerical methods, and mathematical optimization. Provides the quantitative foundation for domain-informed machine learning modeling.",
    tags: ["Solar Energy Systems", "Thermodynamics", "Applied Statistics", "Calculus"]
  },
  {
    id: "bi-analytics",
    year: "2024",
    shortTitle: "BI Dashboards",
    icon: LineChart,
    period: "2024 — Present",
    title: "Business Intelligence & Interactive Dashboards",
    oneSentence: "Built scalable data aggregation pipelines translating complex transactional records into real-time KPI dashboards and cohort retention heatmaps.",
    fullDetails: "Constructed star-schema dimensional tables from raw order databases. Implemented monthly cohort retention matrices from Month 0 to Month 12, uncovering customer churn inflection points. Developed hotel cancellation risk models achieving AUC = 0.89.",
    tags: ["Python", "SQL", "Pandas", "Plotly", "Cohort Analysis", "Risk Modeling"]
  },
  {
    id: "ai-profiling",
    year: "2024",
    shortTitle: "AI & NLP",
    icon: Sparkles,
    period: "2024 — Present",
    title: "AI Solutions & Automated Data Exploration",
    oneSentence: "Developed DataVision AI, combining deterministic Python profiling with LLM narrative summaries to eliminate numerical hallucinations.",
    fullDetails: "Architected a dual-stage pipeline where mathematical distributions, skew, and missingness are calculated in Pandas before passing token-optimized JSON schemas to LLM endpoints. Implemented CatBoost NLP models for multi-class customer review sentiment.",
    tags: ["LLM Integration", "Automated EDA", "NLP", "CatBoost", "TF-IDF"]
  },
  {
    id: "ml-systems",
    year: "2025",
    shortTitle: "Applied ML",
    icon: Code2,
    period: "2025 — Present",
    title: "Applied Machine Learning & Predictive Modeling",
    oneSentence: "Engineered solar radiation regression pipelines using GBDT models with strict TimeSeriesSplit validation.",
    fullDetails: "Benchmarked LightGBM, XGBoost, and CatBoost models with forward-chaining cross-validation to prevent temporal data leakage. Engineered astronomical and atmospheric features (solar zenith angles, pressure differentials) achieving R² = 0.941 and sub-45ms single-sample inference latency.",
    tags: ["LightGBM", "CatBoost", "Scikit-Learn", "Streamlit", "TimeSeriesSplit"]
  }
];

export default function Experience() {
  const [activeId, setActiveId] = useState("ml-systems");
  const [showDetails, setShowDetails] = useState(false);

  const currentIndex = milestones.findIndex((m) => m.id === activeId);
  const activeMilestone = milestones[currentIndex] || milestones[milestones.length - 1];
  const IconComponent = activeMilestone.icon;

  const handleSelectMilestone = (id) => {
    setActiveId(id);
    setShowDetails(false);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleSelectMilestone(milestones[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < milestones.length - 1) {
      handleSelectMilestone(milestones[currentIndex + 1].id);
    }
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

        {/* Mobile Swipeable Milestone Selector (md:hidden) */}
        <div className="md:hidden mb-4 -mx-4 px-4 overflow-hidden">
          <div 
            className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none snap-x"
            style={{ WebkitOverflowScrolling: "touch" }}
            role="tablist"
            aria-label="Journey milestones"
          >
            {milestones.map((item) => {
              const isCurrent = activeId === item.id;
              const TabIcon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectMilestone(item.id)}
                  role="tab"
                  aria-selected={isCurrent}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[38px] snap-center ${
                    isCurrent
                      ? "bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/20"
                      : "bg-slate-900/60 border border-white/[0.08] text-slate-300 hover:text-white"
                  }`}
                >
                  <TabIcon size={13} className={isCurrent ? "text-slate-950" : "text-cyan-400"} />
                  <span>{item.year}</span>
                  <span className="opacity-50">•</span>
                  <span className="font-normal">{item.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Interactive Horizontal Timeline (hidden md:block) */}
        <div className="hidden md:block mb-6 bg-slate-900/40 border border-white/[0.08] rounded-2xl p-5 shadow-lg">
          <div className="relative">
            {/* Background connecting rail */}
            <div className="absolute top-5 left-10 right-10 h-[2px] bg-white/[0.08] -z-0" />
            
            {/* Active progress rail */}
            <div 
              className="absolute top-5 left-10 h-[2px] bg-cyan-500 transition-all duration-300 -z-0"
              style={{
                width: `${(currentIndex / (milestones.length - 1)) * 100 * 0.85}%`
              }}
            />

            {/* Stations */}
            <div className="relative z-10 flex justify-between items-start" role="tablist" aria-label="Journey timeline">
              {milestones.map((item, idx) => {
                const isCurrent = activeId === item.id;
                const isPassed = idx <= currentIndex;
                const NodeIcon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectMilestone(item.id)}
                    role="tab"
                    aria-selected={isCurrent}
                    className="flex flex-col items-center group text-center focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isCurrent
                          ? "bg-cyan-500 text-slate-950 ring-4 ring-cyan-500/25 shadow-lg shadow-cyan-500/30 scale-105"
                          : isPassed
                            ? "bg-slate-950 border-2 border-cyan-500/60 text-cyan-400 hover:border-cyan-400"
                            : "bg-slate-950 border border-white/[0.15] text-slate-400 hover:border-white/30 hover:text-slate-200"
                      }`}
                    >
                      <NodeIcon size={15} />
                    </div>

                    {/* Year */}
                    <span className={`text-xs font-mono font-bold mt-2.5 transition-colors ${
                      isCurrent ? "text-cyan-400" : "text-slate-400 group-hover:text-slate-200"
                    }`}>
                      {item.year}
                    </span>

                    {/* Short Title */}
                    <span className={`text-[11px] font-medium transition-colors max-w-[90px] leading-tight ${
                      isCurrent ? "text-white font-semibold" : "text-slate-400 group-hover:text-slate-300"
                    }`}>
                      {item.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Milestone Detail Display (Only ONE milestone visible at a time) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="bg-slate-900/40 border border-white/[0.08] rounded-2xl p-4 sm:p-6 shadow-xl"
          >
            {/* Top Control Bar: Period Badge & Step Arrows */}
            <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <IconComponent size={14} />
                </div>
                <span className="text-[11px] font-mono font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-md">
                  {activeMilestone.period}
                </span>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-slate-400 mr-1 hidden sm:inline">
                  {currentIndex + 1} / {milestones.length}
                </span>
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="p-1.5 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white disabled:opacity-25 disabled:pointer-events-none transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center active:bg-white/[0.05]"
                  aria-label="Previous milestone"
                  title="Previous milestone"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === milestones.length - 1}
                  className="p-1.5 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white disabled:opacity-25 disabled:pointer-events-none transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center active:bg-white/[0.05]"
                  aria-label="Next milestone"
                  title="Next milestone"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
              {activeMilestone.title}
            </h3>

            {/* Essential One-Sentence Summary */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {activeMilestone.oneSentence}
            </p>

            {/* Interactive Detail Reveal Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors py-1 focus:outline-none"
              >
                <span>{showDetails ? "Collapse Details" : "Read Details →"}</span>
                {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {/* Technical Details & Tags */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden pt-3 mt-3 border-t border-white/[0.06]"
                  >
                    <p className="text-xs text-slate-200 leading-relaxed mb-3">
                      {activeMilestone.fullDetails}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {activeMilestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono font-medium text-slate-300 bg-slate-950/80 border border-white/[0.06] px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
