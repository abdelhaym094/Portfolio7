import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground"; 

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
  display: "swap",
});

export const metadata = {
  title: "Mohamed Abdelhay | Data Scientist & Machine Learning Developer",
  description: "Portfolio of Mohamed Abdelhay — Applied Machine Learning Engineer & Data Scientist specializing in predictive systems, automated analytics, and interactive decision tools.",
  openGraph: {
    title: "Mohamed Abdelhay | Data Scientist & Machine Learning Developer",
    description: "Portfolio of Mohamed Abdelhay — Applied Machine Learning Engineer & Data Scientist specializing in predictive systems, automated analytics, and interactive decision tools.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${inter.className} bg-[#090d16] text-white antialiased min-h-screen relative overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950`}
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
