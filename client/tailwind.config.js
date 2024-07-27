const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: colors.indigo,
        customMaroon: "#541212",
        customGreen: "#8B9A46",
        customWhite: "#D9D9D9",
        customNavy: "#072439",
        customBeige: "#C59B6B",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};