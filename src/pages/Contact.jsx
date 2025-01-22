import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import SuccessModal from "./SuccessModal";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    website: "",
    email: "",
    message: "",
    agreedToPolicy: false,
  });

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePolicyAccept = () => {
    setFormData((prev) => ({ ...prev, agreedToPolicy: true }));
    setIsPolicyModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company || "N/A",
          website: formData.website || "N/A",
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setIsSuccessModalOpen(true);
      setFormData({
        fullName: "",
        company: "",
        website: "",
        email: "",
        message: "",
        agreedToPolicy: false,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full overflow-y-auto scrollbar-thin">
        <div className="min-h-full flex flex-col items-center p-4 sm:p-6 md:p-8">
          <br />
          <br />
          <br />
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl mb-8 sm:mb-12 lg:mb-16 font-light"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            contact
          </motion.h1>
          <motion.div
            className="w-full max-w-xl bg-neutral-900/50 backdrop-blur-md rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-mono mb-2">write-me</h2>
              <p className="text-sm font-neue-machina">
                Seeking full-time roles in technology companies.
                <br />
                Onsite, hybrid or remote working arrangements are welcome.
                <br />
                <br />
                Reach me via this form or at{" "}
                <span className="text-primary hover:underline cursor-pointer">
                  ian(at)ianworks.dev
                </span>
                <br />I reply within a day, max. within 48 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 font-mono">
              <div>
                <label className="block text-sm mb-2">1 full-name *</label>
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
                <label className="block text-sm mb-2">2 company</label>
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
                <label className="block text-sm mb-2">3 website</label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-white/10 rounded p-3 focus:outline-none focus:border-primary"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm mb-2">4 email-address*</label>
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
                <label className="block text-sm mb-2">5 your-message *</label>
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
                    setFormData({
                      ...formData,
                      agreedToPolicy: e.target.checked,
                    })
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
          <br />
          <br />
          <br />
          <br />

          <PrivacyPolicyModal
            isOpen={isPolicyModalOpen}
            onClose={() => setIsPolicyModalOpen(false)}
            onAccept={handlePolicyAccept}
          />

          <SuccessModal
            isOpen={isSuccessModalOpen}
            onClose={() => setIsSuccessModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
