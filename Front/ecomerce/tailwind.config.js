/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        'Home': '40rem',
        'hDivSecundarioHome':'70%',
        'wDivSecundarioHome':'91%',
      }
    },
  },
  plugins: [],
}

