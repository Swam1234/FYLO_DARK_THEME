/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {

      colors: {
        'primary-1': 'hsl(219, 30%, 18%)',
        'primary-2': 'hsl(217, 28%, 15%)',
        'primary-3': 'hsl(218, 28%, 13%)',
        'primary-4': 'hsl(216, 53%, 9%)',

        'cyan': 'hsl(176, 68%, 64%)',
        'blue': 'hsl(198, 60%, 50%)',
        'light-red': 'hsl(0, 100%, 63%)',
      },

      fontFamily: {
        'raleway': ["'Raleway', sans-serif"],
        'open-sans': ["'Open Sans', sans-serif"],
      },

      
    },
  },
  plugins: [],
}
