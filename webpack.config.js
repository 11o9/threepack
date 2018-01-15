const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ROOT_PATH = __dirname;
const SRC_PATH = path.join(ROOT_PATH, 'src');
const DIST_PATH = path.join(ROOT_PATH, 'dist');

module.exports = {
  entry: path.join(SRC_PATH, 'entry.js'),

  output: {
    path: DIST_PATH,
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, 'index.html'),
    }),
  ],

  devtool: 'cheap-module-inline-source-map',

  devServer: {
    open: true
  },
};
