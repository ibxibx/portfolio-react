import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LogoWordmark = () => {
  return (
    <Link to="/" className="text-xl font-bold">
      <motion.svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 0.5,
          ease: [0.615, 0.19, 0.305, 0.91]
        }}
      >
        <motion.path
          d="M0 24V0H8.4L15.6 16.8L22.8 0H31.2V24H24V7.2L16.8 24H14.4L7.2 7.2V24H0Z"
          fill="currentColor"
        />
        <motion.path
          d="M36 24V0H54V6H43.2V9.6H52.8V15.6H43.2V18H54V24H36Z"
          fill="currentColor"
        />
      </motion.svg>
    </Link>
  );
};

export default LogoWordmark;