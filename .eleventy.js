module.exports = function(eleventyConfig) {
  // Pass through CSS, Image, and Favicon assets
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: "/vague-de-gout/"
  };
};
