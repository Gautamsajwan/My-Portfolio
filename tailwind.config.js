/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    screens: {
      'phone': {'max': '450px'} // max width = 420px
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    fontFamily: {
      montserrat: "'Montserrat', sans-serif",
      inter: "'Inter', sans-serif",
      homic: "'Homemade Apple', cursive",
      sacramento: "'Sacramento', cursive"
    }
  },
}
export const plugins = [
  require('tailwind-scrollbar'),
]
