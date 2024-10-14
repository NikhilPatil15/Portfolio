/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:"Quicksand",
      colors:{
        customBackground: 'rgb(8, 7, 11)',
        customProjectBackground:'rgb(23, 28, 35)'
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' }, 
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)',opacity:0},
          '50%': { transform: 'translateY(0)', opacity:1},
          '100%': { transform: 'translateY(100%)',opacity:0},
        },
      },
      animation: {
        'spin-reverse-slow': 'spin-reverse 50s linear infinite', 
        'slide-down-text': 'slide-down 3s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}