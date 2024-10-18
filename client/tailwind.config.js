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
        customAboutBackground:'rgb(8, 8, 22)',
        customProjectBackground:'rgb(23, 28, 35)',
        customTagBackground:'rgb(34, 34, 79)',

      },
      backgroundImage:{
        customTagColor:'linear-gradient( 90deg, rgb(255, 224, 234) 20%, rgb(255, 255, 255) 40%, rgb(206, 255, 224) 90% );'
        
      },
      backgroundColor:{
        serviceDiv1:'#14b8a6',
        serviceDiv2:'#eab308',
        serviceDiv3:'#0ea5e9',
        serviceDiv4:'#f97316'
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