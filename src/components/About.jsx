"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title & Unified Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-8">
            About <span className="text-yellow-400">Me</span>
          </h2>
          
          {/* الفقرة المدمجة والمركزة المباشرة */}
          <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 p-6 sm:p-10 rounded-2xl shadow-xl hover:border-yellow-400/30 transition-all duration-300">
            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal text-start md:text-center">
              I am a Data Scientist and Engineer passionate about bridging the gap between raw data and practical execution. As an Agricultural Engineering student specializing in Solar Energy, I leverage analytical thinking and modern AI architectures to build smart systems, predictive models, and interactive dashboards.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}