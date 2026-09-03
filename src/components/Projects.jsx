"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  BookOpen, 
  ExternalLink, 
  X, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  TrendingUp, 
  Layers, 
  Sparkles,
  Info
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const allProjects = [
  {
    id: "solar-radiation-prediction",
    slug: "solar-radiation-prediction",
    category: "Machine Learning",
    isFlagship: true,
    title: "Solar Radiation Prediction Engine",
    subtitle: "Physics-informed time-series regression for solar grid load anticipating",
    metricBadge: "R² = 0.941 | MAE = 34.2 W/m²",
    problem: "Solar photovoltaic generation fluctuates drastically with cloud cover and atmospheric drift, making grid integration and battery scheduling volatile.",
    approach: "Extracted solar geometry (zenith angle, solar elevation) and atmospheric telemetry (humidity, pressure, temperature deltas) into gradient boosted regressors (LightGBM, XGBoost, CatBoost).",
    result: "Achieved R² = 0.941 using LightGBM with low residual error, deployed as a real-time Streamlit app with scenario sliders.",
    whyItMatters: "Enables solar farm managers to anticipate generation curves in advance, reducing dependency on fossil-fuel spinning reserves.",
    technologies: ["Python", "LightGBM", "CatBoost", "XGBoost", "Scikit-Learn", "Streamlit", "Plotly"],
    live: "https://solar-energy-predictor.streamlit.app",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "datavision-ai",
    slug: "datavision-ai",
    category: "Artificial Intelligence",
    isFlagship: true,
    title: "DataVision AI — Automated Analytics Assistant",
    subtitle: "Autonomous statistical profiling and LLM-synthesized narrative insights",
    metricBadge: "Instant Ingestion + LLM Summaries",
    problem: "Business operators struggle to extract immediate answers from raw CSV/Excel dumps without waiting days for analyst teams to triage data.",
    approach: "Combined automatic schema inference and statistical profiling (skewness, cardinality, correlation heatmaps) with generative AI prompts to produce executive summaries and interactive Plotly visuals.",
    result: "Instant zero-code dataset diagnosis, anomaly detection, and automated charting deployed on Streamlit Cloud.",
    whyItMatters: "Bridges the gap between raw tabular files and business leadership, accelerating exploratory data analysis from hours to seconds.",
    technologies: ["Python", "GenAI / LLMs", "Data Profiling", "Pandas", "Plotly", "Streamlit"],
    live: "https://datavision-ai-x6nywmkxc6a2fahl8c3j6z.streamlit.app",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "online-sales-dashboard",
    slug: "online-sales-dashboard",
    category: "Business Intelligence",
    isFlagship: false,
    title: "Online Sales Intelligence Dashboard",
    subtitle: "Executive BI platform analyzing revenue velocity and cohort retention",
    metricBadge: "Multi-Channel Real-Time KPIs",
    problem: "Fragmented transactional e-commerce logs lacked unified visibility into customer lifetime value and month-over-month growth.",
    approach: "Constructed modular ETL transformations aggregating multi-channel transaction tables, computing retention matrices, AOV, and margin distributions.",
    result: "Interactive dark-mode dashboard allowing dynamic date-range slicing, regional revenue mapping, and cohort retention tracking.",
    whyItMatters: "Gives e-commerce executives immediate insight into repeat purchase behavior and product line profitability.",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit", "Cohort Analysis", "KPI Analytics"],
    live: "https://online-sales-dashboard-lrpcanpcvdxc67cq4gfmjj.streamlit.app",
    github: "https://github.com/abdelhaym953-create/Online-Sales-Dashboard"
  },
  {
    id: "hotel-booking-dashboard",
    slug: "hotel-booking-dashboard",
    category: "Data Analytics",
    isFlagship: false,
    title: "Hotel Booking Intelligence Dashboard",
    subtitle: "Hospitality risk modeling and cancellation probability analytics",
    metricBadge: "ADR & Cancellation AUC = 0.89",
    problem: "Unanticipated hotel cancellations cause revenue leakage, inaccurate staffing, and compromised occupancy forecasting.",
    approach: "Analyzed booking lead-time distributions, customer market segments, and deposit policies to identify key cancellation drivers and ADR variations.",
    result: "Interactive multi-page Streamlit application enabling scenario analysis across Resort and City Hotel operational structures.",
    whyItMatters: "Enables revenue managers to adjust deposit policies and overbooking strategies based on empirical risk patterns.",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit", "Risk Modeling", "EDA"],
    live: "https://hotel-booking-intelligence-dashboard-dwejjdgwbew2dbawcyhw5x.streamlit.app",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "mobile-sentiment-analysis",
    slug: "mobile-sentiment-analysis",
    category: "Machine Learning",
    isFlagship: false,
    title: "Mobile Sentiment Analysis Engine",
    subtitle: "NLP classification pipeline analyzing customer feedback polarity",
    metricBadge: "Macro F1 = 0.912 | CatBoost NLP",
    problem: "Auditing thousands of unstructured consumer reviews manually is impossible, delaying product defect recognition.",
    approach: "Built text preprocessing pipeline (lemmatization, stopword cleaning) with TF-IDF n-gram vectorization and CatBoost gradient boosted classification.",
    result: "Achieved balanced macro F1 score across multi-class sentiment classes with feature importance ranking polarized keywords.",
    whyItMatters: "Automates customer voice triage, flagging product defects and critical negative sentiment in real-time.",
    technologies: ["Python", "NLP", "CatBoost", "TF-IDF", "Scikit-Learn", "Text Mining"],
    live: null,
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "sales-intelligence-platform",
    slug: "sales-intelligence-platform",
    category: "Data Analytics",
    isFlagship: false,
    title: "Enterprise Sales Intelligence Platform",
    subtitle: "SQL data pipeline and unsupervised RFM customer clustering",
    metricBadge: "SQL ETL + RFM Clustering",
    problem: "Sales operations stored client records in disconnected SQL tables without quantifiable customer segmentation.",
    approach: "Designed SQL extraction routines with window functions, normalized RFM metrics via QuantileTransformer, and trained K-Means clusters.",
    result: "Segmented customer accounts into actionable cohorts (Champions, At-Risk, Inactive) with automated visual reporting.",
    whyItMatters: "Directs sales account teams toward high-value retaining accounts while preemptively alerting churn risks.",
    technologies: ["Python", "SQL (PostgreSQL)", "Pandas", "Scikit-Learn", "K-Means", "RFM Scoring"],
    live: null,
    github: "https://github.com/abdelhaym953-create"
  }
];

