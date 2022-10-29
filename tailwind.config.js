/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-color' : '#ff8400',
        'back-color' : '#0d0a1f',
        'hover-color' : '#334257',
        'black' : '#191919',
        'white' : '#fff',
        'error' : '#ff6347',
      }
    },
  },
  plugins: [],
}