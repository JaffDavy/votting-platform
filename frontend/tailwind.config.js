/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '2560px',
        "screen": "1920px",
      },
      colors: {
        "custom-blue": "#2C6470",
        "custom-first": "#124544",
        "custom-second": "#165544",
        "custom-third": "#1A6B5F",  
        "custom-fourth": "#208F76",
        "button-c": "#2ECC71",
        "custom-cyan": "#E8F6F3"

      },
    },
    fontFamily: {
      sans: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
}