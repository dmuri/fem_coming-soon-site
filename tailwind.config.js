/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',   // modify this for 'sm' breakpoint
      'md': '768px',   // modify this for 'md' breakpoint
      'lg': '950px',  // modify this for 'lg' breakpoint
      'xl': '1280px',  // modify this for 'xl' breakpoint
      '2xl': '1536px', // modify this for '2xl' breakpoint
    },
    extend: {
      gridTemplateColumns: {
        '70-30': '70% 30%',
      },
      fontWeight: {
        'normal': 300,
        'semibold': 600,
        'bold': 700,
      },
      colors: {
        primary: {
          darkCyan: 'hsl(185, 75%, 39%)',
          veryDarkDesaturatedBlue: 'hsl(229, 23%, 23%)',
          darkGrayishBlue: 'hsl(227, 10%, 46%)',
        },
        neutral: {
          darkGray: 'hsl(0, 0%, 59%)',
          veryDarkBlue: 'hsl(209, 33%, 12%)',
        },
       secondary: {
          paleBlue: 'hsl(223, 100%, 88%)',
          lightRed: 'hsl(354, 100%, 66%)',
        },
      },
    },
  },
  plugins: [],
}
