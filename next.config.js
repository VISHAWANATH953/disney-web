const withPWA = require("next-pwa");

module.exports = withPWA({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  compress: true,
  mode: "production",
  swcMinify:true,
styledComponents: true,
  pwa: {
    dest: "public",
  },
});
