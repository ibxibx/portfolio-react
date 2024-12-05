import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spotlight from "../Spotlight";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import LogoMonogram from "./LogoMonogram";

const IconTooltip = ({ text, children, position = "right" }) => {
  const tooltipClasses = {
    right:
      "left-full ml-2 -translate-y-1/2 top-1/2 before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-r-white before:rotate-0",
    top: "bottom-full mb-2 -translate-x-1/2 left-1/2 before:absolute before:left-1/2 before:-translate-x-1/2 before:top-full before:border-[6px] before:border-transparent before:border-t-white",
  };

  return (
    <div className="group relative inline-flex items-center justify-center">
      {children}
      <span
        className={`
          absolute invisible group-hover:visible 
          bg-white text-black text-xs py-2 px-3 rounded
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          whitespace-nowrap z-[100]
          pointer-events-none
          ${tooltipClasses[position]}
        `}
      >
        {text}
      </span>
    </div>
  );
};

const Layout = ({ children, isLoading }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="p-4 h-screen bg-black flex items-stretch overflow-hidden">
      <Spotlight position="top-right" />
      <Spotlight position="bottom-left" />
      <div className="relative w-full min-w-[320px]">
        <div
          className={`relative w-full h-full rounded-lg ${
            isLoading ? "site-loading" : ""
          }`}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-lg">
            <div className="absolute left-10 top-0 bottom-0 border-l-[1px] border-white/30" />
            <div className="absolute top-10 left-0 right-0 border-t-[1px] border-white/30" />
            <div className="absolute bottom-10 left-0 right-0 border-t-[1px] border-white/30" />
          </div>

          <div className="relative h-full font-['PP_Object_Sans'] text-white">
            <div className="absolute top-1 left-1 w-9 h-10 flex items-center justify-center z-10">
              <Link to="/" className="scale-70">
                <LogoMonogram />
              </Link>
            </div>

            <div className="absolute top-0 left-14 right-0 h-10 flex items-center justify-center">
              <span className="text-base font-light tracking-wide">
                ian <span className="text-[#4ade80]">baumeister</span>
              </span>
            </div>

            <nav className="absolute left-0 top-10 bottom-10 w-10 flex flex-col items-center justify-center z-20">
              <div className="flex flex-col gap-6">
                <IconTooltip text="home" position="right">
                  <Link
                    to="/"
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      location.pathname === "/"
                        ? "text-green-400 bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Home size={16} />
                  </Link>
                </IconTooltip>

                <IconTooltip text="about" position="right">
                  <Link
                    to="/about"
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      location.pathname === "/about"
                        ? "text-green-400 bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <User size={16} />
                  </Link>
                </IconTooltip>

                <IconTooltip text="work" position="right">
                  <Link
                    to="/work"
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      location.pathname === "/work"
                        ? "text-green-400 bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Briefcase size={16} />
                  </Link>
                </IconTooltip>

                <IconTooltip text="contact" position="right">
                  <Link
                    to="/contact"
                    className={`p-2 rounded-lg transition-colors duration-200 ${
                      location.pathname === "/contact"
                        ? "text-green-400 bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Mail size={16} />
                  </Link>
                </IconTooltip>
              </div>
            </nav>

            <main className="absolute top-10 left-10 right-0 bottom-10 overflow-hidden">
              <div className="relative w-full h-full overflow-auto scrollbar-thin">
                <div className="min-h-full p-4">{children}</div>
              </div>
            </main>

            <div className="absolute bottom-0 left-10 right-0">
              <div className="relative flex items-center justify-between px-4 h-10">
                <div className="flex-1 flex items-center justify-center gap-8 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <span>Based in</span>
                    <span className="text-white">Berlin, Germany</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <div className="flex items-center gap-2">
                    <span>Local time</span>
                    <span className="text-white">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <div className="flex items-center gap-2">
                    <span>email:</span>
                    <span className="text-white">ian@ianworks.dev</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  <span className="text-white">+4917636127937</span>
                </div>

                <div className="relative flex items-center gap-4">
                  <IconTooltip text="linkedin" position="top">
                    <a
                      href="https://linkedin.com/in/avoiann"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <Linkedin size={14} />
                    </a>
                  </IconTooltip>

                  <IconTooltip text="github" position="top">
                    <a
                      href="https://github.com/ibxibx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <Github size={14} />
                    </a>
                  </IconTooltip>

                  <IconTooltip text="behance" position="top">
                    <a
                      href="https://www.behance.net/ianbau"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="112.5 117.5 32.5 20.25"
                        fill="currentColor"
                      >
                        <g transform="translate(112.26147859922179 112.26147859922176) scale(0.34 0.34)">
                          <path d="M83.482,24.925h-22.55v-5.601h22.553v5.601H83.482z M45.919,47.892c1.455,2.255,2.18,4.992,2.18,8.203c0,3.323-0.819,6.305-2.486,8.938c-1.061,1.74-2.378,3.211-3.961,4.395c-1.784,1.373-3.893,2.312-6.32,2.815c-2.433,0.503-5.068,0.758-7.906,0.758H2.207V17H29.25c6.817,0.11,11.651,2.087,14.505,5.964c1.712,2.38,2.561,5.233,2.561,8.552c0,3.424-0.859,6.162-2.588,8.243c-0.962,1.167-2.383,2.229-4.264,3.187C42.313,43.99,44.475,45.633,45.919,47.892z M15.12,39.078h11.851c2.434,0,4.403-0.462,5.92-1.387c1.515-0.925,2.271-2.566,2.271-4.925c0-2.605-1.001-4.334-3.007-5.166c-1.725-0.577-3.932-0.876-6.61-0.876H15.12V39.078z M36.303,55.297c0-2.91-1.189-4.92-3.562-5.997c-1.327-0.615-3.2-0.931-5.601-0.951H15.12v14.924h11.835c2.43,0,4.313-0.319,5.671-0.982C35.075,61.07,36.303,58.747,36.303,55.297z M91.849,46.186c0.27,1.832,0.396,4.492,0.345,7.968H62.989c0.161,4.03,1.551,6.847,4.193,8.462c1.591,1.011,3.521,1.505,5.779,1.505c2.384,0,4.326-0.6,5.819-1.838c0.816-0.658,1.534-1.585,2.154-2.752h10.708c-0.281,2.378-1.571,4.794-3.889,7.25c-3.587,3.9-8.622,5.854-15.085,5.854c-5.339,0-10.047-1.649-14.131-4.934c-4.07-3.3-6.115-8.648-6.115-16.07c0-6.958,1.835-12.285,5.518-15.991c3.699-3.714,8.47-5.564,14.35-5.564c3.487,0,6.629,0.623,9.432,1.877c2.798,1.254,5.107,3.227,6.925,5.94C90.298,40.28,91.355,43.041,91.849,46.186z M81.314,47.232c-0.195-2.787-1.126-4.897-2.803-6.339c-1.663-1.446-3.74-2.171-6.216-2.171c-2.697,0-4.779,0.776-6.259,2.301c-1.491,1.522-2.416,3.59-2.795,6.21H81.314L81.314,47.232z" />
                        </g>
                      </svg>
                    </a>
                  </IconTooltip>

                  <IconTooltip text="youtube" position="top">
                    <a
                      href="https://www.youtube.com/@avo-mango"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <Youtube size={14} />
                    </a>
                  </IconTooltip>

                  <IconTooltip text="instagram" position="top">
                    <a
                      href="https://instagram.com/avotravel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <Instagram size={14} />
                    </a>
                  </IconTooltip>

                  <IconTooltip text="x" position="top">
                    <a
                      href="https://x.com/ibxavo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </IconTooltip>

                  <button
                    onClick={handleContactClick}
                    className="ml-4 px-3 py-1 border border-white/20 rounded text-xs hover:bg-white/10 transition-colors duration-200"
                  >
                    let's-get-in-touch →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
