/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#02B0E1",     // Azul
        secondary: "#FCDE35",   // Amarillo
        tertiary: "#FF8000",      // Naranja
        neutral: "#59595C",     // Gris
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fuente para párrafos y elementos generales
        serif: ['Playfair Display', 'serif'], // Fuente para títulos
      },
    },
  },
  plugins: [],
}

