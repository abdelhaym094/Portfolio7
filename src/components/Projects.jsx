"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ترتيب المشاريع: يبدأ بـ Solar Radiation Prediction ثم المشاريع التي تحتوي على Live App ثم الباقي
const projects = [
  {
    id: "solar-rad",
    category: "Machine Learning",
    title: "Solar Radiation Prediction",
    desc: "Machine learning regression model predicting solar radiation using weather conditions and engineered features.",
    fullDetails: "This project presents an advanced Machine Learning pipeline designed to forecast solar radiation. It features extensive feature engineering on meteorological data (temperature, humidity, pressure, wind speed) and compares various ensemble models (LightGBM, XGBoost, CatBoost) to achieve optimal prediction accuracy.",
    tags: ["LightGBM", "XGBoost", "CatBoost", "Regression"],
    live: "https://solar-energy-predictor.streamlit.app", // استبدل برابط Streamlit الفعلي
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "datavision-ai",
    category: "Artificial Intelligence",
    title: "DataVision AI",
    desc: "AI-powered analytics assistant that automatically generates insights and helps users understand datasets.",
    fullDetails: "DataVision AI leverages LLMs and automated data analysis techniques to translate raw tabular datasets into natural language summaries, automated plots, and actionable business intelligence recommendations.",
    tags: ["Python", "AI", "Data Analysis", "Streamlit"],
    live: "https://datavision-ai-x6nywmkxc6a2fahl8c3j6z.streamlit.app", // استبدل برابط Streamlit الفعلي
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "online-sales",
    category: "Business Intelligence",
    title: "Online Sales Dashboard",
    desc: "Interactive dashboard analyzing sales performance, customer behavior, revenue trends and business KPIs.",
    fullDetails: "A comprehensive executive dashboard tracking revenue metrics, average order value, conversion funnels, and customer retention metrics using Streamlit and Plotly graphics.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    live: "https://online-sales-dashboard-lrpcanpcvdxc67cq4gfmjj.streamlit.app", // استبدل برابط Streamlit الفعلي
    github: "https://github.com/abdelhaym953-create/Online-Sales-Dashboard"
  },
  {
    id: "hotel-booking",
    category: "Data Analytics",
    title: "Hotel Booking Intelligence Dashboard",
    desc: "Business intelligence dashboard exploring booking behavior, cancellations, customer segments and revenue patterns.",
    fullDetails: "Analyzes hotel reservation datasets (LuxeStay Executive Intelligence) to identify cancellation risks, lead times, ADR (Average Daily Rate), and market segment performance.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    live: "https://hotel-booking-intelligence-dashboard-dwejjdgwbew2dbawcyhw5x.streamlit.app", // استبدل برابط Streamlit الفعلي
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "sales-intel",
    category: "Data Analytics",
    title: "Sales Intelligence Platform",
    desc: "End-to-end analytics platform that transforms raw sales data into business insights using data processing, visualization and intelligent analysis.",
    fullDetails: "Complete ETL pipeline and analysis framework processing multi-source sales transaction data to evaluate regional revenue performance and customer churn metrics.",
    tags: ["Python", "Pandas", "SQL", "Plotly", "ML"],
    live: null,
    github: "https://github.com/abdelhaym953-create"
  },
  {
    id: "mobile-sentiment",
    category: "NLP / Machine Learning",
    title: "Mobile Sentiment Analysis",
    desc: "NLP classification system that analyzes mobile reviews and predicts customer sentiment using machine learning models.",
    fullDetails: "Natural Language Processing system using text preprocessing, TF-IDF vectorization, and gradient boosted trees (CatBoost) to classify customer sentiment across thousands of mobile phone reviews.",
    tags: ["Python", "NLP", "CatBoost", "Scikit-learn"],
    live: null,
    github: "https://github.com/abdelhaym953-create"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [streamlitNoticeUrl, setStreamlitNoticeUrl] = useState(null);

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
    <section id="projects" className="py-12 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-base mt-2 max-w-xl">
              A showcase of intelligent applications, data engines, and interactive business solutions.
            </p>
          </div>
          <div className="md:hidden text-yellow-400/80 text-[11px] font-medium flex items-center gap-1 mt-3">
            <span>👈 Swipe horizontally to view all</span>
          </div>
        </div>

        {/* Projects Cards Container */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="snap-center shrink-0 w-[82vw] sm:w-[320px] md:w-auto bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-yellow-400/30 rounded-2xl p-5 flex flex-col justify-between hover:bg-zinc-900/80 transition-all duration-300"
            >
              <div>
                <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-md inline-block mb-3">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
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
                      className="flex-1 bg-yellow-400 text-zinc-950 font-bold text-xs py-2 rounded-lg text-center hover:bg-yellow-300 transition-colors shadow-sm"
                    >
                      Live App 🚀
                    </button>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`border border-white/10 hover:border-yellow-400/40 text-slate-300 hover:text-white font-medium text-xs py-2 rounded-lg text-center transition-colors ${project.live ? "px-3" : "w-full"}`}
                  >
                    GitHub
                  </a>
                </div>

                {/* Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-zinc-800/80 hover:bg-zinc-800 border border-white/5 text-slate-300 hover:text-yellow-400 font-semibold text-xs py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1"
                >
                  🔍 Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ==================== 1. MODAL: DETAILS POPUP ==================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-6 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>

              <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-md inline-block mb-3">
                {selectedProject.category}
              </span>

              <h3 className="text-xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
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

              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
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
                    className="px-4 py-2 bg-yellow-400 text-zinc-950 rounded-xl text-xs font-bold hover:bg-yellow-300"
                  >
                    Launch App 🚀
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================== 2. MODAL: STREAMLIT SLEEP NOTICE ==================== */}
      <AnimatePresence>
        {streamlitNoticeUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-zinc-900 border border-yellow-400/30 rounded-2xl p-6 max-w-md w-full relative shadow-2xl text-center"
            >
              <div className="text-4xl mb-2">💤 Zzzz</div>
              
              <h4 className="text-lg font-bold text-white mb-2">
                This app has gone to sleep due to inactivity.
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Since this app is hosted on a free Streamlit server, it takes around 30 to 60 seconds to wake back up. Please click the button below to launch and wake it up!
              </p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={confirmOpenLiveApp}
                  className="w-full bg-yellow-400 text-zinc-950 font-bold text-sm py-3 rounded-xl hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/10"
                >
                  Yes, get this app back up! 🚀
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