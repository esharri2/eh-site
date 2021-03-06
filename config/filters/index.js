module.exports = (eleventyConfig) => {
  require("./permalinkNotFalse")(eleventyConfig);
  require("./jsmin")(eleventyConfig);

};
