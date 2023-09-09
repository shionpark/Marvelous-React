const webpack = require("webpack");

module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-env",
    "@babel/preset-typescript",
  ],
  plugins: [new webpack.ProvidePlugin({ React: "react" })],
};
