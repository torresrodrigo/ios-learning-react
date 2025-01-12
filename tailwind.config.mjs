/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Esta línea permite que Tailwind procese archivos TSX y TS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};