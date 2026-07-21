"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-transparent text-white border-t border-white/10 py-10 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Brand Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            Mohamed <span className="text-yellow-400">Abdelhay</span>
          </h3>
          <p className="text-slate-400 mt-1 text-xs sm:text-sm">
            Data Scientist | AI & Machine Learning Enthusiast
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex gap-3">
          {[
            { icon: <FaGithub />, url: "https://github.com/abdelhaym953-create", label: "GitHub" },
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mohamed-abdelhay-3361a2308", label: "LinkedIn" },
            { icon: <FaEnvelope />, url: "mailto:abdelhaym953@gmail.com", label: "Email" },
          ].map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-zinc-900/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-base text-slate-300 hover:text-yellow-400 hover:border-yellow-400/30 transition-all duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

      </div>

      {/* Bottom Rights */}
      <div className="max-w-5xl mx-auto text-center mt-8 pt-6 border-t border-white/10 text-slate-400 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center gap-2 relative z-10">
        <p>© 2026 Mohamed Abdelhay. All Rights Reserved.</p>
      </div>
    </footer>
  );
}