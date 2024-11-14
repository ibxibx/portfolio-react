import React from "react";
import { motion } from "framer-motion";

const FrameBottom = () => {
  return (
    <motion.div
      className="frame-bottom"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: 0.3,
        ease: [0.615, 0.19, 0.305, 0.91],
      }}
    >
      {/* Frame bottom content */}
    </motion.div>
  );
};

export default FrameBottom;
