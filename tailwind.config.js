/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'principal': '#E6DEFC',
      'second': '#171412'
    },
    extend: {
      fontFamily: {
        'switzer': ['Switzer', sans-serif],
      }
    },
  },
  plugins: [],
}