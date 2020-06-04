module.exports = {
  theme: {
    extend: {
      colors: { beige: "#FFF7E8" },
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
