module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./images/*");
  eleventyConfig.addPassthroughCopy({ "./_temp/main.css": "./main.css" });
  eleventyConfig.addPassthroughCopy({ "./_temp/main.js": "./main.js" });
  eleventyConfig.addPassthroughCopy({ "./assets/fonts/*": "./" });
  eleventyConfig.addPassthroughCopy({ "./assets/favicons/*": "./" });
};
