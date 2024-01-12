/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ikea-blue': '#0057AD',
        'ikea-blue-dark': '#013194',
        'ikea-yellow': '#FBDA0C',
        'ikea-interactive': '#F5F5F5',
        'ikea-interactive-dark': '#DFDFDF',
        wrong: '#E00651',
        'wrong-text': '#fff',
        almost: '#FFDB00',
        'almost-text': '#000',
        correct: '#008844',
        'correct-text': '#fff',
      },
    },
  },
  plugins: [],
}
