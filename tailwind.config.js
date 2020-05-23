module.exports = {
  theme: {
    colors: { beige: "#FCFAF6" },
    extend: {
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
