"use client";

import { motion } from "framer-motion";
import {
  FaChartLine,
  FaRobot,
  FaBrain,
  FaSun,
  FaHotel,
  FaShoppingCart,
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

const projects = [
  {
    title: "Sales Intelligence Platform",
    type: "Data Analytics",
    icon: <FaChartLine />,
    description: "End-to-end analytics platform that transforms raw sales data into business insights using data processing, visualization and intelligent analysis.",
    tech: ["Python", "Pandas", "SQL", "Plotly", "Machine Learning"],
    slug: "sales-intelligence-platform",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    title: "Mobile Sentiment Analysis",
    type: "NLP / Machine Learning",
    icon: <FaRobot />,
    description: "NLP classification system that analyzes mobile reviews and predicts customer sentiment using machine learning models.",
    tech: ["Python", "NLP", "CatBoost", "Scikit-learn"],
    slug: "mobile-sentiment-analysis",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    title: "DataVision AI",
    type: "Artificial Intelligence",
    icon: <FaBrain />,
    description: "AI-powered analytics assistant that automatically generates insights and helps users understand datasets.",
    tech: ["Python", "AI", "Data Analysis", "Streamlit"],
    slug: "datavision-ai",
    demo: "https://datavision-ai-x6nywmkxc6a2fahl8c3j6z.streamlit.app",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    title: "Solar Radiation Prediction",
    type: "Machine Learning",
    icon: <FaSun />,
    description: "Machine learning regression model predicting solar radiation using weather conditions and engineered features.",
    tech: ["LightGBM", "XGBoost", "CatBoost", "Regression"],
    slug: "solar-radiation-prediction",
    demo: "https://solar-energy-predictor.streamlit.app",
    github: "https://github.com/abdelhaym953-create"
  },
  {
    title: "Online Sales Dashboard",
    type: "Business Intelligence",
    icon: <FaShoppingCart />,
    description: "Interactive dashboard analyzing sales performance, customer behavior, revenue trends and business KPIs.",
    tech: ["Python", "Pandas", "Plotly", "Streamlit"],
    slug: "online-sales-dashboard",
    demo: "https://online-sales-dashboard-lrpcanpcvdxc67cq4gfmjj.streamlit.app",
    github: "https://github.com/abdelhaym953-create/Online-Sales-Dashboard"
  },
  {
    title: "Hotel Booking Intelligence Dashboard",
    type: "Data Analytics",
    icon: <FaHotel />,
    description: "Business intelligence dashboard exploring booking behavior, cancellations, customer segments and revenue patterns.",
    tech: ["Python", "Pandas", "Plotly", "Streamlit"],
    slug: "hotel-booking-dashboard",
    demo: "https://hotel-booking-intelligence-dashboard-dwejjdgwbew2dbawcyhw5x.streamlit.app",
    github: "https://github.com/abdelhaym953-create"
  }
];

export default function Projects() {
  const handleDisabledLink = (e, type) => {
    e.preventDefault();
    alert(`The ${type} page is currently under preparation and will be live very soon!`);
  };

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 bg-transparent text-white relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            A showcase of intelligent applications, data engines, and interactive business solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col hover:border-yellow-400/30 transition-all duration-300 overflow-hidden group"
            >
              {/* Soft Ambient Light Glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-yellow-400/10 blur-3xl rounded-full transition-opacity group-hover:bg-yellow-400/20 pointer-events-none" />

              {/* Top Row: Icon & GitHub */}
              <div className="flex justify-between items-start mb-4 w-full relative z-10">
                <div className="text-yellow-400 text-3xl sm:text-4xl">
                  {project.icon}
                </div>
                
                {project.github === "#" ? (
                  <button
                    onClick={(e) => handleDisabledLink(e, "GitHub Repository")}
                    className="text-slate-400 hover:text-yellow-400 text-lg p-2 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/70 border border-white/5 transition-all"
                    title="View Source Code"
                  >
                    <FaGithub />
                  </button>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-yellow-400 text-lg p-2 rounded-xl bg-zinc-800/40 hover:bg-zinc-800/70 border border-white/5 transition-all"
                    title="View Source Code"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>

              {/* Type Badge */}
              <span className="text-yellow-400/90 text-xs font-semibold tracking-wider uppercase relative z-10">
                {project.type}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold mt-2 text-slate-100 break-words group-hover:text-yellow-400 transition-colors relative z-10">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm mt-3 leading-relaxed flex-grow relative z-10">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mt-5 relative z-10">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md bg-zinc-800/60 text-slate-300 border border-white/10 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6 pt-4 border-t border-white/10 relative z-10">
                <a
                  href={`/projects/${project.slug}`}
                  onClick={(e) => {
                    // إذا لم تكن صفحات التفاصيل متاحة، يمكنك إلغاء التعليق عن السطر التالي:
                    // handleDisabledLink(e, "Project Details");
                  }}
                  className="flex-1 text-center bg-zinc-800/60 hover:bg-zinc-800 text-slate-200 py-2.5 rounded-xl font-bold text-xs sm:text-sm border border-white/10 transition-colors"
                >
                  Details
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-yellow-400 hover:bg-yellow-300 text-zinc-950 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-yellow-400/10"
                  >
                    Live App <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}