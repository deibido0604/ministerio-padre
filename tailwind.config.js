/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        gold: {
          50: '#fbf9e6',
          100: '#f5f0c0',
          200: '#efe699',
          300: '#e9dc73',
          400: '#e3d14c',
          500: '#ddc726',
          600: '#b3a11e',
          700: '#8a7b17',
          800: '#625510',
          900: '#3a300a',
        },
      },
    },
  },
  plugins: [],
}