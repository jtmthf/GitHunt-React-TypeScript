const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './ui/client.js',
  output: {
    path: 'api/dist/',
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.css/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader',
      }),
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
    }, {
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /(node_modules)/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CheckerPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('bundle.css'),
  ],
};
