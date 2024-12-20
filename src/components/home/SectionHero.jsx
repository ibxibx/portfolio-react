import React from "react";
import { motion } from "framer-motion";
import "../../styles/fonts.css";

const SectionHero = () => {
  const title = (
    <h1 className="font-['PP_Object_Sans'] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] leading-tight tracking-[-0.04em]">
      Hi, I'm Ian,
      <br />a <span className="text-[#4ADE80]">creative</span> developer
      <br />
      with a <span className="text-[#4ADE80]">design</span> background
    </h1>
  );

  const subtitle = (
    <p
      className="mx-auto max-w-[280px] sm:max-w-xl md:max-w-2xl text-[14px] sm:text-[15px] md:text-[16px] opacity-80"
      style={{ fontFamily: "PP Neue Machina", color: "#999999" }}
    >
      I love solving problems and I bring a combined experience in development
      and design, which gives me a unique perspective to creating modern
      user-friendly applications.
    </p>
  );

  return (
    <section
      className="hero relative flex items-center justify-center px-4 sm:px-6 md:px-8"
      style={{ height: "calc(100dvh - 6rem)" }}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {title}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            {subtitle}
          </motion.div>
          <div className="scroll-line absolute bottom-8 h-12 opacity-30 hidden md:block"></div>
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

        @media (max-width: 640px) {
          .hero {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SectionHero;
