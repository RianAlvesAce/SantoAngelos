/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#EA8B4B",
        "secondary-color": "#59120C",
        "shadow-semi-black": "rgb(0,0,0,5%)"
      },
      backgroundImage: {
        "bg1": "url(./assets/bg1.svg)"
      },
      fontFamily: {
        "roboto-condensed": ["Roboto Condensed", "sans-serif"]
      },
      boxShadow: {
        "teste": "1px 1px 10px 0"
      }
    },
  },
  plugins: [],
}

