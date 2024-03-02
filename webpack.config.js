const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/index.js",
    writing: "./src/js/writing.js",
  },
  devServer: {
    static: "./dist",
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html", // index.html iig duurialgana
    }),
    new HtmlWebpackPlugin({
      filename: "comingSoon.html",
      template: "src/comingSoon.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "writing.html",
      template: "src/writing.html",
      chunks: ["main", "writing"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
