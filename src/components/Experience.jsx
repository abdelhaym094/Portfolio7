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
    title: "Agricultural Engineering Student",
    place: "Al-Azhar University",
    date: "2023 - 2027",
    description:
      "Studying Agricultural Engineering with specialization in Solar Energy, combining engineering concepts with modern technology."
  },
  {
    icon: <FaDatabase />,
    title: "Data Science Journey",
    place: "Python | SQL | Data Analysis",
    date: "2025 - Present",
    description:
      "Building strong foundations in data analysis, visualization, statistics, and extracting insights from real-world datasets."
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning & AI",
    place: "ML Engineer Path",
    date: "2025 - Present",
    description:
      "Developing predictive models using Scikit-learn, LightGBM, XGBoost, CatBoost and applying ML to practical problems."
  },
  {
    icon: <FaCode />,
    title: "Portfolio & Real Projects",
    place: "Data Applications",
    date: "Present",
    description:
      "Creating dashboards, AI tools, and intelligent systems that transform data into business solutions."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 bg-zinc-950 text-white relative border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            My <span className="text-yellow-400">Journey</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg px-2">
            A timeline of my academic background, technical evolution, and engineering milestone steps.
          </p>
        </motion.div>

        {/* Experience Timeline List */}
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -2 }}
              className="group bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 hover:border-yellow-400/30 transition-all duration-300 relative"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="text-yellow-400 text-3xl sm:text-4xl shrink-0 transform group-hover:scale-105 transition-transform duration-300 w-fit">
                {item.icon}
              </div>

              {/* Content Container */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-yellow-400 transition-colors duration-300 break-words">
                  {item.title}
                </h3>
                
                <p className="text-yellow-400 font-medium text-sm sm:text-base mt-1">
                  {item.place}
                </p>
                
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  {item.date}
                </p>
                
                <p className="text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
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