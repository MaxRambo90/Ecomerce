/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'anotherBlack': '#2f2f2f',
        'anotherGray': '#4c4c4c',
      },
      zIndex:{
          '100':'100',
          '200':'200',
      },
      spacing:{
        'Home': '10rem',
      },
      backgroundImage: {
        'living': "url('./src/assets/living.png')",
      }
    },
  },
  plugins: [],
}