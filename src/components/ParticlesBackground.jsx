"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      glowRef.current.style.setProperty("--mouse-x", `${clientX}px`);
      glowRef.current.style.setProperty("--mouse-y", `${clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none select-none bg-zinc-950 overflow-hidden">
      
      {/* 
        ============================================================
        الألوان السائلة المتحركة (بدون فلاتر Blur أو ميكس بليند مسببة للمشاكل)
        التوهج مدمج داخل الـ Gradient نفسه لضمان الرندرة والحركة 100%
        ============================================================
      */}
      <div className="absolute inset-0 opacity-60">
        
        {/* كرة اللون الذهبي الدافئ - بتتحرك يمين وشمال وفوق وتحت */}
        <div 
          className="absolute w-[60vw] h-[60vw] top-[-10%] left-[-10%] animate-fluid-glow-1"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0) 70%)"
          }}
        />
        
        {/* كرة اللون الرمادي/الزيتي التقني - بتتحرك عكس الاتجاه */}
        <div 
          className="absolute w-[70vw] h-[70vw] bottom-[-20%] right-[-10%] animate-fluid-glow-2"
          style={{
            background: "radial-gradient(circle, rgba(63,63,70,0.4) 0%, rgba(63,63,70,0) 70%)"
          }}
        />

        {/* كرة ذهبية خافتة إضافية في المنتصف لضمان استمرار الحركة */}
        <div 
          className="absolute w-[50vw] h-[50vw] top-[20%] right-[10%] animate-fluid-glow-3"
          style={{
            background: "radial-gradient(circle, rgba(202,138,4,0.08) 0%, rgba(202,138,4,0) 70%)"
          }}
        />
      </div>

      {/* شبكة المربعات التقنية المتوافقة مع علوم البيانات */}
      <div 
        className="absolute inset-0 opacity-[0.03] md:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* كشاف الماوس التفاعلي اللي بيلحق إيدك فوراً */}
      <div
        ref={glowRef}
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(250, 204, 21, 0.1), transparent 80%)`,
        }}
      />

      {/* طبقة التنعيم السفلية لضمان سواد عميق ومريح للنصوص */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950 pointer-events-none" />
      
    </div>
  );
}