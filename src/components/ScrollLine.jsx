import React, { useEffect } from "react";
import { gsap } from "gsap";

const ScrollLine = ({ className = "" }) => {
  return (
    <div className={`relative flex justify-center w-full h-64 ${className}`}>
      <div className="absolute w-px h-40 animate-scroll bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
    </div>
  );
};

export default ScrollLine;
