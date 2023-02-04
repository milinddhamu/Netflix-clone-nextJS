/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "3xl":"1920px",
      },
      backgroundImage: {
        'my-background':"url('/public/background-nextflix.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
