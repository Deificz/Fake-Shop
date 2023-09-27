/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage:{
          'custom': "url('./assets/Images/bg.jpg')",
      },
      screens:{
        'sm_max': {'max': '700px'},
      }
    },
  },
  plugins: [],
}

