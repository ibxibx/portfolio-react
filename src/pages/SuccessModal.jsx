import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Confetti from "react-confetti";
import { CALENDLY_URL_AFTER_ENQUIRY, WORKSCANAI_URL } from "../constants/links";

const SuccessModal = ({ isOpen, onClose }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
          gravity={0.2}
        />
        <motion.div
          className="w-full max-w-xl bg-neutral-900/50 backdrop-blur-md rounded-lg p-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mb-8 space-y-6">
            <h2 className="text-2xl font-mono">message-sent</h2>
            <div className="space-y-4">
              <br />
              <h3 className="text-3xl font-neue-machina text-primary font-bold">
                Success!
              </h3>
              <p className="text-sm font-mono">
                Thank you very much for your message. Your email has been sent!
              </p>
              <p className="text-sm font-mono">
                I'll get back to you within 24 hours
                <br />
                <br />
                (maximum 48 hours if over the weekend time).
              </p>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <h3 className="text-lg font-mono">one-more-step</h3>
                <p className="text-sm font-neue-machina">
                  Want to move faster? Pick a time for a free 30-minute
                  discovery call and you're set — no back-and-forth needed.
                </p>
                <p className="text-sm font-neue-machina">
                  And if you're looking to modernise old systems that eat time
                  and money, my{" "}
                  <a
                    href={WORKSCANAI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Intelligent Workflow Analyser
                  </a>{" "}
                  scores your workflows for automation potential and ROI in
                  under a minute — a great way to arrive at our call already one
                  step ahead.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-black/50 border border-white/10 rounded hover:bg-white/5 transition-colors duration-200"
            >
              ok →
            </button>
            <a
              href={CALENDLY_URL_AFTER_ENQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="px-6 py-2 text-center bg-primary/10 border border-primary/40 text-primary rounded hover:bg-primary/20 transition-colors duration-200"
            >
              schedule-30-min →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SuccessModal;
