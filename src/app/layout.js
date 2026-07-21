import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground"; 

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
  display: "swap", // تحسين تحميل الخط لمنع Layout Shift
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
        className={`${inter.variable} ${inter.className} bg-zinc-950 text-white antialiased min-h-screen relative`}
      >
        
        {/* حاقن حركات الـ CSS النقية المتوافقة مع Tailwind والمتنقلة بحرية */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fluid-motion-1 {
            0% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(20vw, 15vh) scale(1.2); }
            100% { transform: translate(-10vw, 30vh) scale(0.9); }
          }
          @keyframes fluid-motion-2 {
            0% { transform: translate(0px, 0px) scale(1.1); }
            50% { transform: translate(-25vw, -20vh) scale(0.85); }
            100% { transform: translate(15vw, -10vh) scale(1.1); }
          }
          .running-glow-1 { animation: fluid-motion-1 22s infinite alternate ease-in-out; }
          .running-glow-2 { animation: fluid-motion-2 28s infinite alternate ease-in-out; }
          .running-glow-3 { animation: fluid-motion-1 18s infinite alternate-reverse ease-in-out; }
        `}} />

        {/* 1. المحتوى الرئيسي للموقع */}
        <main className="relative w-full min-h-screen z-10">
          {children}
        </main>

        {/* 
          2. طبقات الخلفية والتوهج التفاعلي (z-20) 
          تعمل فوق لون الخلفية الأساسي وتحت عناصر التفاعل العلوية إن وُجدت
        */}
        <div className="fixed inset-0 z-20 pointer-events-none mix-blend-screen overflow-hidden aria-hidden:true">
          
          {/* طبقة الألوان السائلة المتحركة ذاتياً */}
          <div className="absolute inset-0 opacity-60">
            {/* كرة التوهج الذهبي الدافئ الأولى */}
            <div 
              className="absolute w-[65vw] h-[65vw] top-[-10%] left-[-15%] running-glow-1"
              style={{ background: "radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0) 70%)" }}
            />
            
            {/* كرة التوهج الرمادي الزيتي التقني الثانية */}
            <div 
              className="absolute w-[75vw] h-[75vw] bottom-[-20%] right-[-15%] running-glow-2"
              style={{ background: "radial-gradient(circle, rgba(63,63,70,0.45) 0%, rgba(63,63,70,0) 70%)" }}
            />

            {/* كرة ذهبية خافتة في المنتصف */}
            <div 
              className="absolute w-[55vw] h-[55vw] top-[25%] right-[10%] running-glow-3"
              style={{ background: "radial-gradient(circle, rgba(202,138,4,0.1) 0%, rgba(202,138,4,0) 70%)" }}
            />
          </div>

          {/* شبكة المربعات التقنية (Data Science Grid) */}
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

          {/* كشاف الماوس التفاعلي والجسيمات */}
          <ParticlesBackground />
          
        </div>

      </body>
    </html>
  );
}