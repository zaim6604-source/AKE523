/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gulalai: {
          primary: '#1B4965',
          secondary: '#5FA8D3',
          accent: '#C9CCD5',
          cta: '#FF6B35',
          highlight: '#0B3954',
          background: '#F2F6F9',
          ink: '#0B2436',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}