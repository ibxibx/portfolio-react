import React from "react";
import { Link } from "react-router-dom";

const LogoMonogram = () => {
  return (
    <Link to="/" className="animate-logo inline-block">
      <svg
        className="logo-monogram"
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* B shape */}
        <path
          className="letter-b"
          d="M14 8V40H26C31.5228 40 36 35.5228 36 30C36 26.134 33.7741 22.7782 30.5 21.3M14 8H26C31.5228 8 36 12.4772 36 18C36 21.866 33.7741 25.2218 30.5 26.7M14 8V26.7M30.5 21.3H14M30.5 21.3C31.3819 20.8896 32.1819 20.3237 32.8661 19.6339M30.5 26.7H14M30.5 26.7C31.3819 27.1104 32.1819 27.6763 32.8661 28.3661"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* I shape */}
        <path
          className="letter-i"
          d="M24 14V34M20 14H28M20 34H28"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <style jsx>{`
        .logo-monogram {
          transition: all 0.5s cubic-bezier(0.615, 0.19, 0.305, 0.91);
          transform-origin: center;
        }

        .letter-b,
        .letter-i {
          transition: all 0.5s cubic-bezier(0.615, 0.19, 0.305, 0.91);
          stroke-dasharray: 200;
          stroke-dashoffset: 0;
          transform-origin: center;
        }

        .animate-logo:hover .letter-b {
          stroke-dashoffset: 200;
          transform: rotate(360deg);
        }

        .animate-logo:hover .letter-i {
          stroke-dashoffset: -200;
          transform: scale(1.2);
        }

        .animate-logo:hover svg {
          filter: drop-shadow(0 0 3px currentColor);
        }
      `}</style>
    </Link>
  );
};

export default LogoMonogram;
