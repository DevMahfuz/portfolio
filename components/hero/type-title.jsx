"use client";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const TipeTitle = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "A Full Stack Developer.",
        "A JavaScript Developer.",
        "A Front End Developer.",
        "A React Developer.",
        "A Next JS Developer.",
        "A Node JS Developer.",
        "A Back End Developer.",
        "A WordPress Developer.",
      ],
      typeSpeed: 100,
      smartBackspace: true,
      loop: true,
      backSpeed: 50,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <h2 ref={el}>A Full Stack Developer.</h2>;
};

export default TipeTitle;
