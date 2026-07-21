"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaDatabase,
  FaBrain,
  FaCode
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaGraduationCap />,
    title: "Agricultural Engineering (Al-Azhar University)",
    date: "2023 - 2027",
    description: "Specializing in Solar Energy and smart automated systems."
  },
  {
    icon: <FaDatabase />,
    title: "Data Science & Analytics",
    date: "2025 - Present",
    description: "Mastering Python, SQL, and extracting insights from real-world datasets."
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    date: "2025 - Present",
    description: "Building predictive models (Scikit-learn, XGBoost, LightGBM) to solve practical challenges."
  },
  {
    icon: <FaCode />,
    title: "Real-World Applications",
    date: "Present",
    description: "Delivering end-to-end data pipelines and AI-powered dashboards."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 bg-transparent text-white relative border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            My <span className="text-yellow-400">Journey</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg px-2">
            Key milestones shaping my engineering background and AI expertise.
          </p>
        </motion.div>

        {/* Experience Timeline List */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -2 }}
              className="group bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-yellow-400/30 transition-all duration-300 relative"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

              {/* Icon Container */}
              <div className="text-yellow-400 text-2xl sm:text-3xl shrink-0 transform group-hover:scale-105 transition-transform duration-300 w-fit">
                {item.icon}
              </div>

              {/* Content Container */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-yellow-400 transition-colors duration-300 break-words">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-full w-fit whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                
                <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}