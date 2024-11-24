import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Spotlight = ({ position = "top-right" }) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.transform =
        position === "top-right"
          ? "translate3d(0px, 0px, 0px) scale(0.5, 0.5)"
          : "translate3d(0px, 0px, 0px) scale(0.7, 0.7)";
    }
  }, [position]);

  const positionClasses =
    position === "top-right"
      ? "right-[10%] top-[10%] spotlight-top"
      : "left-[10%] bottom-[10%] spotlight-bottom";

  return (
    <motion.div
      className={`fixed z-[0] aspect-square w-full sm:w-3/4 md:w-10/12 lg:w-1/3 xl:min-h-[50%] xl:w-auto xl:min-w-[30%] ${positionClasses} pointer-events-none`}
      data-gsap="spotlight-box"
      initial={{ y: "0%" }}
      animate={{ y: "-0.0165%" }}
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        bottom: position === "top-right" ? "unset" : undefined,
        top: position === "top-right" ? "0.0165%" : undefined,
      }}
    >
      <motion.div
        ref={spotlightRef}
        className="size-full rounded-full bg-[#4ADE80]/30 blur-[100px] transition [transform:translate3d(0,0,0)] md:blur-[150px] lg:blur-[100px] xl:blur-[200px]"
        data-gsap="spotlight"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
        }}
      />
    </motion.div>
  );
};

export default Spotlight;
