import { useEffect, useRef } from "react";
import gsap from "gsap";
import SectionHero from "../components/home/SectionHero";
import { motion } from "framer-motion";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  const spotlightTopRef = useRef(null);
  const spotlightBottomRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(spotlightTopRef.current, {
      scale: 0.5,
      duration: 1.5,
      ease: "power2.inOut",
    }).to(
      spotlightBottomRef.current,
      {
        scale: 0.7,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );

    return () => tl.kill();
  }, []);

  const Section = ({ id, children }) => (
    <motion.section
      id={id}
      className="min-h-screen w-full flex items-center py-64 relative" // Doubled vertical padding
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">{children}</div>
    </motion.section>
  );

  return (
    <div className="relative">
      {/* Hero Section */}
      <Section id="hero">
        <SectionHero />
      </Section>
      {/* About Section */}
      <Section id="about">
        <div className="max-w-[1000px] mx-auto">
          <About />
        </div>
      </Section>
      {/* Work Section */}
      <Section id="work">
        <div className="max-w-[1000px] mx-auto">
          <Work />
        </div>
      </Section>
      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-[1000px] mx-auto">
          <Contact />
        </div>
      </Section>
      {/* Spotlights */}
      <div className="fixed aspect-square w-full xl:w-[800px] -right-1/4 -top-1/4 pointer-events-none">
        <div
          ref={spotlightTopRef}
          className="w-full h-full rounded-full bg-[#4ADE80] opacity-30 blur-[200px]"
        />
      </div>
      <div className="fixed aspect-square w-full xl:w-[800px] -left-1/4 -bottom-1/4 pointer-events-none">
        <div
          ref={spotlightBottomRef}
          className="w-full h-full rounded-full bg-[#4ADE80] opacity-30 blur-[200px]"
        />
      </div>
    </div>
  );
};

export default Home;
