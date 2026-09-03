"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaBookOpen, FaTimes, FaRocket } from "react-icons/fa";

const projects = [
  {
    id: "solar-rad",
    slug: "solar-radiation-prediction",
    category: "Machine Learning",
    title: "Solar Radiation Prediction",
    metric: "R² = 0.94 | LightGBM",
    desc: "Machine learning regression model predicting solar radiation using weather conditions, atmospheric pressure, and engineered temporal features.",
    fullDetails: "An advanced Machine Learning pipeline designed to forecast solar radiation for photovoltaic systems. Features extensive feature engineering on meteorological data (temperature, humidity, pressure, solar zenith angle) and benchmarks LightGBM, XGBoost, and CatBoost to achieve optimal production accuracy.",
    tags: ["LightGBM", "XGBoost", "CatBoost", "Regression", "Feature Eng"],
    live: "https://solar-energy-predictor.streamlit.app",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "datavision-ai",
    slug: "datavision-ai",
    category: "Artificial Intelligence",
    title: "DataVision AI",
    metric: "LLM + Automated EDA",
    desc: "AI-powered analytics assistant that automatically understands complex datasets, generates visual summaries, and produces natural language insights.",
    fullDetails: "DataVision AI integrates LLMs and automated data profiling algorithms to turn raw CSV/tabular files into executive summaries, automated anomaly detection, and interactive Plotly charts with zero manual code.",
    tags: ["Python", "GenAI / LLMs", "Data Profiling", "Streamlit"],
    live: "https://datavision-ai-x6nywmkxc6a2fahl8c3j6z.streamlit.app",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "online-sales",
    slug: "online-sales-dashboard",
    category: "Business Intelligence",
    title: "Online Sales Intelligence Dashboard",
    metric: "Real-Time KPIs & Funnels",
    desc: "Interactive business intelligence dashboard analyzing multi-channel revenue trends, customer lifetime value, and cohort retention.",
    fullDetails: "A comprehensive executive dashboard tracking gross margins, conversion funnels, regional sales distributions, and customer retention metrics using modular Python pipelines and Plotly visual engines.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit", "KPI Analytics"],
    live: "https://online-sales-dashboard-lrpcanpcvdxc67cq4gfmjj.streamlit.app",
    github: "https://github.com/abdelhaym953-create/Online-Sales-Dashboard"
  },
  {
    id: "hotel-booking",
    slug: "hotel-booking-dashboard",
    category: "Data Analytics",
    title: "Hotel Booking Intelligence Dashboard",
    metric: "ADR & Cancellation Modeling",
    desc: "Business intelligence application exploring reservation dynamics, cancellation probabilities, lead times, and ADR patterns.",
    fullDetails: "Analyzes international hospitality reservation datasets to identify early cancellation indicators, customer segmentation patterns, average daily rates (ADR), and revenue optimization opportunities.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit", "EDA"],
    live: "https://hotel-booking-intelligence-dashboard-dwejjdgwbew2dbawcyhw5x.streamlit.app",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "sales-intel",
    slug: "sales-intelligence-platform",
    category: "Data Analytics",
    title: "Sales Intelligence Platform",
    metric: "SQL ETL + ML Insights",
    desc: "End-to-end data platform transforming raw transactional records into actionable corporate intelligence using predictive clustering.",
    fullDetails: "A complete data extraction, cleaning, and transformation pipeline connected to machine learning clustering to detect high-value customers and anticipate sales deceleration.",
    tags: ["Python", "Pandas", "SQL", "Plotly", "ML"],
    live: null,
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "mobile-sentiment",
    slug: "mobile-sentiment-analysis",
    category: "Machine Learning",
    title: "Mobile Sentiment Analysis Engine",
    metric: "F1: 0.91 | NLP CatBoost",
    desc: "NLP text classification system analyzing customer product reviews and classifying nuanced sentiment across thousands of consumer opinions.",
    fullDetails: "Text processing pipeline leveraging n-gram tokenization, TF-IDF vector representations, and gradient boosted trees to categorize customer sentiment into multi-class polarity scores with high precision.",
    tags: ["Python", "NLP", "CatBoost", "Scikit-Learn", "Text Mining"],
    live: null,
    github: "https://github.com/abdelhaym953-create"
  }
];

