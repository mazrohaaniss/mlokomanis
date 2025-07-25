/** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           brown: {
             100: '#F5E8C7',
             200: '#D2B48C',
             600: '#8B4513',
             700: '#6B2A1A',
             800: '#4A2C2A',
           },
           yellow: {
             300: '#FFC107',
             500: '#FFCA28',
             600: '#FFB300',
           },
           green: {
             50: '#E8F5E9',
             700: '#2E7D32',
           },
         },
         fontFamily: {
           serif: ['Georgia, serif'],
         },
       },
     },
     plugins: [],
   }