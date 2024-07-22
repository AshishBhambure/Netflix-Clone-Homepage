/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'section1': "url('/src/assets/Section1Img.jpg')",
      }
    },
  },
  plugins: [],
};
