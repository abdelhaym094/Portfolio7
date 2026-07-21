"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import TypingText from "@/components/TypingText";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden relative bg-transparent selection:bg-yellow-400 selection:text-black">
      
      {/* إضاءات هادئة - مخفية على شاشات الموبايل الصغيرة لمنع التقطيع */}
      <div className="absolute inset-0 pointer-events-none select-none hidden md:block">
        <div className="absolute top-10 left-0 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-zinc-800/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* ==================== HERO SECTION ==================== */}
        <section className="min-h-[90vh] md:min-h-screen flex items-center px-4 sm:px-6 pt-24 md:pt-28 pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* 1. الصورة الشخصية (بتظهر الأول في الموبايل عشان تدي شكل هيرو ممتاز) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center w-full md:order-last"
            >
              <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-[340px] md:h-[340px]">
                <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full pointer-events-none" />
                <img
                  src="/me.jpeg"
                  alt="Mohamed Abdelhay"
                  className="w-full h-full rounded-full object-cover border-2 md:border-4 border-zinc-800 shadow-xl ring-2 md:ring-4 ring-yellow-400/30 select-none relative z-10"
                />
              </div>
            </motion.div>

            {/* 2. النصوص والأزرار */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              {/* Badge */}
              <div className="inline-flex bg-yellow-400/10 border border-yellow-400/20 px-3.5 py-1 rounded-full text-yellow-400 text-xs sm:text-sm font-medium mb-4 select-none">
                🚀 Data Science & AI Enthusiast
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                Mohamed <span className="text-yellow-400">Abdelhay</span>
              </h1>

              {/* Typing Subtitle */}
              <h2 className="text-lg sm:text-2xl md:text-3xl mt-3 font-bold text-slate-200 min-h-[40px]">
                <TypingText />
              </h2>

              {/* Bio Paragraph */}
              <p className="mt-4 text-slate-400 leading-relaxed text-sm sm:text-base max-w-lg">
                I build intelligent solutions using Machine Learning, Artificial Intelligence and Data Analytics. 
                I transform raw data into meaningful insights through predictive models and interactive dashboards.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2.5 sm:gap-3 mt-6 w-full sm:w-auto">
                <a 
                  href="#projects" 
                  className="flex-1 sm:flex-none bg-yellow-400 text-zinc-950 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all text-xs sm:text-base text-center shadow-md shadow-yellow-400/10"
                >
                  Projects
                </a>
                
                <a 
                  href="https://github.com/abdelhaym953-create" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 sm:flex-none border border-white/10 text-slate-300 hover:text-yellow-400 hover:border-yellow-400/30 bg-zinc-900/60 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold transition-all text-xs sm:text-base text-center"
                >
                  GitHub
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 sm:flex-none border border-white/10 text-slate-300 hover:text-yellow-400 hover:border-yellow-400/30 bg-zinc-900/60 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold transition-all text-xs sm:text-base text-center"
                >
                  LinkedIn
                </a>
              </div>

              {/* Stats Counters Grid */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mt-8 pt-6 border-t border-white/10 w-full">
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-3 text-center">
                  <h3 className="text-xl sm:text-3xl font-black text-yellow-400">6+</h3>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-400 mt-0.5 uppercase tracking-wider">Projects</p>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-3 text-center">
                  <h3 className="text-xl sm:text-3xl font-black text-yellow-400">10+</h3>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-400 mt-0.5 uppercase tracking-wider">Models</p>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-3 text-center flex flex-col justify-center items-center">
                  <h3 className="text-xs sm:text-base font-black text-yellow-400 uppercase tracking-widest">Python</h3>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-400 mt-0.5 uppercase tracking-wider">Core Stack</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* باقي السكاشن */}
        <About />
        <Experience />
        <Achievements />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}