/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D7263D',
        secondary: '#F46197',
        accent: '#7768AE',
        cta: '#02C39A',
        highlight: '#B3001B',
        background: '#FFF0F3',
        ink: '#340710',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}