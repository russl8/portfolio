/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova'],
      },
      colors: {
        'lightGray': '#fffcf2',
        'gray': '#ccc5b9',
        'darkGray': '#403d39',
        'black': '#252422',
        'color': '#eb5e28',
      },
      variants: {
        animation: ["motion-safe"]
      }
    }
  },
  plugins: [],
}