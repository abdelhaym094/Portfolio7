"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
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
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-zinc-950/70 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-4 flex justify-between items-center relative z-20">
        {/* Logo */}
        <motion.h1 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-xl sm:text-2xl font-black tracking-wide text-yellow-400 cursor-pointer select-none"
        >
          Mohamed.AI
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-yellow-400 transition-colors duration-200 relative group py-1"
            >
              {link.name}
              {/* خط متحرك تحت الرابط احترافي وبسيط باستخدام Tailwind */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Social */}
        <div className="hidden sm:flex gap-4 text-slate-300">
          <motion.a 
            whileHover={{ scale: 1.1, y: -1 }} 
            whileTap={{ scale: 0.95 }}
            href="https://github.com/abdelhaym953-create" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-yellow-400 transition-colors"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, y: -1 }} 
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-yellow-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </motion.a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-yellow-400 text-2xl focus:outline-none p-1 transition-transform active:scale-95"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
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
            className="md:hidden bg-zinc-950/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden w-full absolute top-full left-0 z-10"
          >
            <div className="flex flex-col gap-5 text-slate-300 font-medium px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-400 py-1 transition-colors border-b border-white/5 last:border-none"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Social links inside mobile menu */}
              <div className="flex gap-6 pt-4 text-slate-400 border-t border-white/5 justify-center">
                <a href="https://github.com/abdelhaym953-create" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-yellow-400 p-1">
                  <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-yellow-400 p-1">
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}