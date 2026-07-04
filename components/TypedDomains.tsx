"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedDomains() {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!spanRef.current) return;

    const typed = new Typed(spanRef.current, {
      strings: ["Front-end", "Back-end", "Full-stack"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <p
      className="font-bold text-text text-[clamp(1em,1.5vw,1.5em)]
                  font-[family-name: --font-kode-mono]"
    >
      <span ref={spanRef} className="text-gras" />
    </p>
  );
}
