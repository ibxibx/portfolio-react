/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
      },
      minHeight: {
        'svh': '100svh',
      },
      blur: {
        '100px': '100px',
        '150px': '150px',
        '200px': '200px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ],
}

// .eslintrc.js
module.exports = {
  extends: ["react-app"],
  rules: {
    // Custom rules here
  }
}