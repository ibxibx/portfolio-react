import React from "react";
import { motion } from "framer-motion";

const MobileMenu = ({ isOpen, onClose, children }) => {
  return (
    <motion.div
      className={`fixed inset-[1px] bg-black/50 backdrop-blur-sm z-50 rounded-lg ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      initial={false}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute top-[41px] bottom-[41px] w-[85%] bg-neutral-900/70 backdrop-blur-md border-r border-white/10"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full overflow-y-auto scrollbar-thin">{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
