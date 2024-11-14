import React from "react";
import { motion } from "framer-motion";

const SectionHero = ({
  title = "Junior Developer",
  subtitle = "Building modern web applications",
}) => {
  return (
    <section
      className="hero relative flex items-center justify-center"
      style={{ height: "calc(100dvh - 6rem)" }}
    >
      <div className="container">
        <div className="flex flex-col items-center gap-10 text-center">
          <motion.h1
            className="text-4xl font-bold md:text-6xl text-green-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="max-w-2xl text-xl opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
          <div className="scroll-line absolute bottom-8 h-12 opacity-30"></div>
        </div>
      </div>

      <style jsx>{`
        .scroll-line:after {
          animation: scroll 3s linear infinite;
          background-image: linear-gradient(
            to bottom,
            transparent 0,
            oklch(var(--p)) 80%,
            transparent 100%
          );
          content: "";
          height: auto;
          left: 50%;
          position: absolute;
          transition: all 0.5s cubic-bezier(0.615, 0.19, 0.305, 0.91);
          width: 1px;
        }

        @keyframes scroll {
          0% {
            bottom: 100%;
            opacity: 0;
            top: 0;
          }
          45% {
            bottom: 0;
            opacity: 1;
            top: 0;
          }
          90% {
            bottom: 0;
            opacity: 0;
            top: 100%;
          }
          to {
            bottom: 0;
            opacity: 0;
            top: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default SectionHero;
