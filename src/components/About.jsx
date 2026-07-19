"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBrain, FaChartLine } from "react-icons/fa";

// نقل البيانات خارج الـ Component لتحسين الأداء ونظافة الكود
const aboutCards = [
  {
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    text: "Building predictive models and engineering intelligent solutions using modern ML architectures.",
  },
  {
    icon: <FaChartLine />,
    title: "Data Science & Analytics",
    text: "Transforming complex datasets into actionable insights through interactive visualization and storytelling.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Engineering Background",
    text: "Agricultural Engineering student specialized in Solar Energy and smart, automated systems.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 bg-zinc-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title & Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            About <span className="text-yellow-400">Me</span>
          </h2>
          
          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-normal px-2">
            I am <span className="text-yellow-400 font-medium">Mohamed Abdelhay</span>, a Data Scientist and Engineer passionate about 
            bridging the gap between raw data and intelligent execution. My background enables me to apply 
            analytical thinking and AI to solve complex, real-world problems.
          </p>
        </motion.div>

        {/* Features / Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14 md:mt-20">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 40px -15px rgba(250, 204, 21, 0.12)"
              }}
              className="group bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-yellow-400/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* تأثير إضاءة خلفي خفيف يظهر عند الحوم بالماوس */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                {/* Icon */}
                <div className="text-yellow-400 text-3xl sm:text-4xl mb-5 transform group-hover:scale-105 transition-transform duration-300 relative z-10 w-fit">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-yellow-400 transition-colors duration-300 relative z-10 break-words">
                  {card.title}
                </h3>

                {/* Text */}
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors duration-300">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}