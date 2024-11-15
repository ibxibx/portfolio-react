import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import LogoMonogram from "./LogoMonogram";

const Layout = ({ children, isLoading }) => {
  const location = useLocation();

  return (
    <div className="p-4 h-screen bg-black flex items-stretch">
      <div className="relative w-full">
        {/* Main outer frame - thinner lines */}
        <div
          className={`relative w-full h-full rounded-lg ${
            isLoading ? "site-loading" : ""
          }`}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Inner frame lines - matching thickness */}
          <div className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-lg">
            {/* Left vertical double line */}
            <div className="absolute left-10 top-0 bottom-0 border-l-[1px] border-white/30" />

            {/* Top horizontal double line */}
            <div className="absolute top-10 left-0 right-0 border-t-[1px] border-white/30" />

            {/* Bottom horizontal double line - ensuring continuity */}
            <div className="absolute bottom-10 left-0 right-0 border-t-[1px] border-white/30" />
          </div>

          {/* Content container */}
          <div className="relative h-full font-['PP_Object_Sans'] text-white">
            {/* Logo in top-left corner square - centered in corner square */}
            <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center">
              <Link to="/" className="scale-70">
                <LogoMonogram />
              </Link>
            </div>

            {/* Top Header with name */}
            <div className="absolute top-0 left-14 right-0 h-10 flex items-center justify-center">
              <span className="text-base font-light tracking-wide">
                ian <span className="text-[#4ade80]">baumeister</span>
              </span>
            </div>

            {/* Left Navigation Bar - smaller icons */}
            <nav className="absolute left-0 top-10 bottom-10 w-10 flex flex-col items-center justify-center">
              <div className="flex flex-col gap-6">
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
              </div>
            </nav>

            {/* Main Content - removed scrollbar */}
            <main className="absolute top-10 left-10 right-0 bottom-10 overflow-hidden">
              <div className="relative h-full p-4">{children}</div>
            </main>

            {/* Footer - adjusted for thinner frame */}
            <div className="absolute bottom-0 left-10 right-0 h-10 flex items-center justify-between px-4">
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
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/avoian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="https://github.com/ibxibx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Github size={14} />
                </a>
                <a
                  href="https://x.com/ibxavo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href="https://instagram.com/avotravel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Instagram size={14} />
                </a>
                <button className="ml-4 px-3 py-1 border border-white/20 rounded text-xs hover:bg-white/10 transition-colors duration-200">
                  let's-get-in-touch →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
