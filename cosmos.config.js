module.exports = {
  containerQuerySelector: "#root",
  webpackConfigPath: "react-scripts/config/webpack.config.dev",
  globalImports: ["./src/include/jquery.js"],
  publicPath: "public"

  // Optional: Add this when you start using proxies
  // proxiesPath: 'src/cosmos.proxies'
};
