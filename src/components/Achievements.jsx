"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { FaProjectDiagram, FaChartBar, FaRobot, FaTrophy } from "react-icons/fa";

// مكون فرعي لعمل تأثير عداد رقمي متحرك بسلاسة
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>{value}</span>;
}

const achievementsData = [
  {
    icon: <FaProjectDiagram />,
    number: 10,
    suffix: "+",
    text: "ML & Analytics Projects",
  },
  {
    icon: <FaChartBar />,
    number: 4,
    suffix: " Live",
    text: "Interactive Cloud Apps",
  },
  {
    icon: <FaRobot />,
    isText: true,
    textVal: "0.94",
    suffix: " R²",
    text: "Solar Model Accuracy",
  },
  {
    icon: <FaTrophy />,
    isText: true,
    textVal: "100%",
    text: "Reproducible & Documented",
  },
];

export default function Achievements() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {achievementsData.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                y: -3,
                boxShadow: "0 15px 30px -15px rgba(250, 204, 21, 0.12)"
              }}
              className="group bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center hover:border-yellow-400/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-center items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="text-yellow-400 text-2xl sm:text-3xl flex justify-center mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10">
                {item.icon}
              </div>

              {/* Achievement Value */}
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-100 relative z-10 flex items-center justify-center">
                {item.isText ? (
                  <span className="text-slate-100 flex items-center justify-center">
                    {item.textVal}
                    {item.suffix && <span className="text-yellow-400 ml-0.5">{item.suffix}</span>}
                  </span>
                ) : (
                  <span className="flex justify-center items-center">
                    <AnimatedNumber value={item.number} />
                    <span className="text-yellow-400 ml-0.5">{item.suffix}</span>
                  </span>
                )}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 font-medium relative z-10 group-hover:text-slate-300 transition-colors duration-300">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}