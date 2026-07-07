/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF206E',
          50: '#FFF0F5',
          100: '#FFD6E4',
          200: '#FFADCA',
          300: '#FF85AF',
          400: '#FF5C95',
          500: '#FF206E',
          600: '#D4005A',
          700: '#AA0048',
          800: '#800036',
          900: '#550024',
        },
        secondary: '#FBFF12',
        accent: '#41EAD4',
        cta: '#41EAD4',
        highlight: '#D4005A',
        background: '#FFF8E0',
        ink: '#1A1423',
      },
      animation: {
        'float': 'floatY 4s ease-in-out infinite',
        'grad-move': 'gradMove 5s infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'marquee': 'marquee 28s linear infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradMove: {
          '0%': { backgroundPosition: '0%' },
          '50%': { backgroundPosition: '100%' },
          '100%': { backgroundPosition: '0%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
}