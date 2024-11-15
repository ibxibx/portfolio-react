module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        primary: '#4ADE80',
      },
      fontFamily: {
        'sans': ['PP Object Sans', 'sans-serif'],
        'mono': ['PP Neue Machina', 'monospace'],
      },
      keyframes: {
        scrollAnimation: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '15%': { opacity: 1 },
          '85%': { opacity: 1 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        }
      },
      animation: {
        scroll: 'scrollAnimation 3s linear infinite',
      }
    }
  },
  plugins: []
}