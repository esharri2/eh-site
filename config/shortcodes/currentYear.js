const currentYear = (eleventyConfig) => {
  eleventyConfig.addShortcode("currentYear", function () {
    return new Date().toLocaleDateString(undefined, {
      year: "numeric",
    });
  });
};

module.exports = currentYear;
