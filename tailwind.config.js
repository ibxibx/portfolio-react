module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        primary: "#4ADE80",
      },
      backdropBlur: {
        md: "12px",
      },
      fontFamily: {
        sans: ["PP Object Sans", "sans-serif"],
        mono: ["PP Neue Machina", "monospace"],
      },
      keyframes: {
        scrollAnimation: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "15%": { opacity: 1 },
          "85%": { opacity: 1 },
          "100%": { transform: "translateY(100%)", opacity: 0 },
        },
        "pulse-down": {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "translateY(100%)", opacity: 0 },
        },
      },
      animation: {
        scroll: "scrollAnimation 3s linear infinite",
        "pulse-down": "pulse-down 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
