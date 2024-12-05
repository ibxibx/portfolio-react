import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PrivacyPolicyModal = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-4xl bg-neutral-900/50 backdrop-blur-md rounded-lg p-12 relative"
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

          <div className="mb-8">
            <h2 className="text-2xl font-mono mb-2">privacy-policy</h2>
          </div>

          <div className="space-y-8 text-white/90 max-h-[60vh] overflow-y-auto pr-4">
            <section className="p-4">
              <h3 className="text-sm font-mono mb-2">1. Introduction</h3>
              <p className="pl-4 text-sm">
                This Privacy Policy describes how Ian Buimistr ("I", "me", or
                "my") collects, uses, and protects your personal information
                when you use the contact form on this website.
              </p>
            </section>

            <section className="p-4">
              <h3 className="text-sm font-mono mb-2">
                2. Information Collection
              </h3>
              <p className="pl-4 text-sm mb-2">
                Through the contact form, I collect the following information:
              </p>
              <ul className="list-disc pl-8 mt-2 space-y-2">
                <li className="text-sm">Full name</li>
                <li className="text-sm">Email address</li>
                <li className="text-sm">Company name (if provided)</li>
                <li className="text-sm">Website URL (if provided)</li>
                <li className="text-sm">Message content</li>
              </ul>
            </section>

            <section className="p-4">
              <h3 className="text-sm font-mono mb-2">3. Use of Information</h3>
              <p className="pl-4 text-sm">
                I use your information solely for the purpose of responding to
                your inquiries and maintaining communication with you. Your data
                will never be shared with third parties, sold, or used for
                marketing purposes.
              </p>
            </section>

            <section className="p-4">
              <h3 className="text-sm font-mono mb-2">4. Data Protection</h3>
              <p className="pl-4 text-sm">
                Your personal information is stored securely and handled in
                accordance with GDPR regulations. I implement appropriate
                technical and organizational measures to protect your data
                against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </section>

            <section className="p-4">
              <h3 className="text-sm font-mono mb-2">5. Your Rights</h3>
              <p className="pl-4 text-sm mb-2">
                Under GDPR, you have the right to:
              </p>
              <ul className="list-disc pl-8 mt-2 space-y-2">
                <li className="text-sm">Access your personal data</li>
                <li className="text-sm">Rectify inaccurate personal data</li>
                <li className="text-sm">
                  Request deletion of your personal data
                </li>
                <li className="text-sm">Withdraw your consent at any time</li>
              </ul>
            </section>

            <section className="p-4">
              <h3 className="text-sm font-mono mb-2">6. Contact</h3>
              <p className="pl-4 text-sm">
                For any privacy-related concerns or to exercise your rights,
                please contact me directly at [ian@ianworks.dev].
              </p>
            </section>

            <section className="text-sm text-white/70 mt-8 p-4">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </section>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onAccept}
              className="px-6 py-2 bg-black/50 border border-white/10 rounded hover:bg-white/5 transition-colors duration-200"
            >
              accept →
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;
