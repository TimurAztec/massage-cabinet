/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.35)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.5)',
            '0 45px 65px rgba(0, 0, 0, 0.5)'
        ]
      }
    },
  },
  plugins: [],
}
