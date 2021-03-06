const permalinkNotFalse = (eleventyConfig) => {
  eleventyConfig.addFilter("permalinkNotFalse", function (items) {
    return items.filter((item) => item.data.permalink !== false);
  });
};

module.exports = permalinkNotFalse;
