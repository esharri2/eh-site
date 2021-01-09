module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./images/*");
  eleventyConfig.addPassthroughCopy({ "./_temp/main.css": "./main.css" });
  // todo pt only in dev
  eleventyConfig.addPassthroughCopy({ "./scripts/*.js": "./" });
  eleventyConfig.addPassthroughCopy({ "./fonts/*": "./" });
};
