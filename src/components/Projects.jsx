"use client";

import { motion } from "framer-motion";

const projects = [
  {
    category: "Data Analytics",
    title: "Sales Intelligence Platform",
    desc: "End-to-end analytics platform that transforms raw sales data into business insights using data processing, visualization and intelligent analysis.",
    tags: ["Python", "Pandas", "SQL", "Plotly", "ML"],
    live: null,
    github: "https://github.com/abdelhaym953-create"
  },
  {
    category: "NLP / Machine Learning",
    title: "Mobile Sentiment Analysis",
    desc: "NLP classification system that analyzes mobile reviews and predicts customer sentiment using machine learning models.",
    tags: ["Python", "NLP", "CatBoost", "Scikit-learn"],
    live: null,
    github: "https://github.com/abdelhaym953-create"
  },
  {
    category: "Artificial Intelligence",
    title: "DataVision AI",
    desc: "AI-powered analytics assistant that automatically generates insights and helps users understand datasets.",
    tags: ["Python", "AI", "Data Analysis", "Streamlit"],
    live: "#",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    category: "Machine Learning",
    title: "Solar Radiation Prediction",
    desc: "Machine learning regression model predicting solar radiation using weather conditions and engineered features.",
    tags: ["LightGBM", "XGBoost", "CatBoost", "Regression"],
    live: "#",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    category: "Business Intelligence",
    title: "Online Sales Dashboard",
    desc: "Interactive dashboard analyzing sales performance, customer behavior, revenue trends and business KPIs.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    live: "#",
    github: "https://github.com/abdelhaym953-create/Online-Sales-Dashboard"
  },
  {
    category: "Data Analytics",
    title: "Hotel Booking Intelligence",
    desc: "Business intelligence dashboard exploring booking behavior, cancellations, customer segments and revenue patterns.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    live: "#",
    github: "https://github.com/abdelhaym953-create"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Featured <span className="text-yellow-400">Projects</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-base mt-2 max-w-xl">
              A showcase of intelligent applications, data engines, and interactive business solutions.
            </p>
          </div>
          {/* لمحة توضيحية للموبايل للسحب أفقياً */}
          <div className="md:hidden text-yellow-400/80 text-[11px] font-medium flex items-center gap-1 mt-3">
            <span>👈 Swipe to explore projects</span>
          </div>
        </div>

        {/* 
          تنسيق الكروت: 
          على الموبايل (Scroll أفقي يميناً ويساراً زي تطبيقات الموبايل)
          على الكمبيوتر (Grid من 3 أعمدة عادي)
        */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="snap-center shrink-0 w-[82vw] sm:w-[320px] md:w-auto bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-yellow-400/30 rounded-2xl p-5 flex flex-col justify-between hover:bg-zinc-900/80 transition-all duration-300"
            >
              <div>
                {/* Category Badge */}
                <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-md inline-block mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tags */}
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

              {/* Action Links */}
              <div className="flex items-center gap-2 pt-3 border-t border-white/5 mt-auto">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-yellow-400 text-zinc-950 font-bold text-xs py-2 rounded-lg text-center hover:bg-yellow-300 transition-colors"
                  >
                    Live App 🚀
                  </a>
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}