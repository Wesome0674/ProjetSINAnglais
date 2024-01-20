/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'principal': '#E6DEFC',
        'second': '#171412'
      },
      fontFamily: {
        switzer: ['Switzer'],
        climate: [ 'Climate Crisis'],
      }
    },
  },
  plugins: [],
}