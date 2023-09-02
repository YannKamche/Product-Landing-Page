/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-text": "#3e3e3e",
        "link-color": "#ff0073",
        "botton-bg": "#fff",
        "botton-hover": "#fdf3f8",
        "item-blue": "#57c7e4",
        "item-yellow": "#ecdc47"
      },
      backgroundImage: {
        'custom-image': "url('../assets/bk.png')",
      },
    },
    container: { 
      center: true
    },
    fontFamily: {
      body: ['Poppins']
    }
  },
  plugins: [],
}

