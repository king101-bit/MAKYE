"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypewriterText = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: [
        "Poised",
        "Strutt",
        "Glamor",
        "Allure",
        "Chic",
        "Flaunt",
        "Elegance",
        "Enchant",
        "Flair",
        "Harmony",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={elementRef} />;
};

export default TypewriterText;
