const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");



module.exports = {
  devtool: 'source-map', // generate source map
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    host: '192.168.100.104',
    port: 3232,
  },
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
    publicPath: 'http://192.168.100.104:3232/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, "src/components/Utils"),
      Static: path.resolve(__dirname, "Static")
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.URL': JSON.stringify('http://localhost:5555'),
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new NodePolyfillPlugin(),
    new ModuleFederationPlugin({
      name: "app_two_remote",
      filename: "app_two_remote.js",
      remotes: {
        App1: "app_one_remote@http://192.168.100.104:2323/app_one_remote.js",
      },
      exposes: {
        './ItemList': './src/ItemList'
      },
      shared: ["react", "react-dom", "react-router-dom"]
    }),
  ],
}
