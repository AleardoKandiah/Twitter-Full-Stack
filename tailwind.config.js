/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // ADD special twitter color for hovering
    extend: {
      colors: {
        twitter: '#00ADED',
      }
    },
  },
  plugins: [],
}
