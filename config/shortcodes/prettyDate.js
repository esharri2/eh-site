const prettyDate = (eleventyConfig) => {
  eleventyConfig.addShortcode("prettyDate", function (date) {
    return new Date(date).toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  });
};

module.exports = prettyDate;
