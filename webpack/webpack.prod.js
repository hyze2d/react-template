const merge = require('webpack-merge');

const { config } = require('./webpack.base');

// plugins
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

/**
 * Prod configuration
 */
module.exports = merge(config, {
  mode: 'production',
  plugins: [
    /**
     * Clear output
     */
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [root('dist')]
    }),

    /**
     * Make bundle report
     */
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      statsFilename: '../report/stats.html'
    }),

    /**
     * Reduce lodash size
     */
    new LodashModuleReplacementPlugin()
  ]
});
