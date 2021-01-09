// module.exports = {
//   plugins: [
//     require("postcss-import"),
//     require(`tailwindcss`)(`./styles/tailwind.config.js`),
//     require("autoprefixer"),
//     require("cssnano")({
//       preset: "default",
//     }),
//   ],
// };

module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    'postcss-import': {},
    tailwindcss: {config: './styles/tailwind.config.js' },
    autoprefixer: {},
    cssnano: ctx.env === 'production' ? {} : false,
  },
})
