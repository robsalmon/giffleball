const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { minify } = require("terser");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "liquid",
    "pdf",
    "css"
  ]);

  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
code,
callback

  )
  {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {

      console.error("Terser error: ", err);
    callback(null, code);
    }
  }
  );

  eleventyConfig.addPassthroughCopy("cv");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("scripts");

  return {
    dir: {
      input: './',
      output: './_site',
      layouts: './_includes',
    },
    templateFormats: [
    "md",
    "njk",
    "liquid",
    "pdf",
    "css"
    ]
  };
};