"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingText() {
  const el = useRef(null);

  useEffect(() => {
    // التأكد من أن العنصر موجود فعلياً في الـ DOM قبل البدء
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        "Data Scientist",
        "Machine Learning Engineer",
        "AI Enthusiast",
        "Data Analyst"
      ],
      typeSpeed: 60,       // سرعة كتابة متزنة ومريحة للعين
      backSpeed: 40,       // سرعة مسح رشيقة
      backDelay: 1500,     // وقت انتظار مريح للقراءة
      startDelay: 300,     // تأخير بسيط قبل البدء
      loop: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span className="inline-flex items-center">
      <span
        ref={el}
        className="text-yellow-400 font-bold select-none [&+.typed-cursor]:text-yellow-400 [&+.typed-cursor]:font-extralight"
        style={{ minHeight: "1.5em" }} // حجز مساحة رأسية منعاً لاهتزاز النصوص المحيطة
      />
    </span>
  );
}