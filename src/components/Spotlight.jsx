import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Spotlight = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.transform = 'translate3d(0px, 0px, 0px) scale(0.5, 0.5)';
    }
  }, []);

  return (
    <motion.div
      className="fixed aspect-square w-full sm:w-3/4 md:w-10/12 lg:w-1/3 xl:min-h-[50%] xl:w-auto xl:min-w-[30%] -right-1/2 -top-8 sm:-right-1/4 sm:-top-20 lg:right-0 lg:top-0 spotlight-top"
      data-gsap="spotlight-box"
      initial={{ y: '0%' }}
      animate={{ y: '-0.0165%' }}
      style={{
        translate: 'none',
        rotate: 'none',
        scale: 'none',
        bottom: 'unset',
        top: '0.0165%'
      }}
    >
      <motion.div
        ref={spotlightRef}
        className="size-full rounded-full bg-primary opacity-50 blur-[100px] transition [transform:translate3d(0,0,0)] md:blur-[150px] lg:blur-[100px] xl:blur-[200px]"
        data-gsap="spotlight"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        style={{
          translate: 'none',
          rotate: 'none',
          scale: 'none',
        }}
      />
    </motion.div>
  );
};

export default Spotlight;