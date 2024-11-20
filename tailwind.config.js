/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontWeight: {
      normal: 400,
      bold: 700
    },
    colors: {
      neutral: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        grayishBlue: {
          100: 'hsl(223, 64%, 98%)',
          200: 'hsl(220, 14%, 75%)',
          300: 'hsl(219, 9%, 45%)',
          400: 'hsl(220, 13%, 13%)'
        }
      },
      primary: {
        orange: {
          100: 'hsl(25, 100%, 94%)',
          200: 'hsl(26, 100%, 55%)'
        }
      }
    },
    extend: {}
  },
  plugins: []
};
