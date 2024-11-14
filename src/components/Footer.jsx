import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Logo and Description */}
        <motion.div 
          className="mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold">Ian</h3>
          <p className="text-sm opacity-75">
            Web Developer & Designer based in Germany.
          </p>
        </motion.div>

        {/* Center Section: Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/work" className="hover:underline">Work</Link>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4">
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <i className="fab fa-twitter"></i>
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <i className="fab fa-github"></i>
          </motion.a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Ian Baumeister. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;