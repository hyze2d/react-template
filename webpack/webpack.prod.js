const { merge } = require('webpack-merge');
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    /**
     * Clear output
     */
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),

    /**
     * Make bundle report
     */
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../report/report.html'
    })

    /**
     * Reduce lodash size
     * NOTE: currently that plugin doesn't support webpack 5
     */
    // new LodashModuleReplacementPlugin()
  ]
});
