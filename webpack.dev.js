const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
  // config object
  mode: "development",
  entry: {
    app: "./src/index.js" // entry file
  },
  output: {
    // output
    path: path.resolve(__dirname, "dist"), // ouput path
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                [
                  "transform-react-jsx",
                  {
                    // jsx
                    pragma: "h"
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "css-hot-loader" //css hot
          },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
            // Not Use modules
            // options: {
            //     modules: true,
            //     localIdentName: '[name]_[local]_[hash:7]'
            // },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
          test: /\.(eot|svg|ttf|woff2?)$/,
          use: [{
              loader: 'file-loader',
              options: {
                  name: '[name]-[hash:7].[ext]',
                  outputPath: 'assets/fonts'
              }
          }]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              limit: 8192,
              outputPath: "assets/"
            }
          }
        ]
      }
    ] // end rules
  },
  plugins: [
    // webpack plugins
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    open: true
  },
  devtool: "eval-source-map" // enable devtool for better debugging experience
};

module.exports = config;