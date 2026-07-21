import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground"; 

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
  display: "swap",
});

export const metadata = {
  title: "Mohamed Abdelhay | Data Scientist",
  description: "Data Scientist Portfolio - Machine Learning, AI and Data Analytics",
};

export const viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${inter.className} bg-zinc-950 text-white antialiased min-h-screen relative overflow-x-hidden`}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fluid-motion-1 {
            0% { transform: translate3d(0px, 0px, 0) scale(1); }
            50% { transform: translate3d(15vw, 10vh, 0) scale(1.1); }
            100% { transform: translate3d(-5vw, 15vh, 0) scale(0.95); }
          }
          @keyframes fluid-motion-2 {
            0% { transform: translate3d(0px, 0px, 0) scale(1); }
            50% { transform: translate3d(-15vw, -10vh, 0) scale(0.9); }
            100% { transform: translate3d(10vw, -5vh, 0) scale(1.05); }
          }
          .running-glow-1 { animation: fluid-motion-1 25s infinite alternate ease-in-out; will-change: transform; }
          .running-glow-2 { animation: fluid-motion-2 30s infinite alternate ease-in-out; will-change: transform; }
        `}} />

        {/* 1. المحتوى الرئيسي */}
        <main className="relative w-full min-h-screen z-10">
          {children}
        </main>

        {/* 2. الخلفية - خفيفة جداً على الموبايل وطبيعية على الكمبيوتر */}
        <div className="fixed inset-0 z-20 pointer-events-none mix-blend-screen overflow-hidden aria-hidden:true">
          
          {/* إظهار التوهج بخفة شديدة على الموبايل (opacity-30) وعادي على الشاشات الكبيرة (md:opacity-60) */}
          <div className="absolute inset-0 opacity-30 md:opacity-60">
            <div 
              className="absolute w-[80vw] md:w-[65vw] h-[80vw] md:h-[65vw] top-[-10%] left-[-20%] running-glow-1"
              style={{ background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0) 70%)" }}
            />
            <div 
              className="absolute w-[80vw] md:w-[75vw] h-[80vw] md:h-[75vw] bottom-[-10%] right-[-20%] running-glow-2"
              style={{ background: "radial-gradient(circle, rgba(63,63,70,0.35) 0%, rgba(63,63,70,0) 70%)" }}
            />
          </div>

          {/* شبكة المربعات */}
          <div 
            className="absolute inset-0 opacity-[0.03] md:opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "45px 45px",
            }}
          />

          <ParticlesBackground />
        </div>

      </body>
    </html>
  );
}