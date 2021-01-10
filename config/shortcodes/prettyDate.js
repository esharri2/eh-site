const prettyDate = (eleventyConfig) => {
  eleventyConfig.addShortcode("prettyDate", function (date) {
    const rawDate = date || new Date().getTime();
    return new Date(rawDate).toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  });
};

module.exports = prettyDate;
