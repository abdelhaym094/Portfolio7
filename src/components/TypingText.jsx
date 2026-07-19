"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Data Scientist",
        "Machine Learning Engineer",
        "AI Enthusiast",
        "Data Analyst"
      ],
      typeSpeed: 60,       // سرعة كتابة متزنة ومريحة للعين
      backSpeed: 40,       // سرعة مسح رشيقة
      backDelay: 1200,     // وقت انتظار (ثانية وربع) بعد اكتمال الجملة ليقرأها المستخدم
      startDelay: 300,     // تأخير بسيط جداً قبل بدء الكتابة لأول مرة
      loop: true,
      cursorChar: "|",     // شكل مؤشر الكتابة التقليدي
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      ref={el}
      className="text-yellow-400 inline-block font-semibold"
      style={{ minHeight: "1.5em" }} // يضمن حجز مساحة رأسية ثابتة تمنع اهتزاز العناصر المحيطة
    />
  );
}