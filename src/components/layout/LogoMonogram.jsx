import React, { useState, useEffect } from "react";

const LogoMonogram = () => {
  const [isReversing, setIsReversing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const animationCycle = () => {
      if (!isAnimating) {
        setIsReversing(false);

        const disappearTimeout = setTimeout(() => {
          setIsReversing(true);
        }, 7400);

        const restartTimeout = setTimeout(() => {
          setIsReversing(false);
        }, 12800);

        return () => {
          clearTimeout(disappearTimeout);
          clearTimeout(restartTimeout);
        };
      }
    };

    const cleanup = animationCycle();
    const interval = setInterval(animationCycle, 12800);

    return () => {
      cleanup();
      clearInterval(interval);
    };
  }, [isMounted, isAnimating]);

  const handleClick = () => {
    setIsAnimating(true);
    setIsReversing(!isReversing);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2400);
  };

  return (
    <div
      className="logo-wrapper inline-block cursor-pointer"
      onClick={handleClick}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`logo-monogram ${isReversing ? "reverse" : ""}`}
      >
        <defs>
          <mask id="knockout-mask">
            <rect width="200" height="200" fill="white" />
            {/* B knockout outline */}
            <path
              d="M55 40
                 V160
                 H125
                 C145 160 150 150 150 135
                 V120
                 C150 110 145 100 125 100
                 H55
                 M55 100
                 H125
                 C145 100 150 90 150 75
                 V60
                 C150 45 145 40 125 40
                 H55Z"
              fill="none"
              stroke="black"
              strokeWidth="32"
              strokeLinejoin="round"
            />
            {/* I knockout outline */}
            <path
              d="M100 70V130"
              stroke="black"
              strokeWidth="32"
              strokeLinecap="round"
            />
            <path
              d="M80 70H120"
              stroke="black"
              strokeWidth="32"
              strokeLinecap="round"
            />
            <path
              d="M80 130H120"
              stroke="black"
              strokeWidth="32"
              strokeLinecap="round"
            />
          </mask>
        </defs>

        {/* Background X */}
        <g className="line x-parts" mask="url(#knockout-mask)">
          <path
            d="M30 30L170 170"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M170 30L30 170"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </g>

        {/* I shape */}
        <g className="line i-shape">
          <path
            d="M100 70V130"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M80 70H120"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M80 130H120"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>

        {/* B shape */}
        <g className="line b-shape">
          <path
            d="M55 40
               V160
               H125
               C145 160 150 150 150 135
               V120
               C150 110 145 100 125 100
               H55
               M55 100
               H125
               C145 100 150 90 150 75
               V60
               C150 45 145 40 125 40
               H55Z"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>

      <style jsx>{`
        .logo-monogram {
          transform: scale(1);
          transition: transform 0.3s ease;
        }

        .line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        /* APPEAR: B → I → X */
        .b-shape {
          animation: drawLine 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 0s;
        }
        .i-shape {
          animation: drawLine 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 0.8s;
        }
        .x-parts {
          animation: drawLine 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          animation-delay: 1.6s;
        }

        @keyframes drawLine {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          1% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        /* DISAPPEAR: X → I → B */
        .reverse .x-parts {
          animation: fadeOut 0.8s ease forwards;
          animation-delay: 0s;
        }
        .reverse .i-shape {
          animation: fadeOut 0.8s ease forwards;
          animation-delay: 0.8s;
        }
        .reverse .b-shape {
          animation: fadeOut 0.8s ease forwards;
          animation-delay: 1.6s;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            stroke-dashoffset: 0;
          }
          100% {
            opacity: 0;
            stroke-dashoffset: 0;
          }
        }

        .logo-wrapper:hover {
          cursor: pointer;
        }

        .logo-wrapper:hover .line {
          stroke: #4ade80;
        }
      `}</style>
    </div>
  );
};

export default LogoMonogram;
