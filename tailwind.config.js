/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bg-index": "#17181F",
        "bg-note": "#1F212C",
        "bg-hover": "#272833",
      },
      backgroundImage: {
        "bg-sidebar": "linear-gradient(to right, #20212C, #1F212C)",
        "bg-add": "linear-gradient(45deg, #C348D3, #F96EA8, #FD9680)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
