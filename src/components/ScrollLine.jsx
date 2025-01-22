import React, { useEffect } from "react";
import { gsap } from "gsap";

const ScrollLine = ({ className = "" }) => {
  return (
    <div className={`relative flex justify-center w-full ${className}`}>
      <div className="w-px h-32 bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5">
        <div className="absolute w-px h-20 animate-scroll bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      </div>
    </div>
  );
};

export default ScrollLine;
