"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
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
      className="fixed inset-0 -z-10 pointer-events-none select-none bg-zinc-950 overflow-hidden"
      aria-hidden="true"
    >
      {/* Precision Data Science Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Subtle Structural Vignette */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950" 
      />

      {/* Subtle Mouse Spotlight (Desktop only, minimal and non-distracting) */}
      <div
        ref={glowRef}
        className="hidden md:block absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(650px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(250, 204, 21, 0.045), transparent 75%)`,
        }}
      />
    </div>
  );
}
