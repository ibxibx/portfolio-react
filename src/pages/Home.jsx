import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionHero from '../components/home/SectionHero';
import ScrollingWords from '../components/ScrollingWords';

const Home = () => {
  const spotlightTopRef = useRef(null);
  const spotlightBottomRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(spotlightTopRef.current, {
      scale: 0.5,
      duration: 1.5,
      ease: "power2.inOut",
    }).to(spotlightBottomRef.current, {
      scale: 0.7,
      duration: 1.5,
      ease: "power2.inOut",
    }, "<");

    return () => tl.kill();
  }, []);

  return (
    <main className="bg-black min-h-screen w-full relative overflow-hidden">
      <SectionHero />
      <ScrollingWords />
      
      {/* Top-right spotlight */}
      <div className="fixed aspect-square w-full xl:w-[800px] -right-1/4 -top-1/4">
        <div
          ref={spotlightTopRef}
          className="w-full h-full rounded-full bg-[#4ADE80] opacity-30 blur-[200px]"
        />
      </div>

      {/* Bottom-left spotlight */}
      <div className="fixed aspect-square w-full xl:w-[800px] -left-1/4 -bottom-1/4">
        <div
          ref={spotlightBottomRef}
          className="w-full h-full rounded-full bg-[#4ADE80] opacity-30 blur-[200px]"
        />
      </div>
    </main>
  );
};

export default Home;