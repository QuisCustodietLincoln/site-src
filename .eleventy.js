module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("documents/**/*.pdf");
  eleventyConfig.addPassthroughCopy("documents/**/*.docx");
  eleventyConfig.addPassthroughCopy("documents/**/*.xlsx");

  eleventyConfig.addFilter("statusClass", function(status) {
    return status.toLowerCase()
      .replace(/[\s/]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  });

  eleventyConfig.addFilter("dateDisplay", function(dateStr) {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    if (dateStr instanceof Date) {
      return `${months[dateStr.getUTCMonth()]} ${dateStr.getUTCDate()}, ${dateStr.getUTCFullYear()}`;
    }
    const [y, m, d] = String(dateStr).split("-");
    return `${months[parseInt(m) - 1]} ${parseInt(d)}, ${y}`;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"]
  };
};
