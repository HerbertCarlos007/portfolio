/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f0f8ff',
        'secondary': '#e3e4e6'
      }
    },
  },
  plugins: [],
}

