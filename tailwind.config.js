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
        'background': '#16161a',
        'cardbackground': '#242629',
        'maintext': '#fffffe',
        'subtext': '#94a1b2',
        'color': '#7f5af0',
      },
      variants: {
        animation: ["motion-safe"]
      }
    }
  },
  plugins: [],
}