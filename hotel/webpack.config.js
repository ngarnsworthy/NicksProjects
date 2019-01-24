const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  node: {
    // fs: true,
    path: true,
    https: true
  },
  plugins: [
  new HtmlWebpackPlugin({template: 'home.html'}),
  new HtmlWebpackPlugin({filename: 'basement.html', template: 'basement.html'}),
  new HtmlWebpackPlugin({filename: 'coupon.html', template: 'coupon.html'}),
  new HtmlWebpackPlugin({filename: 'pay.html', template: 'pay.html'}),
  new HtmlWebpackPlugin({filename: 'living.html', template: 'living.html'}),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.optimize\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    canPrint: true
  })

  ],
  mode: 'production',
  entry: './js.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js.js'
  }

};
