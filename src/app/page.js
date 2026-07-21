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
    <main className="min-h-screen text-white overflow-hidden relative bg-transparent selection:bg-yellow-400 selection:text-black">
      
      {/* Ambient Glow / المؤثرات الضوئية الهادئة في الخلفية */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-10 left-0 w-72 h-72 bg-yellow-400/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-zinc-800/20 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* ==================== HERO SECTION ==================== */}
        <section className="min-h-screen flex items-center px-4 sm:px-6 pt-28 pb-16">
          <div className="max-w-6xl mx-auto w-full flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
            
            {/* TEXT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex bg-yellow-400/10 border border-yellow-400/20 px-4 py-1.5 rounded-full text-yellow-400 text-xs sm:text-sm font-medium mb-5 tracking-wide select-none backdrop-blur-md">
                🚀 Data Science & AI Enthusiast
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none">
                Mohamed <span className="text-yellow-400">Abdelhay</span>
              </h1>

              {/* Typing Subtitle */}
              <h2 className="text-xl sm:text-2xl md:text-3xl mt-5 font-bold text-slate-200">
                <TypingText />
              </h2>

              {/* Bio Paragraph */}
              <p className="mt-6 text-slate-400 leading-relaxed text-base sm:text-lg max-w-xl">
                I build intelligent solutions using Machine Learning, Artificial Intelligence and Data Analytics. 
                I transform raw data into meaningful insights through predictive models and interactive dashboards.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a 
                  href="#projects" 
                  className="bg-yellow-400 text-zinc-950 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-yellow-400/10 text-sm sm:text-base"
                >
                  Projects
                </a>
                
                <a 
                  href="https://github.com/abdelhaym953-create" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border border-white/10 text-slate-300 hover:text-yellow-400 hover:border-yellow-400/30 bg-zinc-900/40 backdrop-blur-md px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  GitHub
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border border-white/10 text-slate-300 hover:text-yellow-400 hover:border-yellow-400/30 bg-zinc-900/40 backdrop-blur-md px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  LinkedIn
                </a>
              </div>

              {/* Stats Counters Grid */}
              <div className="grid grid-cols-3 gap-4 mt-12 border-t border-white/10 pt-8">
                <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center hover:border-yellow-400/20 transition-colors">
                  <h3 className="text-2xl sm:text-3xl font-black text-yellow-400">6+</h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Projects</p>
                </div>
                <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center hover:border-yellow-400/20 transition-colors">
                  <h3 className="text-2xl sm:text-3xl font-black text-yellow-400">10+</h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Models</p>
                </div>
                <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center hover:border-yellow-400/20 transition-colors flex flex-col justify-center items-center">
                  <h3 className="text-sm sm:text-base font-black text-yellow-400 uppercase tracking-widest">Python</h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">Core Stack</p>
                </div>
              </div>
            </motion.div>

            {/* IMAGE COLUMN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex justify-center order-first md:order-last w-full"
            >
              <motion.div 
                className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px] aspect-square"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* الهالة المضيئة الخلفية */}
                <div className="absolute inset-0 bg-yellow-400 blur-[60px] opacity-20 rounded-full pointer-events-none" />
                
                {/* الصورة الشخصية */}
                <img
                  src="/me.jpeg"
                  alt="Mohamed Abdelhay"
                  className="w-full h-full rounded-full object-cover border-4 border-zinc-900/80 shadow-2xl ring-4 ring-yellow-400/40 select-none pointer-events-none relative z-10"
                />
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ==================== PORTFOLIO SECTIONS ==================== */}
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