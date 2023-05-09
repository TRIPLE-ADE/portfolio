/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'deep-blue': '#0A192F',
      'gray': '#DEDEDE',
      'deep-gray' : '#828CA9',
      'deep-green': '#3D9587',

    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif'],
    },
    
    extend: {
      screens: {
        'smallScreen': '900px'
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

