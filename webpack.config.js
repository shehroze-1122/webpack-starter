const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    // can have multiple entry files for code-splitting
    // the property name(i.e. bundle) is self assigned
    bundle: path.resolve(__dirname, "src/index"),
  },
  output: {
    // [name] will get replaced by bundle
    // contenthash puts up a unique id besides name for caching
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "dist"),
    // next line make sure to replace the already built js file by a new one
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  // this will add source map file to the destination folder which helps the errors to point out to the actual lines of source code
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack",
      filename: "index.html",
      template: "./src/template.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
};
