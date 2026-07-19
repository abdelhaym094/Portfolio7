"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { FaProjectDiagram, FaChartBar, FaRobot, FaTrophy } from "react-icons/fa";

// مكون فرعي لعمل تأثير عداد رقمي متحرك بسلاسة وبدون وميض أثناء التحميل الابتدائي
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

  return <span ref={ref}>{value}</span>; // نضع القيمة الأساسية كـ fallback لتفادي وميض الـ 0 أثناء الـ Hydration
}

const achievementsData = [
  {
    icon: <FaProjectDiagram />,
    number: 10,
    suffix: "+",
    text: "Data Projects Completed",
  },
  {
    icon: <FaChartBar />,
    number: 5,
    suffix: "+",
    text: "Interactive Dashboards",
  },
  {
    icon: <FaRobot />,
    isText: true,
    textVal: "ML / DL",
    text: "AI & Predictive Models",
  },
  {
    icon: <FaTrophy />,
    isText: true,
    textVal: "Kaggle",
    text: "Competitions & Notebooks",
  },
];

export default function Achievements() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-zinc-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {achievementsData.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                y: -4,
                boxShadow: "0 15px 30px -15px rgba(250, 204, 21, 0.15)"
              }}
              className="group bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-2xl p-4 sm:p-6 text-center hover:border-yellow-400/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-center items-center"
            >
              {/* الخلفية المضيئة */}
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="text-yellow-400 text-2xl sm:text-4xl flex justify-center mb-3 sm:mb-4 transform group-hover:scale-105 transition-transform duration-300 relative z-10">
                {item.icon}
              </div>

              {/* Number / Achievement Value */}
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 relative z-10 min-h-[36px] flex items-center justify-center">
                {item.isText ? (
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent break-words">
                    {item.textVal}
                  </span>
                ) : (
                  <span className="flex justify-center items-center">
                    <AnimatedNumber value={item.number} />
                    <span className="text-yellow-400 ml-0.5">{item.suffix}</span>
                  </span>
                )}
              </h3>

              {/* Description Text */}
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium relative z-10 group-hover:text-slate-300 transition-colors duration-300 max-w-[150px] sm:max-w-none">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}