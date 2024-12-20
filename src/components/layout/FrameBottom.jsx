import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Instagram, Youtube } from "lucide-react";

const FrameBottom = () => {
  const socialIcons = [
    { Icon: Linkedin, href: "https://linkedin.com/in/avoiann" },
    { Icon: Github, href: "https://github.com/ibxibx" },
    { Icon: Twitter, href: "https://www.x.com/ibxavo" },
    { Icon: Instagram, href: "https://www.instagram.com/avotravel" },
    { Icon: Youtube, href: "https://www.youtube.com/@avo-mango" },
  ];

  return (
    <motion.div
      className="frame-bottom fixed bottom-0 left-0 right-0 bg-neutral-900/70 backdrop-blur-md border-t border-white/10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: 0.3,
        ease: [0.615, 0.19, 0.305, 0.91],
      }}
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center space-x-6">
          {/* Social icons - visible on all screen sizes */}
          <div className="flex items-center space-x-6">
            {socialIcons.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Contact button - hidden on mobile */}
          <button className="hidden md:block px-4 py-2 bg-[#4ADE80] text-black rounded-lg hover:bg-[#4ADE80]/90 transition-colors">
            Let's get in touch
          </button>
        </div>
      </div>
    </motion.div>
  );
};
