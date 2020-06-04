module.exports = {
  theme: {
    extend: {
      colors: { beige: "##ffe6ba" },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    container: false,
  },
};
