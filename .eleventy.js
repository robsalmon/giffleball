const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { minify } = require("terser");
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [null],
    formats: ["webp", "png"]
  });

  let imageAttributes = {
    alt,
    sizes,
    class: "thumbnail img-responsive",
    loading: "lazy",
    decoding: "async",
  };
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline"
  });
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "liquid",
    "pdf",
    "css"
  ]);

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  eleventyConfig.addFilter("readableYear", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy");
  });

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