/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        bispo: ["../fonts/BispoPRO-Regular.woff2"],
      },
    },
  },
  plugins: [],
};
