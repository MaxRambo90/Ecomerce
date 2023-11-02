/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex:{
          '100':'100',
          '200':'200',
      },
      spacing:{
        'Home': '10rem',
      },
      colors: {
        'anotherBlack': '#2f2f2f',
      },
      backgroundImage: {
        'living': "url('./src/assets/living.png')",
      }
    },
  },
  plugins: [],
}

