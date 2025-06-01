/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',     // HTML files in public folder
      './src/**/*.{js,jsx,ts,tsx}', // JS/TS files in src (optional, adjust as needed)
    ],
    theme: {
      extend: {
        fontFamily: {
          josefinSans: ['"Josefin Sans"', 'sans-serif'], // Add Google Font here
        },
        colors: {
          cyan: 'hsl(180, 66%, 49%)',   // Add your custom color here
        },
      },
    },
    plugins: [],
   }