const categories = ["All", "Machine Learning", "Artificial Intelligence", "Business Intelligence", "Data Analytics"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [streamlitModalUrl, setStreamlitModalUrl] = useState(null);

  const filteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter);

  const handleLaunchLiveApp = (e, url) => {
    e.preventDefault();
    setStreamlitModalUrl(url);
  };

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div>
            <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
              Case Studies & Systems
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Featured <span className="text-yellow-400">Engineering Work</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
              Production machine learning pipelines, autonomous analytical systems, and interactive decision dashboards.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Project Category Filter">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                role="tab"
                aria-selected={activeFilter === cat}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  activeFilter === cat
                    ? "bg-yellow-400 text-zinc-950 shadow-sm"
                    : "bg-zinc-900/40 text-slate-300 border border-white/[0.06] hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ==================== 1. FLAGSHIP SPOTLIGHT CASE STUDIES ==================== */}
        <div className="space-y-6 mb-8">
          {filteredProjects.filter(p => p.isFlagship).map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-900/50 border border-white/[0.1] hover:border-yellow-400/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 group shadow-xl"
            >
              {/* Header Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/25 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <Sparkles size={11} />
                    Flagship Case Study
                  </span>
                  <span className="text-xs text-slate-400">
                    {project.category}
                  </span>
                </div>

                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-md">
                  {project.metricBadge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-yellow-400 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mb-6">
                {project.subtitle}
              </p>

              {/* Structured 4-Point Case Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-950/60 border border-white/[0.06] rounded-2xl p-5 mb-6">
                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                    Problem Solved
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
                    Methodology & Tech
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.approach}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Key Result
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.result}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Real-World Impact
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.whyItMatters}
                  </p>
                </div>
              </div>

              {/* Tech Badges & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium text-slate-300 bg-zinc-800/80 border border-white/[0.06] px-2.5 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  {project.live && (
                    <button
                      onClick={(e) => handleLaunchLiveApp(e, project.live)}
                      className="bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
                    >
                      <Rocket size={13} />
                      <span>Live App</span>
                    </button>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="border border-white/[0.12] hover:border-yellow-400/40 text-slate-200 hover:text-white bg-zinc-800/50 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <BookOpen size={13} className="text-yellow-400" />
                    <span>Case Study</span>
                    <ArrowRight size={12} />
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Source code for ${project.title}`}
                    className="border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white p-2.5 rounded-xl transition-colors bg-zinc-800/30"
                  >
                    <FaGithub size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ==================== 2. SPECIALIZED ENGINEERING CASE STUDIES (Grid) ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.filter(p => !p.isFlagship).map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="bg-zinc-900/40 border border-white/[0.08] hover:border-white/[0.2] rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-colors group"
            >
              <div>
                {/* Meta row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded-md">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                    {project.metricBadge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-4">
                  {project.subtitle}
                </p>

                {/* Scannable Case Problem & Solution */}
                <div className="bg-zinc-950/60 border border-white/[0.04] rounded-xl p-3.5 space-y-2 mb-4 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Problem:</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Impact:</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{project.result}</p>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium text-slate-300 bg-zinc-800/80 border border-white/[0.06] px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06] mt-auto">
                {project.live ? (
                  <button
                    onClick={(e) => handleLaunchLiveApp(e, project.live)}
                    className="flex-1 bg-yellow-400 text-zinc-950 font-bold text-xs py-2 rounded-xl hover:bg-yellow-300 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Rocket size={12} />
                    <span>Live App</span>
                  </button>
                ) : null}

                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 border border-white/[0.1] hover:border-yellow-400/40 text-slate-200 hover:text-white bg-zinc-800/50 text-xs font-semibold py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <BookOpen size={12} className="text-yellow-400" />
                  <span>Case Study</span>
                  <ArrowRight size={11} />
                </Link>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Source code for ${project.title}`}
                  className="border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white p-2 rounded-xl transition-colors bg-zinc-800/30"
                >
                  <FaGithub size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* ==================== STREAMLIT COLD-START MODAL ==================== */}
      <AnimatePresence>
        {streamlitModalUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 border border-white/[0.12] rounded-2xl p-6 max-w-md w-full relative shadow-2xl text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center text-yellow-400 mx-auto mb-3">
                <Zap size={22} />
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                Launching Streamlit Cloud Application
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                This app is deployed on the Streamlit Cloud free tier. If the container is currently asleep, it will take approximately <strong>30–45 seconds</strong> to spin up the runtime and load the machine learning weights.
              </p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    window.open(streamlitModalUrl, "_blank", "noopener,noreferrer");
                    setStreamlitModalUrl(null);
                  }}
                  className="w-full bg-yellow-400 text-zinc-950 font-bold text-xs py-3 rounded-xl hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Rocket size={14} />
                  <span>Continue to Live Application</span>
                </button>

                <button
                  onClick={() => setStreamlitModalUrl(null)}
                  className="w-full bg-transparent text-slate-400 hover:text-white font-medium text-xs py-2"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
