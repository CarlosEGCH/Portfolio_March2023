/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#C4F011',
      'background': '#182229',
      'gray' : '#6B6E77',
      'white': '#fff'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
    }
  }
}