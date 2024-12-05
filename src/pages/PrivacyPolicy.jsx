import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-4xl bg-neutral-900/50 backdrop-blur-md rounded-lg p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-mono mb-2">privacy-policy</h2>
        </div>

        <div className="space-y-8 text-white/90">
          <section className="p-4">
            <h3 className="text-sm font-mono mb-2">1. Introduction</h3>
            <p className="pl-4 text-sm">
              This Privacy Policy describes how Ian Buimistr ("I", "me", or
              "my") collects, uses, and protects your personal information when
              you use the contact form on this website.
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
              technical and organizational measures to protect your data against
              unauthorized access, alteration, disclosure, or destruction.
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
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
