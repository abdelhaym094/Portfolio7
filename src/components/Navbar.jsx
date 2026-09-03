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
  { name: "About", href: "#about" },
  { name: "Journey", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
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
          ? "bg-zinc-950/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/25 py-3" 
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Brand / Logo */}
        <a 
          href="#"
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-lg p-1"
          aria-label="Mohamed Abdelhay Portfolio Homepage"
        >
          <div className="w-8 h-8 rounded-lg bg-yellow-400 text-zinc-950 font-black text-xs flex items-center justify-center tracking-tighter group-hover:scale-105 transition-transform duration-200">
            MA
          </div>
          <span className="text-sm sm:text-base font-black tracking-tight text-white group-hover:text-yellow-400 transition-colors">
            Abdelhay<span className="text-yellow-400">.ai</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-zinc-900/40 border border-white/[0.06] backdrop-blur-md px-3 py-1.5 rounded-full"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`relative px-3.5 py-1 text-xs font-semibold rounded-full transition-colors ${
                  isActive 
                    ? "text-yellow-400 bg-white/[0.06]" 
                    : "text-slate-300 hover:text-white hover:bg-white/[0.03]"
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
            className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-sm active:scale-95 focus-visible:ring-2 focus-visible:ring-yellow-400"
            aria-label="Open Resume Modal"
          >
            <FileText size={13} />
            <span>Resume</span>
          </button>

          <div className="h-4 w-px bg-white/15" />

          <a 
            href="https://github.com/abdelhaym953-create" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/20 p-2 rounded-xl transition-colors bg-zinc-900/40"
          >
            <FaGithub size={15} />
          </a>

          <a 
            href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/20 p-2 rounded-xl transition-colors bg-zinc-900/40"
          >
            <FaLinkedin size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-slate-200 hover:text-yellow-400 p-2 rounded-xl border border-white/[0.08] bg-zinc-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
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
            className="md:hidden bg-zinc-950/95 backdrop-blur-2xl border-t border-white/[0.08] overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-semibold py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === link.href 
                      ? "text-yellow-400 bg-yellow-400/10" 
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
                  className="w-full bg-yellow-400 text-zinc-950 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-sm"
                >
                  <FileText size={14} />
                  <span>View Resume</span>
                </button>

                <div className="flex gap-3 pt-1 justify-center text-slate-400">
                  <a 
                    href="https://github.com/abdelhaym953-create" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub Profile" 
                    className="p-2.5 rounded-lg border border-white/[0.08] hover:text-yellow-400"
                  >
                    <FaGithub size={17} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mohamed-abdelhay-3361a2308" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn Profile" 
                    className="p-2.5 rounded-lg border border-white/[0.08] hover:text-yellow-400"
                  >
                    <FaLinkedin size={17} />
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
