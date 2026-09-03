import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground"; 

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
  display: "swap",
});

export const metadata = {
  title: "Mohamed Abdelhay | Data Scientist & Machine Learning Engineer",
  description: "Portfolio of Mohamed Abdelhay — Applied Machine Learning Engineer & Data Scientist specializing in predictive systems, automated analytics, and interactive intelligence dashboards.",
};

export const viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${inter.className} bg-zinc-950 text-white antialiased min-h-screen relative overflow-x-hidden selection:bg-yellow-400 selection:text-zinc-950`}
      >
        <ParticlesBackground />
        
        {/* Main Content */}
        <div className="relative w-full min-h-screen z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
