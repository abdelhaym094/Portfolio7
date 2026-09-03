"use client";

import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  Database, 
  Sparkles, 
  BarChart3, 
  Server, 
  TerminalSquare 
} from "lucide-react";

const skillCategories = [
  {
    id: "ml",
    title: "Machine Learning & Predictive Systems",
    icon: <BrainCircuit size={18} className="text-yellow-400" />,
    summary: "Supervised tabular regression & classification using gradient-boosted decision trees.",
    capabilities: "Hyperparameter tuning, cross-validation to prevent temporal leakage, feature importance analysis, and residual diagnostics.",
    technologies: ["LightGBM", "CatBoost", "XGBoost", "Scikit-Learn", "Cross-Validation", "Bayesian Search", "Residual Analysis"]
  },
  {
    id: "data",
    title: "Data Analysis & Transformation",
    icon: <Database size={18} className="text-yellow-400" />,
    summary: "End-to-end data manipulation, feature engineering, and statistical profiling.",
    capabilities: "Handling high-cardinality features, temporal deltas, atmospheric telemetry normalizations, and multi-table SQL joins.",
    technologies: ["Python", "Pandas", "NumPy", "SQL (PostgreSQL)", "Feature Engineering", "Data Cleaning", "EDA"]
  },
  {
    id: "ai",
    title: "AI & Applied LLM Systems",
    icon: <Sparkles size={18} className="text-yellow-400" />,
    summary: "Augmenting analytical pipelines with large language models and NLP classification.",
    capabilities: "Automated tabular data profiling, plain-English schema insights, text preprocessing, and TF-IDF sentiment scoring.",
    technologies: ["LLM Integration", "Automated EDA", "NLP Preprocessing", "TF-IDF Vectorization", "Sentiment Mining"]
  },
  {
    id: "bi",
    title: "Visualization & Business Intelligence",
    icon: <BarChart3 size={18} className="text-yellow-400" />,
    summary: "Executive KPI interfaces, dynamic scenario testing, and interactive reporting.",
    capabilities: "Constructing responsive Plotly charts, cohort retention heatmaps, average daily rate (ADR) trends, and parameter sliders.",
    technologies: ["Streamlit", "Plotly", "Matplotlib", "Seaborn", "Executive KPI Dashboards", "Cohort Retention"]
  },
  {
    id: "backend",
    title: "Backend & Data Integration",
    icon: <Server size={18} className="text-yellow-400" />,
    summary: "Data validation pipelines and structured API communication.",
    capabilities: "Designing relational schemas, structured JSON payloads, and clean functional Python modules for data transformation.",
    technologies: ["FastAPI Basics", "RESTful Endpoints", "Schema Validation", "JSON Data Modeling", "SQL Aggregation"]
  },
  {
    id: "eng",
    title: "Deployment & Engineering Tooling",
    icon: <TerminalSquare size={18} className="text-yellow-400" />,
    summary: "Reproducible research, version control, and production hosting.",
    capabilities: "Managing Git workflows, containerized Streamlit Cloud deployments, environment isolation, and serialized model artifacts.",
    technologies: ["Git & GitHub", "Streamlit Cloud", "Linux / Bash", "JupyterLab", "Model Artifacts (Joblib)", "Virtualenvs"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Technical Capability Matrix
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Specialized Skills & <span className="text-yellow-400">Engineering Competencies</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl">
            Organized by functional domains and real-world execution rather than arbitrary percentage scores.
          </p>
        </div>

        {/* 6 Capability Domain Cards (3x2 Grid on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-zinc-900/40 border border-white/[0.06] hover:border-yellow-400/30 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-colors group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Summary & Practical Capability */}
                <p className="text-xs text-slate-300 font-medium leading-relaxed mb-2">
                  {category.summary}
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                  {category.capabilities}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="pt-3 border-t border-white/[0.05]">
                <div className="flex flex-wrap gap-1.5">
                  {category.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-medium text-slate-300 bg-zinc-800/80 border border-white/[0.06] px-2 py-0.5 rounded-md hover:border-yellow-400/30 hover:text-white transition-colors"
                    >
                      {tech}
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
