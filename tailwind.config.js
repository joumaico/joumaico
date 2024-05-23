/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        questrial: ["Questrial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
