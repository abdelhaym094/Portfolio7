"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Wrench, 
  Layers, 
  Compass, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Target size={18} className="text-yellow-400" />,
      title: "What I Specialize In",
      desc: "Supervised machine learning on tabular and time-series data. I focus on gradient-boosted decision trees (LightGBM, CatBoost, XGBoost), rigorous cross-validation to prevent leakage, and end-to-end regression pipelines."
    },
    {
      icon: <Wrench size={18} className="text-yellow-400" />,
      title: "Problems I Solve",
      desc: "Forecasting volatile physical phenomena (such as solar irradiance from atmospheric telemetry), automating complex exploratory data analysis with generative AI summaries, and calculating customer retention cohorts."
    },
    {
      icon: <Layers size={18} className="text-yellow-400" />,
      title: "Tools & Technologies",
      desc: "Python ecosystem (NumPy, Pandas, Scikit-Learn, LightGBM, CatBoost), relational databases with SQL, and real-time interactive analytical applications built with Streamlit and Plotly."
    },
    {
      icon: <Compass size={18} className="text-yellow-400" />,
      title: "Current Direction & Target Roles",
      desc: "Studying Agricultural & Biosystems Engineering with a focus on Solar Energy at Al-Azhar University. Actively seeking Data Scientist, Machine Learning Engineer, or Applied AI positions where analytical rigor creates measurable value."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full inline-block mb-3">
            Profile & Direction
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Engineering Rigor Meets <span className="text-yellow-400">Data Science</span>
          </h2>
        </div>

        {/* Lead Positioning Statement */}
        <div className="bg-zinc-900/40 border border-white/[0.08] p-6 sm:p-8 rounded-2xl mb-8">
          <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            I approach data science as an engineer: grounded in mathematical reality, domain mechanics, and computational efficiency. Bridging an academic foundation in Solar Energy Systems at Al-Azhar University with production machine learning, I turn raw, unorganized sensor data and business records into deterministic predictions and decision-ready dashboards.
          </p>
        </div>

        {/* 4 Focused Competency Quadrants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-zinc-900/40 border border-white/[0.06] hover:border-yellow-400/30 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