const categories = ["All", "Machine Learning", "Artificial Intelligence", "Data Analytics", "Business Intelligence"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [streamlitNoticeUrl, setStreamlitNoticeUrl] = useState(null);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleLiveAppClick = (e, url) => {
    e.preventDefault();
    setStreamlitNoticeUrl(url);
  };

  const confirmOpenLiveApp = () => {
    if (streamlitNoticeUrl) {
      window.open(streamlitNoticeUrl, "_blank", "noopener,noreferrer");
      setStreamlitNoticeUrl(null);
    }
  };

  return (
    <section id="projects" className="py-14 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
              Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-base mt-2 max-w-xl">
              Engineered machine learning systems, statistical forecasting pipelines, and production dashboards.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  activeFilter === cat
                    ? "bg-yellow-400 text-zinc-950 shadow-md shadow-yellow-400/10"
                    : "bg-zinc-900/60 text-slate-300 border border-white/5 hover:border-yellow-400/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-yellow-400/40 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:bg-zinc-900/80 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Badges row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-0.5 rounded-md">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                    {project.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-slate-300/80 text-xs leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-medium text-slate-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 pt-3 border-t border-white/5 mt-auto">
                <div className="flex items-center gap-2">
                  {project.live && (
                    <button
                      onClick={(e) => handleLiveAppClick(e, project.live)}
                      className="flex-1 bg-yellow-400 text-zinc-950 font-bold text-xs py-2 rounded-lg text-center hover:bg-yellow-300 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <FaRocket size={11} />
                      <span>Live App</span>
                    </button>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`GitHub repo for ${project.title}`}
                    className={`border border-white/10 hover:border-yellow-400/40 text-slate-300 hover:text-white font-medium text-xs py-2 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 ${project.live ? "px-3" : "w-full"}`}
                  >
                    <FaGithub size={12} />
                    <span>Code</span>
                  </a>
                </div>

                {/* Case Study Link & Details Modal */}
                <div className="flex items-center gap-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 bg-zinc-800/80 hover:bg-zinc-800 border border-white/5 text-slate-200 hover:text-yellow-400 font-semibold text-xs py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <FaBookOpen size={11} />
                    <span>Case Study →</span>
                  </Link>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3 bg-transparent hover:bg-white/5 border border-white/5 text-slate-400 hover:text-white font-medium text-xs py-1.5 rounded-lg transition-colors"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ==================== 1. MODAL: DETAILS POPUP ==================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-6 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 text-base font-bold"
                aria-label="Close details"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-0.5 rounded-md inline-block">
                  {selectedProject.category}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                  {selectedProject.metric}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                {selectedProject.fullDetails}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-medium text-yellow-300 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <Link
                  href={`/projects/${selectedProject.slug}`}
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-bold text-yellow-400 hover:underline flex items-center gap-1"
                >
                  View Full Case Study Page →
                </Link>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 bg-zinc-800 text-slate-300 rounded-xl text-xs font-bold hover:bg-zinc-700"
                  >
                    Close
                  </button>
                  {selectedProject.live && (
                    <button
                      onClick={(e) => {
                        const url = selectedProject.live;
                        setSelectedProject(null);
                        handleLiveAppClick(e, url);
                      }}
                      className="px-4 py-2 bg-yellow-400 text-zinc-950 rounded-xl text-xs font-bold hover:bg-yellow-300 flex items-center gap-1.5"
                    >
                      <FaExternalLinkAlt size={10} />
                      Launch
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================== 2. MODAL: STREAMLIT SLEEP NOTICE ==================== */}
      <AnimatePresence>
        {streamlitNoticeUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-6 max-w-md w-full relative shadow-2xl text-center"
            >
              <div className="text-4xl mb-2">⚡</div>
              
              <h4 className="text-lg font-bold text-white mb-2">
                Launching Cloud Instance
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                This project is hosted on Streamlit Cloud free tier. If it was inactive, it may require ~30–45 seconds to spin up containers and initialize model weights.
              </p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={confirmOpenLiveApp}
                  className="w-full bg-yellow-400 text-zinc-950 font-bold text-sm py-3 rounded-xl hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/10 flex items-center justify-center gap-2"
                >
                  <FaRocket />
                  <span>Launch Live App</span>
                </button>

                <button
                  onClick={() => setStreamlitNoticeUrl(null)}
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
