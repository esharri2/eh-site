import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addWatchTarget("./_temp/");
  eleventyConfig.addPassthroughCopy({ "./_temp/global.css": "./global.css" });
  eleventyConfig.addPassthroughCopy({ "./_temp/main.js": "./main.js" });
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });
  eleventyConfig.setUseGitIgnore(false);
}

export const config = {
  templateFormats: ["liquid"],
  dir: {
    data: "../_data",
    includes: "../_includes",
    layouts: "../_layouts",
    input: "./pages",
  },
};
