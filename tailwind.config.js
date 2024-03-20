/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none',
        },
      };
      
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
