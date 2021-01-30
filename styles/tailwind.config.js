const colors = {
  sienna: "#210203",
  siennaDarker: "#0f0101",
  bone: "#D9CFC1",
  boneDarker: "#d2c6b5",
};

module.exports = {
  darkMode: "media",
  purge: {
    content: ["./_site/**/*.html"],
  },
  theme: {
    boxShadow: {
      sm:
        "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",
      DEFAULT:
        "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)",
      md:
        "0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20)",
      lg:
        "0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)",
      xl:
        "0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)",
      "2xl":
        "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)",
      "3xl":
        "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)",
      inner:
        "inset 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20)",
      none: "none",
    },
    colors: {
      dark: colors.sienna,
      "dark-darkened": colors.siennaDarker,
      light: colors.bone,
      "light-darkened": colors.boneDarker,
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      display: ["Overpass", "Helvetica", "sans-serif"],
      body: ["Manrope", "Helvetica", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    spacing: {
      0: "0",
      1: ".5rem",
      2: "1rem",
      3: "1.5rem",
      4: "2rem",
      5: "4rem",
      6: "6rem",
      7: "8rem",
      8: "10rem",
    },
    extend: {
      animation: {
        "fade-in": "fadeIn .2s linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  variants: {
    extend: {
      padding: ["first", "last"],
    },
  },
};
