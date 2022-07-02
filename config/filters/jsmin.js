/**
 * For inling minified JS using includes
 */

const { minify } = require("terser");

const jsmin = (eleventyConfig) => {
  eleventyConfig.addLiquidFilter("jsmin", async function (code) {
    try {
      const minified = await minify(code);
      return minified.code;
    } catch (err) {
      console.error("Terser error: ", err);
      return code;
    }
  });
};

module.exports = jsmin;
