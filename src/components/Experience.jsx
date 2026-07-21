"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    title: "Agricultural Engineering",
    org: "Al-Azhar University",
    period: "2023 - 2027",
    desc: "Specializing in Solar Energy and smart automated systems."
  },
  {
    title: "Data Science & Analytics",
    org: "Self-Driven & Projects",
    period: "2025 - Present",
    desc: "Mastering Python, SQL, and extracting insights from real-world datasets."
  },
  {
    title: "Machine Learning",
    org: "Advanced Modeling",
    period: "2025 - Present",
    desc: "Building predictive models (Scikit-learn, XGBoost, LightGBM) for practical challenges."
  },
  {
    title: "Real-World Applications",
    org: "AI & BI Dashboards",
    period: "Present",
    desc: "Delivering end-to-end data pipelines and AI-powered dashboards."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            My <span className="text-yellow-400">Journey</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2">
            Key milestones shaping my engineering background and AI expertise.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-yellow-400/20 ml-3 sm:ml-6 space-y-6 md:space-y-8">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* النقطة المضيئة على الخط */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-yellow-400 group-hover:bg-yellow-400 transition-colors shadow-sm shadow-yellow-400/50" />

              {/* الكارت المدمج */}
              <div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-xl p-4 hover:border-yellow-400/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h3 className="text-sm sm:text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded w-fit">
                    {item.period}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-1 font-medium">{item.org}</p>
                <p className="text-xs text-slate-400/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}