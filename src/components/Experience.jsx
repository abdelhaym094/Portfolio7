"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    title: "Applied Machine Learning & Predictive Systems",
    org: "Independent Project Delivery & Benchmarking",
    period: "2025 - Present",
    desc: "Architected end-to-end regression and classification pipelines. Implemented solar irradiance forecasting models achieving R² = 0.94 using LightGBM and CatBoost, and deployed interactive web interfaces with Streamlit Cloud.",
    skills: ["LightGBM", "CatBoost", "Hyperparameter Tuning", "Cross-Validation", "Streamlit"]
  },
  {
    title: "Business Intelligence & Executive Analytics",
    org: "Data Systems & Pipeline Engineering",
    period: "2024 - Present",
    desc: "Engineered scalable data transformation pipelines and interactive visual dashboards. Translated complex multi-channel transaction databases into actionable retention, margin, and cohort intelligence.",
    skills: ["Python", "SQL", "Pandas", "Plotly", "ETL Pipelines", "EDA"]
  },
  {
    title: "AI Solutions & NLP Engineering",
    org: "Applied LLM & Sentiment Analysis Research",
    period: "2024 - Present",
    desc: "Developed automated data profiling tools using generative AI (DataVision AI) and text classification architectures for high-volume customer sentiment prediction.",
    skills: ["NLP", "TF-IDF", "LLM Integration", "Automated Profiling", "Scikit-Learn"]
  },
  {
    title: "B.Sc. in Agricultural & Biosystems Engineering",
    org: "Al-Azhar University",
    period: "2023 - 2027 (Expected)",
    desc: "Rigorous quantitative coursework in engineering mathematics, solar photovoltaic mechanics, physical systems modeling, and statistical analysis.",
    skills: ["Solar Systems", "Thermodynamics", "Applied Statistics", "System Simulation"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Milestones
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Professional <span className="text-yellow-400">Journey</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2">
            The trajectory of engineering discipline, mathematical foundations, and real-world ML delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-yellow-400/25 ml-3 sm:ml-6 space-y-6 md:space-y-8">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-yellow-400 group-hover:bg-yellow-400 transition-all shadow-md shadow-yellow-400/40" />

              {/* Card */}
              <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-yellow-400/30 transition-all duration-300 hover:bg-zinc-900/80 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-0.5 rounded-md w-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-2 font-medium">{item.org}</p>
                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-3">
                  {item.desc}
                </p>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {item.skills.map((s, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-[10px] font-medium text-slate-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md"
                    >
                      {s}
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
