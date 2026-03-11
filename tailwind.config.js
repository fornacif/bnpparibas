/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './blocks/**/*.{js,html}',
    './scripts/**/*.js',
    './head.html',
    './nav.html',
    './footer.html',
    './404.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f4ee',
          100: '#cce9de',
          200: '#99d3bc',
          300: '#66be9b',
          400: '#33a879',
          500: '#00965E',
          600: '#007A4C',
          700: '#005C39',
          800: '#003D26',
          900: '#001F13'
        }
      }
    }
  },
  plugins: [],
}
