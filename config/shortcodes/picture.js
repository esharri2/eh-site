const Image = require("@11ty/eleventy-img");

/**
 * The eleventy-img plugin takes a while to work, 
 * so let's skip all that image processing in development.
 */
const developmentFormats = ["jpeg"];
const productionFormats = ["avif", "webp", "jpeg"];

const picture = (eleventyConfig) => {
  eleventyConfig.addShortcode(
    "picture",
    async function (src, alt, sizes = "100vw", lazy = true) {
      if (alt === undefined)
        throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);

      const metadata = await Image(src, {
        widths: [300, 600, 1200, 1800],
        formats:
          process.env.ELEVENTY_ENV === "production"
            ? productionFormats
            : developmentFormats,
        urlPath: "/images/",
        outputDir: "./_site/images/",
      });

      const lowsrc = metadata.jpeg[0];

      return `<picture>
      ${Object.values(metadata)
        .map((imageFormat) => {
          return `<source type="image/${
            imageFormat[0].format
          }" srcset="${imageFormat
            .map((entry) => entry.srcset)
            .join(", ")}" sizes="${sizes}">`;
        })
        .join("\n")}
        <img
          src="${lowsrc.url}"
          alt="${alt}"
          ${lazy && `loading="lazy"`}
          >
      </picture>`;
    }
  );
};

module.exports = picture;
