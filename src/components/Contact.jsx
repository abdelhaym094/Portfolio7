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
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 bg-zinc-950 text-white relative">
      <div className="max-w-6xl mx-auto">
        
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
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Interested in data science, AI solutions, or intelligent dashboards? 
            Let's connect and transform your data into reality.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {contactItems.map((item, index) => {
            const cardContent = (
              <>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="text-yellow-400 text-3xl sm:text-4xl flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-slate-100 group-hover:text-yellow-400 transition-colors duration-300 relative z-10">
                  {item.title}
                </h3>

                {/* Value */}
                <p className="text-slate-400 mt-2 text-sm break-all relative z-10 group-hover:text-slate-300 transition-colors duration-300">
                  {item.value}
                </p>
              </>
            );

            const cardClasses = "group bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 text-center hover:border-yellow-400/40 transition-all duration-300 relative overflow-hidden block h-full select-none cursor-pointer";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.04,
                  y: -4,
                  boxShadow: "0 15px 30px -15px rgba(250, 204, 21, 0.15)"
                }}
              >
                {item.isLink ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                    {cardContent}
                  </a>
                ) : (
                  <div className={cardClasses + " cursor-default"}>
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