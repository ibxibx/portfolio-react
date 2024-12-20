import React from "react";
import { motion } from "framer-motion";

const FrameHeader = () => {
  return (
    <motion.header
      className="frame-header"
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.615, 0.19, 0.305, 0.91],
      }}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="flex-1 text-center">
          <h1 className="text-lg font-medium">Ian Baumeister</h1>
        </div>
      </div>
    </motion.header>
  );
};

export default FrameHeader;
