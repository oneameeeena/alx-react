const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist"),
  },
  devServer: {
     static: {
	     directory: path.resolve(__dirname, "./dist"),
	  },
    hot: true,
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  
  plugins: [
	  new HtmlWebpackPlugin({
		  title: "web zabbi",
	  }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
};
