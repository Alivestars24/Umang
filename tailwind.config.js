/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'sunny': '#efda4d',
      'lpurple': '#dabbe3',
      'pinkpurple': '#cc67c2',
      'dpurple': '#871c90',
      'darkestpurple': '#4d0e5a',
    },
    fontFamily: {
      mullish: ["Mulish","sans-serif"],
      cher: ["Cherry Swash","serif"],
      co: ["Comic Neue","sans"],
      gg: ["Grenze Gotisch","serif"],
      mw: [" Merriweather","serif"],
      fre:["Ribeye Marrow","serif"],
      rye:["Rye","serif"],
      Pan:["Pangolin","sans-serif"],
  },},
  },
  plugins: [],
};
