import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground"; 

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
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
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} bg-zinc-950 text-white antialiased min-h-screen relative`}
      >
        {/* وضع الخلفية في أدنى طبقة صريحة z-0 */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesBackground />
        </div>

        {/* وضع محتوى الموقع في طبقة أعلى z-10 لكي لا يتم حجب الخلفية */}
        <main className="relative z-10 w-full min-h-screen bg-transparent">
          {children}
        </main>
      </body>
    </html>
  );
}