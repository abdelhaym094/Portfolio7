"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "abdelhaym953@gmail.com",
    link: "mailto:abdelhaym953@gmail.com",
    isLink: true,
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "Mohamed Abdelhay",
    link: "https://www.linkedin.com/in/mohamed-abdelhay-3361a2308",
    isLink: true,
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "abdelhaym953-create",
    link: "https://github.com/abdelhaym953-create",
    isLink: true,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Cairo, Egypt",
    link: "",
    isLink: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Let's Build Something <span className="text-yellow-400">Amazing</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg px-2">
            Interested in data science, AI solutions, or intelligent dashboards? 
            Let's connect and transform your data into reality.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 md:mt-16">
          {contactItems.map((item, index) => {
            const cardContent = (
              <>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Icon */}
                <div className="text-yellow-400 text-2xl sm:text-3xl flex justify-center mb-3 transform group-hover:scale-105 transition-transform duration-300 relative z-10">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-base sm:text-lg text-slate-100 group-hover:text-yellow-400 transition-colors duration-300 relative z-10">
                  {item.title}
                </h3>

                {/* Value */}
                <p className="text-slate-400 mt-1 text-xs sm:text-sm break-all relative z-10 group-hover:text-slate-300 transition-colors duration-300 px-1">
                  {item.value}
                </p>
              </>
            );

            const cardClasses = "group bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:border-yellow-400/30 transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center h-full select-none";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                  boxShadow: "0 15px 30px -15px rgba(250, 204, 21, 0.12)"
                }}
                className="h-full"
              >
                {item.isLink ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className={`${cardClasses} cursor-pointer`}>
                    {cardContent}
                  </a>
                ) : (
                  <div className={`${cardClasses} cursor-default`}>
                    {cardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}