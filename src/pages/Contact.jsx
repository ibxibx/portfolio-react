import React, { useState } from "react";
import { motion } from "framer-motion";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    website: "",
    email: "",
    message: "",
    agreedToPolicy: false,
  });

  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handlePolicyAccept = () => {
    setFormData((prev) => ({ ...prev, agreedToPolicy: true }));
    setIsPolicyModalOpen(false);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-xl bg-neutral-900/50 backdrop-blur-md rounded-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-mono mb-2">write-me</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">01 full-name *</label>
            <input
              type="text"
              required
              className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm mb-2">02 company</label>
            <input
              type="text"
              className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm mb-2">03 website</label>
            <input
              type="url"
              className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm mb-2">04 email *</label>
            <input
              type="email"
              required
              className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm mb-2">05 your-message *</label>
            <textarea
              required
              rows={4}
              className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="privacy"
              required
              className="rounded border-white/10"
              checked={formData.agreedToPolicy}
              onChange={(e) =>
                setFormData({ ...formData, agreedToPolicy: e.target.checked })
              }
            />
            <label htmlFor="privacy" className="text-sm">
              I agree with the terms of the{" "}
              <button
                type="button"
                onClick={() => setIsPolicyModalOpen(true)}
                className="text-primary hover:underline"
              >
                Privacy Policy
              </button>
            </label>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-black/50 border border-white/10 rounded hover:bg-white/5 transition-colors duration-200"
          >
            submit-message →
          </button>
        </form>
      </motion.div>

      <PrivacyPolicyModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
        onAccept={handlePolicyAccept}
      />
    </div>
  );
};

export default Contact;
