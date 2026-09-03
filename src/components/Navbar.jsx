"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  FileText, 
  ArrowUpRight 
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to track active section accurately
  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#090d16]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/25 py-3" 
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <a 
          href="#"
          className="flex items-center gap-2.5 group rounded-lg p-1 focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Mohamed Abdelhay Portfolio Homepage"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-sky-600 text-zinc-950 font-black text-xs flex items-center justify-center tracking-tighter group-hover:scale-105 transition-transform duration-200 shadow-sm shadow-cyan-500/20">
            MA
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Mohamed <span className="text-cyan-400">Abdelhay</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse hidden sm:inline-block" />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-slate-900/50 border border-white/[0.06] backdrop-blur-md px-3 py-1.5 rounded-full shadow-inner"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`relative px-3.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive 
                    ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 shadow-sm" 
                    : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-sm shadow-cyan-500/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Open Resume Modal"
          >
            <FileText size={13} />
            <span>Resume</span>
          </button>

          <div className="h-4 w-px bg-white/10" />

          <a 
            href="https://github.com/abdelhaym953-create" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="text-slate-400 hover:text-white border border-white/[0.08] hover:border-cyan-500/40 p-2 rounded-xl transition-colors bg-slate-900/40 hover:bg-slate-900"
          >
            <FaGithub size={15} />
          </a>

          <a 
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="text-slate-400 hover:text-white border border-white/[0.08] hover:border-cyan-500/40 p-2 rounded-xl transition-colors bg-slate-900/40 hover:bg-slate-900"
          >
            <FaLinkedin size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-slate-200 hover:text-cyan-400 p-2.5 rounded-xl border border-white/[0.08] bg-slate-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#090d16]/95 backdrop-blur-2xl border-t border-white/[0.08] overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-1.5 px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-semibold py-2.5 px-3.5 rounded-xl transition-colors flex items-center justify-between min-h-[44px] ${
                    activeSection === link.href 
                      ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20" 
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-white/[0.08] flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className="w-full min-h-[44px] bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-sm shadow-cyan-500/20"
                >
                  <FileText size={14} />
                  <span>View Resume Summary</span>
                </button>

                <div className="flex gap-3 pt-2 justify-center text-slate-400">
                  <a 
                    href="https://github.com/abdelhaym953-create" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub Profile" 
                    className="p-2.5 rounded-xl border border-white/[0.08] hover:text-cyan-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn Profile" 
                    className="p-2.5 rounded-xl border border-white/[0.08] hover:text-cyan-400 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
