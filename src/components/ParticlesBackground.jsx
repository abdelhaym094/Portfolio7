"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.setProperty("--mouse-x", `${clientX}px`);
          glowRef.current.style.setProperty("--mouse-y", `${clientY}px`);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none select-none bg-[#090d16] overflow-hidden"
      aria-hidden="true"
    >
      {/* Precision Mathematical Engineering Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Subtle Cyan Top-Left Ambient Orb */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/[0.07] blur-3xl pointer-events-none" 
      />

      {/* Subtle Amber Bottom-Right Ambient Orb */}
      <div 
        className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-amber-500/[0.05] blur-3xl pointer-events-none" 
      />

      {/* Subtle Vignette for clean contrast */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090d16]/70 to-[#090d16]" 
      />

      {/* Interactive Subtle Spotlight (Desktop only) */}
      <div
        ref={glowRef}
        className="hidden md:block absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(14, 165, 233, 0.05), transparent 70%)`,
        }}
      />
    </div>
  );
}
