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
    dir: {
      input: './',
      output: './_site',
      layouts: './includes',
    },
    templateFormats: [
    "md",
    "njk",
    "liquid",
    "pdf",
    "css"
    ],
    pathPrefix: '/giffleball'
  };
};