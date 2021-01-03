const Image = require("@11ty/eleventy-img");

module.exports = async (src, alt, sizes = "100vw", lazy = true) => {
  if (alt === undefined)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);

  // NOTE: I think this was fixed in 0.7.0? Leaving this here in case...
  // ---
  // Image processing causes a slow reload in development.
  // Unless we're doing a product build, just provide a single src with the original image.
  // if (!process.env.ELEVENTY_PRODUCTION) {
  //   return `
  //   <picture>
  //       <img
  //           src="${src}"
  //           alt="${alt}">
  //   </picture>`;
  // }

  const metadata = await Image(src, {
    widths: [300, 600, 1200, 1800],
    formats: ["avif", "webp", "jpeg"],
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
          width=""
          height=""
          alt="${alt}"
          ${lazy && `loading="lazy"`}
          >
      </picture>`;
};
