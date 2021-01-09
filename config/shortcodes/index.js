module.exports = (eleventyConfig) => {
  require("./image")(eleventyConfig);
  require("./prettyDate")(eleventyConfig);
};
