import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { number: "01", text: "home", path: "/" },
    { number: "02", text: "about-me", path: "/about" },
    { number: "03", text: "my-work", path: "/work" },
    { number: "04", text: "contact", path: "/contact" },
  ];

  const backdropVariants = {
    closed: { opacity: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div
      className={`fixed inset-0 bg-black/80 backdrop-blur-md z-50 ${
        !isOpen && "pointer-events-none"
      }`}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={backdropVariants}
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-neutral-900/90 to-black/90"
        variants={menuVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="w-full max-w-lg px-8">
          <ul className="space-y-8">
            {menuItems.map(({ number, text, path }, i) => (
              <motion.li
                key={text}
                custom={i}
                variants={itemVariants}
                className="border-b border-white/10 pb-4"
              >
                <Link
                  to={path}
                  className="group flex items-center space-x-4"
                  onClick={() => {
                    onClose();
                  }}
                >
                  <span className="font-mono text-emerald-400/60 text-base">
                    {number}
                  </span>
                  <span className="font-mono text-2xl text-white/90 group-hover:text-emerald-400 transition-colors duration-300">
                    {text}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
