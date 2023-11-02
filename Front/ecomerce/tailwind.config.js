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
        'anotherGray': '#4c4c4c'
      },
      zIndex:{
          '100':'100',
          '200':'200',
      },
      spacing:{
        'Home': '40rem',
        'hDivSecundarioHome':'70%',
        'wDivSecundarioHome':'91%',
        '640':'640px',
        '770':'770px',
      },
      screens:{
        'Celular':'700px',
        'NueveSiete':'907px',
      }
    },
  },
  plugins: [],
}

