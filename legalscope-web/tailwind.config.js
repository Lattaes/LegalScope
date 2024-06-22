const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        indigo: colors.indigo,
        customMaroon: '#541212',
        customGreen: '#8B9A46',
      },
      fontFamily: {
        // Tambahkan font
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Tambahkan plugin
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
