module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy({ "documents/files": "documents/files" });

  eleventyConfig.addFilter("statusClass", function(status) {
    return status.toLowerCase().replace(/\s+/g, "-");
  });

  eleventyConfig.addFilter("dateDisplay", function(dateStr) {
    const [y, m, d] = dateStr.split("-");
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
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
