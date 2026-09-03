"use client";

import { motion } from "framer-motion";

/**
 * Reusable editorial SectionHeader component.
 * Provides a unified, professional hierarchy:
 *   [Number] / [Eyebrow] ──•
 *   [Main Heading]
 *   [Short Supporting Description]
 *
 * Engineered with compact vertical rhythm specifically for mobile viewports
 * while maintaining editorial elegance on desktop screens.
 */
export default function SectionHeader({
  number = "01",
  eyebrow = "SECTION",
  title,
  titleHighlight,
  description,
  children,
  align = "left",
  className = "mb-5 sm:mb-7",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            duration: 0.45,
            ease: "easeOut",
          },
        },
      }}
      className={`relative ${isCenter ? "text-center mx-auto" : "text-left"} ${className}`}
    >
      {/* 1. Compact Eyebrow + Monospace Number + Technical Accent Line */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -4 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
          },
        }}
        className={`flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        {/* Monospace Numeric Indicator */}
        <span className="font-mono text-[11px] sm:text-xs font-bold text-cyan-400 tracking-wider">
          {number}
        </span>

        {/* Minimal Slash Separator */}
        <span className="text-white/20 text-xs font-mono select-none">/</span>

        {/* Compact Eyebrow Label */}
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
          {eyebrow}
        </span>

        {/* Subtle Horizontal Accent Line with End Data-Point */}
        <div className="flex items-center gap-1 pl-1">
          <motion.div
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: 28,
                opacity: 1,
                transition: { duration: 0.4, ease: "easeOut" },
              },
            }}
            className="h-px bg-gradient-to-r from-cyan-400/60 to-cyan-400/10"
          />
          <div className="w-1 h-1 rounded-full bg-cyan-400/60 shrink-0" />
        </div>
      </motion.div>

      {/* 2. Main Controlled Heading */}
      <div className={`flex flex-col ${isCenter ? "items-center" : "items-start"}`}>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 6 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: "easeOut" },
            },
          }}
          className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight"
        >
          {title}{" "}
          {titleHighlight && (
            <span className="text-cyan-400">{titleHighlight}</span>
          )}
        </motion.h2>

        {/* 3. Short Supporting Description (Under ~65 chars on mobile) */}
        {description && (
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.35, ease: "easeOut" },
              },
            }}
            className={`text-xs sm:text-sm text-slate-400 leading-relaxed mt-1 sm:mt-1.5 ${
              isCenter ? "max-w-md mx-auto" : "max-w-xl"
            }`}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* 4. Optional Extra Child Slot (e.g. Filters or quick links) */}
      {children && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 4 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, ease: "easeOut" },
            },
          }}
          className="mt-3.5 sm:mt-4"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
