/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver' : '#F5F7FA',
        'neutralDGrey' : '#4D4D4D',
        'brandPrimary' : '#4CAF4F',
        'neutralGrey' : '#717171',
        'gray900' : '#18191F',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}