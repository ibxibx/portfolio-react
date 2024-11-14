import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionHero from '../components/home/SectionHero';
import ScrollingWords from '../components/ScrollingWords';

const Home = () => {
  const spotlight = useRef(null);

  useEffect(() => {
    gsap.to(spotlight.current, {
      scale: 0.5,
      duration: 1,
      ease: "power2.inOut",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <main className="bg-zinc-900 min-h-svh min-w-full relative">
      <SectionHero
        title="Hi, I'm Ian, 
        a creative developer 
        with a design background"
        subtitle="I love solving problems and passionate about building modern web applications"
      />
      <ScrollingWords />
      <div className="absolute inset-0">
        <div
          className="fixed aspect-square w-full sm:w-3/4 md:w-10/12 lg:w-1/3 xl:min-h-[50%] xl:w-auto xl:min-w-[30%] -right-1/2 -top-8 sm:-right-1/4 sm:-top-20 lg:right-0 lg:top-0 spotlight-top"
          style={{
            transform: 'translate(0px, -0.0165%)',
            bottom: 'unset',
            top: '0.0165%'
          }}
        >
          <div
            ref={spotlight}
            className="size-full rounded-full bg-primary opacity-50 blur-[100px] transition [transform:translate3d(0,0,0)] md:blur-[150px] lg:blur-[100px] xl:blur-[200px]"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale(1, 1)'
            }}
          />
        </div>
        <div
          className="fixed aspect-square w-full sm:w-3/4 md:w-10/12 lg:w-1/3 xl:min-h-[50%] xl:w-auto xl:min-w-[30%] -bottom-8 -left-1/2 sm:-bottom-20 sm:-left-1/4 lg:bottom-0 lg:left-0 spotlight-bottom"
          style={{
            transform: 'translate(0px, 0.0165%)',
            bottom: '0.0165%',
            top: 'unset'
          }}
        >
          <div
            className="size-full rounded-full bg-primary opacity-50 blur-[100px] transition [transform:translate3d(0,0,0)] md:blur-[150px] lg:blur-[100px] xl:blur-[200px]"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale(0.7325, 0.7325)'
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;