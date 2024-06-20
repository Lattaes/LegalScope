const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        indigo: colors.indigo,
      },
      fontFamily: {
        // Tambahkan font tambahan jika diperlukan
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Tambahkan plugin tambahan jika diperlukan
    // Misalnya, plugin untuk mengaktifkan varian dark mode
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
