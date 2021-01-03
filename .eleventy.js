const functionFiles = require("./functions/index.js")();
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./images/*");
  eleventyConfig.addPassthroughCopy({ "./_temp/main.css": "./main.css" });
  eleventyConfig.addPassthroughCopy({ "./fonts/*": "./" });

  for (const file of functionFiles) {
    const name = file.split(".")[0];
    eleventyConfig.addShortcode(name, require(`./functions/${file}`));
  }

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addWatchTarget("./_temp/main.css");

  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      data: "../_data",
      layouts: "../_layouts",
      input: "pages",
    },
  };
};
