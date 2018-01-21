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

  resolve: {
    alias: {
      'three/OrbitControls': path.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js'),
      'three/OBJLoader': path.join(__dirname, 'node_modules/three/examples/js/loaders/OBJLoader.js')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, 'index.html'),
    }),
    // new HtmlWebpackPlugin.ProvidePlugin({
    //   'THREE': 'three'
    // }),
  ],

  devtool: 'cheap-module-inline-source-map',

  devServer: {
    open: true
  },


};
