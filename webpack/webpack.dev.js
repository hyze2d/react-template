const { merge } = require('webpack-merge');
const { config } = require('./webpack.base');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval-source-map'
});
