/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://i.ibb.co/9rqnFC6/Screenshot-108-Copy.png')",
        'salad':"url('./src/assets/home/slide1.jpg')",
        'menu':"url('./src/assets/menu/menu-bg.png')",
      },     
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

