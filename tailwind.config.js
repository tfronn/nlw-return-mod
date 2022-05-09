module.exports = {
  darkMode: 'class',
  deposit: 'class',
  withdraw: 'class',

  content: [
    "./**/*.tsx",
    "./src/**/*.tsx",
    "./index.html"
    ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6'
        },
        red: {
          500: '#E52E4D'
        },
        greenDiv: {
          500: '#33CC95'
        },
        title: {
          500: '#363F5F',
          300: '#969CB3'
        }
      },
      borderRadius: {
        md: '4px'
      },
      fontSize: {
        '4xl': '2rem'
      },
      lineHeight: {
        '10': '3rem'
      },
      opacity: {
        '5': '0.5'
      },
      border: {
        '2': '1px'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
  
}
