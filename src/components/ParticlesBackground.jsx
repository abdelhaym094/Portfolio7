"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      // تحديث مكان الإضاءة مع حركة الماوس بدقة
      glowRef.current.style.setProperty("--mouse-x", `${clientX}px`);
      glowRef.current.style.setProperty("--mouse-y", `${clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none select-none bg-zinc-950 overflow-hidden">
      
      {/* 1. تأثير تدرج لوني خفيف وثابت في الزوايا لمنع السواد الحاد */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900/50 to-zinc-950" />

      {/* 2. شبكة المربعات التقنية (Tech Grid) - ظاهرة ومضمونة */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* 3. إضاءة الماوس التفاعلية باللون الذهبي - تتحرك في الشاشات الكبيرة */}
      <div
        ref={glowRef}
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(250, 204, 21, 0.12), transparent 80%)`,
        }}
      />

      {/* 4. إضاءة خافتة دائرية في المنتصف تعمل على الموبايل والكمبيوتر كجمالية إضافية */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.02),transparent_70%)] pointer-events-none" />
      
    </div>
  );
}