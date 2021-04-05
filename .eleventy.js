const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "liquid",
    "pdf",
    "css"
  ]);

  eleventyConfig.addPassthroughCopy("cv");
  eleventyConfig.addPassthroughCopy("img");

  return {
    pathPrefix: '/giffleball'
  };
};