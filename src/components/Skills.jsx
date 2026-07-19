"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaBrain,
  FaRobot,
  FaCode
} from "react-icons/fa";

const skills = [
  { name: "Python", icon: <FaPython />, level: "Advanced", percentage: "90%" },
  { name: "Machine Learning", icon: <FaBrain />, level: "Advanced", percentage: "88%" },
  { name: "Data Analysis", icon: <FaChartBar />, level: "Advanced", percentage: "92%" },
  { name: "SQL", icon: <FaDatabase />, level: "Intermediate", percentage: "75%" },
  { name: "Artificial Intelligence", icon: <FaRobot />, level: "Intermediate", percentage: "70%" },
  { name: "Software Development", icon: <FaCode />, level: "Intermediate", percentage: "75%" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 bg-zinc-950 text-white relative">
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
            Technical <span className="text-yellow-400">Skills</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Empowering data engines and intelligent architectures with a robust core tech stack.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-8 text-center hover:border-yellow-400/30 transition-colors duration-300 group"
            >
              {/* Icon */}
              <div className="text-yellow-400 text-4xl sm:text-5xl flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-bold tracking-tight text-slate-100">
                {skill.name}
              </h3>

              {/* Skill Level Badge */}
              <p className="mt-1.5 text-xs sm:text-sm font-semibold tracking-wide text-yellow-400/80 uppercase">
                {skill.level}
              </p>

              {/* Animated Progress Bar */}
              <div className="mt-6 h-2 bg-zinc-800 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.percentage }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-yellow-400 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.4)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}