import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const ScrollingWords = () => {
  const scrollingTextRef = useRef(null);

  useEffect(() => {
    const textElement = scrollingTextRef.current;
    const textWidth = textElement.offsetWidth;

    gsap.to(".BOX", {
      x: `-${textWidth}px`, // Using the full width of the text
      duration: 330,
      ease: "none",
      repeat: -1,
      stagger: {
        each: 0, // No stagger between elements
        repeat: -1,
      },
    });
  }, []);

  return (
    <div
      className="fixed z-[1] inset-0 flex select-none w-full items-center overflow-hidden pointer-events-none"
      tabIndex={0}
    >
      <span
        ref={scrollingTextRef}
        className="BOX whitespace-nowrap text-[20rem] font-extrabold lowercase leading-none text-black/15 opacity-60 md:text-[30rem] xl:text-[40rem]"
      >
        discipline aspiration achievement
      </span>
    </div>
  );
};

export default ScrollingWords;
