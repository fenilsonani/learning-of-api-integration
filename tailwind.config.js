/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // add material-tailwind components
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/tailwind.config.js", // if using `tailwind.config.js` file
    "./node_modules/@material-tailwind/react/src/**/*.{js,ts,jsx,tsx}", 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}