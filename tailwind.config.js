/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#D97706",
      },
      screens:{
        lg:'1170px'
      }
    },
  },
  plugins: [],
}
