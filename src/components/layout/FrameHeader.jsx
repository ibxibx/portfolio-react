import React from 'react';
import { motion } from 'framer-motion';

const FrameHeader = () => {
  return (
    <motion.header 
      className="frame-header"
      initial={{ height: 0 }}
      animate={{ height: 'auto' }}
      exit={{ height: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.615, 0.19, 0.305, 0.91]
      }}
    >
      {/* Header content */}
    </motion.header>
  );
};

export default FrameHeader;