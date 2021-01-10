module.exports = (eleventyConfig) => {
  require("./picture")(eleventyConfig);
  require("./prettyDate")(eleventyConfig);
  require("./currentYear")(eleventyConfig);
};
