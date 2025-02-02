/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00517C',
        secondary: '#FEC657',
        accent: '#ADC942',
        white: '#FFFFFF',
        black: '#000000',
      }
    },
  },
  plugins: [],
};