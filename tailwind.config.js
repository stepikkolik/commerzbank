/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        commerz_ye: "#FEDD30",
        silver: "#F5F7FA",
        tGray: "#4D4D4D",
        darkCommerz: "#00414C",
      },

      fontFamily: {
        inter: ["Inter", "semibold"],
      },

      height: {
        firstparagraph: "45rem"
      },

      fontSize: {
        lg: "4rem"
      },

      transitionProperty: {
        'height': 'height',
        'width': 'width'
        }
    },
  },
  plugins: [],
}