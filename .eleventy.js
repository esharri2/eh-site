const addShortCodes = require("./config/shortcodes");
const addPassThroughCopies = require("./config/passthroughs");
const addTransforms = require("./config/transforms");

module.exports = function (eleventyConfig) {
  addPassThroughCopies(eleventyConfig);
  addShortCodes(eleventyConfig);
  addTransforms(eleventyConfig);
  // Misc options

  // eleventyConfig.addWatchTarget("./_temp/main.css");
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      data: "../_data",
      includes: "../_includes",
      input: "pages",
    },
  };
};;;
