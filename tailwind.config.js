/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function({addUtilities}) {
  addUtilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-text": "#3e3e3e",
        "link-color": " hsl(300, 76%, 60%)",
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
  plugins: [rotateY],
}

