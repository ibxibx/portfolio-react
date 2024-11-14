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
import WidgetBreadcrumbs from "../shared/WidgetBreadcrumbs";
import WidgetLocation from "../shared/WidgetLocation";
import LogoMonogram from "./LogoMonogram";
import LogoWordmark from "./LogoWordmark";

const Layout = ({ children, isLoading }) => {
  const location = useLocation();

  return (
    <div
      className={`min-h-screen bg-black text-white font-['PP_Object_Sans'] ${
        isLoading ? "site-loading" : ""
      }`}
    >
      {/* Left Navigation Bar */}
      <nav className="fixed left-0 top-0 h-full w-16 bg-neutral-900/50 backdrop-blur-md border-r border-white/10 flex flex-col items-center py-4 z-50">
        <Link to="/" className="mb-8">
          <LogoMonogram />
        </Link>

        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className={`p-3 rounded-lg transition-colors duration-200 ${
              location.pathname === "/"
                ? "text-green-400 bg-white/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <Home size={24} />
          </Link>
          <Link
            to="/about"
            className={`p-3 rounded-lg transition-colors duration-200 ${
              location.pathname === "/about"
                ? "text-green-400 bg-white/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <User size={24} />
          </Link>
          <Link
            to="/work"
            className={`p-3 rounded-lg transition-colors duration-200 ${
              location.pathname === "/work"
                ? "text-green-400 bg-white/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <Briefcase size={24} />
          </Link>
          <Link
            to="/contact"
            className={`p-3 rounded-lg transition-colors duration-200 ${
              location.pathname === "/contact"
                ? "text-green-400 bg-white/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <Mail size={24} />
          </Link>
        </div>
      </nav>

      {/* Top Header */}
      <header className="fixed top-0 left-16 right-0 h-12 bg-neutral-900/50 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 z-40">
        <div className="flex items-center gap-8">
          <LogoWordmark />
          <WidgetBreadcrumbs />
        </div>
        <WidgetLocation />
      </header>

      {/* Main Content */}
      <main className="pl-16 pt-12 min-h-screen">
        <div className="relative">{children}</div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-16 right-0 h-12 bg-neutral-900/50 backdrop-blur-md border-t border-white/10 flex items-center justify-between px-4 z-40">
        <div className="flex items-center gap-4 text-sm text-white/60">
          <span>Based in Berlin, Germany</span>
          <span>Local time {new Date().toLocaleTimeString()}</span>
          <span>email: ian@ianworks.dev</span>
          <span>+4917636127937</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/avoian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/ibxibx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://x.com/ibxavo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com/avotravel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            <Instagram size={20} />
          </a>
          <button className="ml-4 px-4 py-1 border border-white/20 rounded text-sm hover:bg-white/10 transition-colors duration-200">
            let's-get-in-touch →
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
