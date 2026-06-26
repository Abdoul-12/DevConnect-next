"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedDomains() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Front-end", "Back-end", "Full-stack"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="all__domains">
      <p className="domain">
        <span ref={typedRef} id="typed-domain"></span>
      </p>
    </div>
  );
}
