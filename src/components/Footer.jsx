"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-white/5 py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-2xl font-black tracking-tight">
            Mohamed <span className="text-yellow-400">Abdelhay</span>
          </h3>
          <p className="text-slate-400 mt-1.5 text-sm sm:text-base">
            Data Scientist | AI & Machine Learning Enthusiast
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex gap-4">
          {[
            { icon: <FaGithub />, url: "https://github.com/abdelhaym953-create" },
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" },
            { icon: <FaEnvelope />, url: "mailto:abdelhaym953@gmail.com" },
          ].map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-lg text-slate-400 hover:text-yellow-400 hover:border-yellow-400/40 transition-colors duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

      </div>

      {/* Bottom Rights */}
      <div className="max-w-6xl mx-auto text-center mt-10 pt-6 border-t border-white/5 text-slate-500 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© 2026 Mohamed Abdelhay. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with <FaHeart className="text-red-500 animate-pulse text-xs" /> using Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}