const colors = {
  spaceCadet: "#2E294E",
  babyPink: "#E8C1C5",
};

module.exports = {
  purge: {
    content: ["./_site/**/*.html"],
  },
  theme: {
    colors: {
      dark: colors.spaceCadet,
      light: colors.babyPink,
    },
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      display: ["Manrope", "sans-serif"],
      body: ["Overpass", "Helvetica", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    spacing: {
      1: ".5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
      5: "4rem",
      6: "6rem",
      7: "8rem",
      8: "10rem"
    },
    extend: {},
  },
};
