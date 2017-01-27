var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  devServer: {
    port: 8888,
    stats: 'errors only'
  },
  context: path.join(__dirname, './app'),
  entry: [
    './js/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'index.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
