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
        '.outline-none': {
          outline: 'none',
        },
        '.modal::backdrop': {
          background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(54, 54, 54, 0.5))',
          'backdrop-filter': 'blur(3px)',
        },
        '.box-shadow': {
          boxShadow: '0 5px 10px 0 rgba(35, 35, 35, 0.5), 5px 0 10px 0 rgba(35, 35, 35, 0.5)',
        },
        '@keyframes appear': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        '.animate-appear': {
          animation: 'appear 0.3s ease-in-out forwards',
        },
        '.text-select-none': {
          'user-select': 'none',
        },
      };
      
      addUtilities(newUtilities, ['responsive', 'hover', 'motion-safe']);
    },
  ],
};
