/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    extend: {
      colors: {
        'black': '#3D3D3D',
        'grey': '#F4F4F4',
        'violet': '#6943FF',
        'violet-dark': '#5A537B',
        'violet-light': '#b295ff',
      },
    },
  },
  plugins: [],
}

