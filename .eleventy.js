const site = require("./src/_data/site");

module.exports = function (eleventyConfig) {
  // Add this line to copy the CNAME from src to _site
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/favicon.png");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: site.pathPrefix,
  };
};
