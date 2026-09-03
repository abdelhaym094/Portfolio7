"use client";

import { motion } from "framer-motion";
import { FaSun, FaBrain, FaChartBar } from "react-icons/fa";

export default function About() {
  const pillars = [
    {
      icon: <FaSun className="text-yellow-400" />,
      title: "Renewable Energy & IoT",
      desc: "Applying physics-informed modeling to solar radiation, environmental telemetry, and smart agricultural systems."
    },
    {
      icon: <FaBrain className="text-yellow-400" />,
      title: "Pragmatic Machine Learning",
      desc: "Focusing on battle-tested gradient boosting algorithms (LightGBM, CatBoost) with measurable R² and AUC benchmarks."
    },
    {
      icon: <FaChartBar className="text-yellow-400" />,
      title: "Decision Intelligence",
      desc: "Transforming messy relational schemas into intuitive, interactive executive dashboards using Streamlit and Plotly."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title & Core Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Background & Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
            About <span className="text-yellow-400">Me</span>
          </h2>
          
          <div className="bg-zinc-900/60 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:border-yellow-400/30 transition-all duration-300">
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal text-left sm:text-center">
              I am a Data Scientist and Engineer passionate about bridging the gap between raw data and practical execution. Combining an Agricultural Engineering foundation in Solar Energy with modern machine learning architectures, I specialize in building predictive models, automated ETL workflows, and interactive analytical products that drive measurable impact.
            </p>
          </div>
        </motion.div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-zinc-900/40 border border-white/5 hover:border-yellow-400/25 rounded-xl p-5 flex flex-col items-start transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-base mb-3">
                {pillar.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
