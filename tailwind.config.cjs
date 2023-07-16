/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      "fredoka": ["Fredoka One"]
    },
    extend: {
      animation: {
        widthFill: 'widthFill 1s linear forwards',
      },

      keyframes: theme => ({
        widthFill: {
          '0%': {
            width: "0%"
          },
          '100%': {
            width: "100%"
          },
        },
      }),
    },
  },
  plugins: [],
}
