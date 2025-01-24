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
        'custom-blue': '#0A3D62',
        "custom-first": "#124544",
        "custom-second": "#165544",
        "custom-third": "#1A637E",  
        "custom-fourth": "#207089",
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