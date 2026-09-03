"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingText() {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        "Data Scientist & ML Engineer",
        "Predictive Modeling Specialist",
        "AI Solutions Developer",
        "Business Intelligence Architect"
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1600,
      startDelay: 200,
      loop: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span className="inline-flex items-center min-h-[38px] leading-normal">
      <span
        ref={el}
        className="text-yellow-400 font-bold select-none [&+.typed-cursor]:text-yellow-400 [&+.typed-cursor]:font-extralight"
      />
    </span>
  );
}
