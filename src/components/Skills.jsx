"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Data Analysis", level: "92%", status: "Advanced" },
  { name: "Python", level: "90%", status: "Advanced" },
  { name: "Machine Learning", level: "88%", status: "Advanced" },
  { name: "SQL", level: "75%", status: "Intermediate" },
  { name: "Software Dev", level: "75%", status: "Intermediate" },
  { name: "Artificial Intelligence", level: "70%", status: "Intermediate" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Technical <span className="text-yellow-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-2">
            Empowering data engines and intelligent architectures with a robust core tech stack.
          </p>
        </div>

        {/* 
          تنسيق المهارات: 
          الموبايل: 2 Columns مدمجين جداً بصورة كروت صغيرة أنيقة
          الكمبيوتر: 3 Columns
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-zinc-900/50 backdrop-blur-md border border-white/5 hover:border-yellow-400/30 rounded-xl p-3 sm:p-4 flex flex-col justify-between transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xs sm:text-base font-bold text-white truncate max-w-[80%]">
                  {skill.name}
                </h3>
                <span className="text-yellow-400 font-black text-xs sm:text-sm">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar خفيف ومدمج */}
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden my-1">
                <div 
                  className="h-full bg-yellow-400 rounded-full transition-all duration-1000"
                  style={{ width: skill.level }}
                />
              </div>

              <span className="text-[10px] sm:text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">
                {skill.status}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}