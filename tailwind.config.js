/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.vue', // Path to Vue.js components
    './src/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },

      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],}
