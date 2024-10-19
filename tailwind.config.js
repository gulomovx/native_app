/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add your JSX/TSX file paths
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('nativewind/tailwind')],
};
