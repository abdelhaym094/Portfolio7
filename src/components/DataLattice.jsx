"use client";

export default function DataLattice() {
  return (
    <div 
      className="absolute -inset-3 sm:-inset-4 rounded-full pointer-events-none -z-10 select-none"
      aria-hidden="true"
    >
      {/* Soft ambient aura */}
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-500/15 via-transparent to-amber-400/10 blur-xl" />
      
      {/* Subtle dashed orbit ring */}
      <div 
        className="absolute inset-0 rounded-full border border-cyan-500/20 border-dashed"
        style={{
          animation: "spin 36s linear infinite"
        }}
      />

      {/* Tiny data points on the orbit */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
    </div>
  );
}
