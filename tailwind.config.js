/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '650px',
      lg: '976px',
      xl: '1320px'
    },
    extend: {},
  },
  plugins: [],
}
