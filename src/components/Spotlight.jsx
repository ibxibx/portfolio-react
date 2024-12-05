import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Spotlight = ({ position = "top-right" }) => {
  const spotlightRef = useRef(null);
  const location = useLocation();

  // Define colors for different pages
  const getSpotlightColor = () => {
    switch (location.pathname) {
      case "/":
        return "#4ADE80"; // Green
      case "/work":
        return "#FF4D4D"; // Red
      case "/about":
        return "#4D79FF"; // Blue
      case "/contact":
        return "#FFD700"; // Yellow
      default:
        return "#4ADE80";
    }
  };

  const pulseAnimation = {
    scale: [1, 1.7, 1],
    opacity: [0.8, 0.4, 0.8],
    transition: {
      duration: 15, // Increased from 7 to 15 seconds
      ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for smoother easing
      repeat: Infinity,
      repeatType: "reverse", // Added smooth reversal
    },
  };

  useEffect(() => {
    if (spotlightRef.current) {
      const baseScale = position === "top-right" ? 0.65 : 0.91;
      spotlightRef.current.style.transform = `translate3d(0px, 0px, 0px) scale(${baseScale}, ${baseScale})`;
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
        className="size-full rounded-full blur-[100px] transition [transform:translate3d(0,0,0)] md:blur-[150px] lg:blur-[100px] xl:blur-[200px]"
        data-gsap="spotlight"
        initial={{ scale: 1 }}
        animate={pulseAnimation}
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          backgroundColor: getSpotlightColor(),
          opacity: 0.3,
        }}
      />
    </motion.div>
  );
};

export default Spotlight;
