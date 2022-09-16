//support MDX
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
    rehypePlugins: [],
  },
});

//Regular next config
const RegularNextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withMDX({
  ...RegularNextConfig,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
