module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    "postcss-import": {},
    autoprefixer: {},
    cssnano: ctx.env === "production" ? {} : false,
  },
});
