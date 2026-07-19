// Central place for external links used across the site.
// Swap these constants to change destinations without touching markup.

// 30-minute discovery call. Same event used by the WorkScanAI report CTA.
const CALENDLY_BASE = "https://calendly.com/ian-ianworks/30min";

// Attribute bookings back to the surface that drove them, so you can tell a
// cold contact-page booking from a warm post-enquiry one.
const withSource = (content) =>
  `${CALENDLY_BASE}?utm_source=ianworks&utm_medium=website&utm_campaign=contact&utm_content=${content}`;

// Booking CTA on the contact page itself.
export const CALENDLY_URL = withSource("contact-page");

// Booking CTA shown after the contact form is successfully submitted.
export const CALENDLY_URL_AFTER_ENQUIRY = withSource("form-success");

export const WORKSCANAI_URL = "https://workscanai.vercel.app";
