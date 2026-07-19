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
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 bg-zinc-950 text-white relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">

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
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            A timeline of my academic background, technical evolution, and engineering milestone steps.
          </p>
        </motion.div>

        {/* Experience Timeline List */}
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 hover:border-yellow-400/20 transition-colors duration-300"
            >
              {/* Icon Container */}
              <div className="text-yellow-400 text-3xl sm:text-4xl shrink-0">
                {item.icon}
              </div>

              {/* Content Container */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
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