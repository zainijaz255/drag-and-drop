/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(97, 138, 220, 1)',
        customBlack: 'rgba(17, 17, 17, 1)'
      },
      screens: {
        'sm': '350px',
      },
    },
  },
  plugins: [],
}
