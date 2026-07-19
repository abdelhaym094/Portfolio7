"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none select-none overflow-hidden">
      {/* طبقة التدرج اللوني المتحرك ببطء في الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-950 via-yellow-950/10 animate-gradient-glow" />
      
      {/* شبكة جزيئات الطاقة المضيئة */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          background: {
            color: "transparent",
          },
          particles: {
            number: {
              value: 60, // كثافة متزنة وممتازة للأداء
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#facc15",
            },
            links: {
              enable: true,
              distance: 150,
              color: "#facc15",
              opacity: 0.18, // توهج خفيف وغير مزعج للعين أثناء القراءة
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2, // حركة هادئة وانسيابية
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            size: {
              value: { min: 1, max: 3.5 },
            },
            opacity: {
              value: { min: 0.2, max: 0.5 },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab", // تأثير جذب الجزيئات عند مرور الماوس
              },
            },
            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.5,
                },
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}