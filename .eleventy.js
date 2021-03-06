const addShortCodes = require("./config/shortcodes");
const addPassThroughCopies = require("./config/passthroughs");
const addTransforms = require("./config/transforms");
const addFilters = require("./config/filters");
const svgContents = require("eleventy-plugin-svg-contents");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  addFilters(eleventyConfig);
  addPassThroughCopies(eleventyConfig);
  addShortCodes(eleventyConfig);
  addTransforms(eleventyConfig);
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(syntaxHighlight);
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
