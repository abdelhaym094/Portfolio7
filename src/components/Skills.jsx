"use client";

import { motion } from "framer-motion";
import { FaBrain, FaDatabase, FaChartLine, FaServer } from "react-icons/fa";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: <FaBrain className="text-yellow-400" />,
    description: "Predictive modeling, hyperparameter tuning & regression systems",
    skills: ["LightGBM", "XGBoost", "CatBoost", "Scikit-Learn", "Ensemble Methods", "NLP & Sentiment Analysis"],
    level: "Advanced"
  },
  {
    title: "Data Analysis & Wrangling",
    icon: <FaDatabase className="text-yellow-400" />,
    description: "ETL pipelines, feature engineering & exploratory data analysis",
    skills: ["Python", "Pandas", "NumPy", "SQL (PostgreSQL / MySQL)", "Feature Engineering", "Data Cleaning"],
    level: "Advanced"
  },
  {
    title: "Interactive BI & Visualization",
    icon: <FaChartLine className="text-yellow-400" />,
    description: "Executive reporting, real-time dashboards & decision intelligence",
    skills: ["Streamlit", "Plotly", "Matplotlib", "Seaborn", "KPI Dashboards", "Statistical Analysis"],
    level: "Proficient"
  },
  {
    title: "Engineering & Deployment",
    icon: <FaServer className="text-yellow-400" />,
    description: "Version control, reproducibility & production application serving",
    skills: ["Git & GitHub", "REST APIs / FastAPI", "Docker Basics", "Jupyter / Colab", "Model Validation", "Streamlit Cloud"],
    level: "Proficient"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Core Competencies
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Technical <span className="text-yellow-400">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2">
            Rigorous mathematical foundations coupled with modern ML frameworks to turn messy data into reliable production intelligence.
          </p>
        </div>

        {/* 2x2 Grid of specialized domain cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-zinc-900/60 backdrop-blur-md border border-white/10 hover:border-yellow-400/30 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:bg-zinc-900/80 group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-0.5 rounded-md self-start">
                    {category.level}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-white/5">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-xs font-medium text-slate-200 bg-zinc-800/80 hover:bg-zinc-800 border border-white/10 hover:border-yellow-400/30 px-3 py-1 rounded-lg transition-colors"
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
