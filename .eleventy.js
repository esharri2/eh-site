const addShortCodes = require("./config/shortcodes");
const addPassThroughCopies = require("./config/passthroughs");
const addTransforms = require("./config/transforms");
const svgContents = require("eleventy-plugin-svg-contents");


module.exports = function (eleventyConfig) {
  addPassThroughCopies(eleventyConfig);
  addShortCodes(eleventyConfig);
  addTransforms(eleventyConfig);
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addWatchTarget("./_temp/");
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
      layouts: "../_layouts",
      input: "./pages",
    },
  };
};;;
