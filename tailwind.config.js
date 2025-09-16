module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'max-500': '500px',
        'max-400': '400px',
        'max-300': '350px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
