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
      backDelay: 1500,     // زيادة بسيطة لوقت الانتظار ليتمكن مستخدم الهاتف من قراءة المسميات الطويلة
      startDelay: 300,     // تأخير بسيط جداً قبل بدء الكتابة لأول مرة
      loop: true,
      cursorChar: "|",     // شكل مؤشر الكتابة التقليدي
      autoInsertCss: true, // يضمن حقن التنسيقات الخاصة بالمؤشر والوميض تلقائياً لمنع أي أخطاء تكرار
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span className="inline-flex items-center">
      <span
        ref={el}
        className="text-yellow-400 font-semibold select-none"
        style={{ minHeight: "1.5em" }} // يضمن حجز مساحة رأسية ثابتة تمنع اهتزاز العناصر المحيطة (Layout Shift)
      />
    </span>
  );
}