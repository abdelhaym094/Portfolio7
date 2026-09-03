"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, LineChart, Sparkles } from "lucide-react";

const milestones = [
  {
    type: "engineering",
    icon: <Code2 size={15} className="text-yellow-400" />,
    title: "Applied Machine Learning & Predictive Modeling",
    role: "Project Architecture & Algorithm Benchmarking",
    period: "2025 — Present",
    desc: "Engineered robust regression pipelines for solar radiation forecasting using physical telemetry. Evaluated LightGBM, XGBoost, and CatBoost models with TimeSeriesSplit cross-validation, and deployed production-ready Streamlit Cloud applications.",
    skills: ["LightGBM", "CatBoost", "Scikit-Learn", "Feature Engineering", "Streamlit Cloud"]
  },
  {
    type: "analytics",
    icon: <LineChart size={15} className="text-yellow-400" />,
    title: "Business Intelligence & Interactive Decision Systems",
    role: "Full-Stack Analytical Dashboards",
    period: "2024 — Present",
    desc: "Built scalable data aggregation pipelines translating complex transactional and hospitality datasets into real-time KPI dashboards, customer retention cohorts, and cancellation risk indicators.",
    skills: ["Python", "SQL", "Pandas", "Plotly", "Cohort Retention", "EDA"]
  },
  {
    type: "ai",
    icon: <Sparkles size={15} className="text-yellow-400" />,
    title: "AI Solutions & Automated Data Exploration",
    role: "LLM Orchestration & Natural Language Processing",
    period: "2024 — Present",
    desc: "Developed DataVision AI, combining automated statistical data profiling with LLM summaries to generate executive takeaways from raw tabular datasets. Implemented CatBoost NLP models for product sentiment classification.",
    skills: ["LLM Integration", "Automated Profiling", "NLP", "TF-IDF", "CatBoost"]
  },
  {
    type: "education",
    icon: <GraduationCap size={15} className="text-yellow-400" />,
    title: "B.Sc. in Agricultural & Biosystems Engineering",
    role: "Al-Azhar University",
    period: "2023 — 2027 (Expected)",
    desc: "Rigorous academic curriculum covering physical systems dynamics, solar radiation physics, thermodynamics, differential equations, and statistical modeling.",
    skills: ["Solar Energy Systems", "Thermodynamics", "Applied Mathematics", "Statistical Inference"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Trajectory
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Academic Foundation & <span className="text-yellow-400">Engineering Milestones</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
            A progression combining rigorous quantitative university coursework with independent, real-world machine learning implementations.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/[0.12] ml-3 sm:ml-6 space-y-7 md:space-y-9">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              className="relative pl-6 sm:pl-9 group"
            >
              {/* Node Marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-zinc-950 border border-white/[0.15] flex items-center justify-center group-hover:border-yellow-400 transition-colors">
                {item.icon}
              </div>

              {/* Card Container */}
              <div className="bg-zinc-900/40 border border-white/[0.06] hover:border-white/[0.15] rounded-2xl p-5 sm:p-6 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-mono font-medium text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-0.5 rounded-md self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-300 mb-3 flex items-center gap-1.5">
                  <span>{item.role}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-medium text-slate-300 bg-zinc-800/80 border border-white/[0.06] px-2.5 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
