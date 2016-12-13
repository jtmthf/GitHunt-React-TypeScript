const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './ui/client.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.css/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(j|t)sx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /(node_modules)/,
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }],
  },
  plugins: [
    new CheckerPlugin(),
  ],
  devServer: {
  },
  devtool: 'eval-source-map',
};
