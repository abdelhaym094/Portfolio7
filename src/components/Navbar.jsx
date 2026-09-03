"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

export default function Navbar({ onOpenResume }) {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.25, ease: "easeInOut" } 
    },
    open: { 
      opacity: 1, 
      height: "auto", 
      transition: { duration: 0.3, ease: "easeInOut" } 
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-zinc-950/80 border-b border-white/10 shadow-lg shadow-black/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center relative z-20">
        {/* Logo */}
        <a 
          href="#"
          className="flex items-center gap-2 group"
          aria-label="Mohamed Abdelhay Home"
        >
          <div className="w-8 h-8 rounded-lg bg-yellow-400 text-zinc-950 font-black text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
            MA
          </div>
          <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-yellow-400 transition-colors">
            Abdelhay<span className="text-yellow-400">.ai</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-yellow-400 transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3.5">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 bg-yellow-400/10 hover:bg-yellow-400 hover:text-zinc-950 text-yellow-400 border border-yellow-400/30 font-bold text-xs px-3.5 py-1.5 rounded-lg transition-all"
            aria-label="View Resume"
          >
            <FaFileAlt size={11} />
            <span>Resume</span>
          </button>

          <div className="h-4 w-px bg-white/15 mx-0.5" />

          <motion.a 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
            href="https://github.com/abdelhaym953-create" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="text-slate-300 hover:text-yellow-400 transition-colors p-1"
          >
            <FaGithub size={18} />
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="text-slate-300 hover:text-yellow-400 transition-colors p-1"
          >
            <FaLinkedin size={18} />
          </motion.a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-yellow-400 text-2xl focus:outline-none p-1.5 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close Menu" : "Open Menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-zinc-950/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden w-full absolute top-full left-0 z-10 shadow-2xl"
          >
            <div className="flex flex-col gap-3 text-slate-300 font-medium px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-400 py-1.5 transition-colors border-b border-white/5 last:border-none text-sm"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setOpen(false);
                  if (onOpenResume) onOpenResume();
                }}
                className="w-full mt-2 bg-yellow-400 text-zinc-950 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2"
              >
                <FaFileAlt size={12} />
                <span>View Resume</span>
              </button>
              
              {/* Social links inside mobile menu */}
              <div className="flex gap-6 pt-4 text-slate-400 border-t border-white/10 justify-center">
                <a 
                  href="https://github.com/abdelhaym953-create" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile" 
                  className="hover:text-yellow-400 p-2 text-slate-300"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile" 
                  className="hover:text-yellow-400 p-2 text-slate-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
