import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from 'framer-motion';

const ScrollingWords = () => {
  const scrollingTextRef = useRef(null);

  useEffect(() => {
    gsap.to(".BOX", {
      x: "-100vw",
      duration: 50,
      ease: "none",
      stagger: 5,
      repeat: -1,
    });
  }, []);

  return (
    <div
      className="absolute z-10 inset-0 flex select-none w-full items-center overflow-hidden"
      tabIndex={0}
    >
      <span
        ref={scrollingTextRef}
        className="BOX whitespace-nowrap text-[20rem] font-extrabold lowercase leading-none text-[black] opacity-10 md:text-[30rem] xl:text-[40rem]"
      >
        discipline aspiration faith principles achievement
      </span>
    </div>
  );
};

export default ScrollingWords;
