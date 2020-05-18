const {
  DefinePlugin,
  optimize,
  ContextReplacementPlugin,
  IgnorePlugin
} = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const {
  toProcessEnv,
  root,
  images,
  use,
  production,
  stage,
  enviroment
} = require('./webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CircularDependencyPlugin = require('circular-dependency-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');

/**
 * Plugins
 */
const { OccurrenceOrderPlugin } = optimize;
/**
 * Get styles rule
 */
const styles = (global = true) => {
  const rule = {
    test: /(\.css|\.scss)/,
    exclude: [/node_modules/],
    use: [
      use(MiniCssExtractPlugin.loader, {
        minimize: production,
        hmr: !production
      }),
      use(
        'css-loader',
        global
          ? {}
          : {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              },
              localsConvention: 'camelCaseOnly'
            }
      ),
      'postcss-loader',
      'sass-loader'
    ]
  };

  if (global) {
    rule.include = [/(global\..*)$/];
  } else {
    rule.exclude.push(/(global\..*)$/);
  }

  return rule;
};

/**
 * Base configuration
 */
const base = {
  output: {
    path: root('dist'),
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].chunk.js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      img: root('src/public/img'),
      'core.scss': root('src/styles/core.scss')
    },
    modules: ['node_modules'],
    extensions: [
      '.ts',
      '.css',
      '.scss',
      '.tsx',
      '.js',
      '.json',
      '.png',
      '.svg',
      '.jpg',
      '.*'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [use('ts-loader')],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|otf|eot|ico|ttf)(\?[a-z0-9=.]+)?$/,
        use: [
          use('file-loader', {
            name: 'fonts/[name].[ext]'
          })
        ]
      },
      images(production),
      styles(),
      styles(false)
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: root('src/public/index.html'),
      filename: 'index.html',
      inject: true
    }),

    new ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new OccurrenceOrderPlugin(true),
    new FriendlyErrorsWebpackPlugin(),
    new SimpleProgressPlugin({
      progressOptions: {
        clear: true
      }
    }),
    new DefinePlugin(
      toProcessEnv({
        stage,
        ...enviroment()
      })
    ),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      allowAsyncCycles: false
    }),
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};

module.exports = { base };
