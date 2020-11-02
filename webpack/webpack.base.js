const merge = require('deepmerge');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const {
  DefinePlugin,
  IgnorePlugin,
  ContextReplacementPlugin
} = require('webpack');

const stage = process.env.STAGE_NAME || 'dev';

const production = process.env.NODE_ENV === 'production';

const enviroments = merge(
  require(`../config/${stage}.json`),
  production ? {} : require('../config/local.json')
);

/**
 * Loader shortcut
 */
const use = (loader, options = {}) => ({
  loader,
  options
});

/**
 * Style rule with modules or w/o
 */
const getStyleRule = (modules) => ({
  test: /(\.css|\.scss)/,
  exclude: [/node_modules/, modules && /(global\..*)$/],
  include: !modules && [/(global\..*)$/],
  use: [
    use(MiniCssExtractPlugin.loader, {
      minimize: production,
      hmr: !production
    }),
    use(
      'css-loader',
      modules && {
        localsConvention: 'camelCaseOnly',
        modules: {
          localIdentName: '[local]__[hash:base64:5]'
        }
      }
    ),
    'postcss-loader',
    'sass-loader'
  ]
});

/**
 * Code entry
 */
const entry = ['src/index.tsx'];

/**
 * Output file configuration
 */
const output = {
  publicPath: '/',
  path: '../dist',
  filename: 'js/[name].js',
  chunkFilename: 'js/[name].chunk.js',
  devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
};

/**
 * Options for imports resolving
 */
const resolve = {
  extensions: ['.*'],
  modules: ['node_modules'],
  plugins: [new TsconfigPathsPlugin()],
  alias: {
    img: '../src/public/img',
    'core.scss': '../src/styles/core.scss'
  }
};

/**
 * Rules config
 */
const rules = [
  {
    use: 'ts-loader',
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/
  },
  {
    test: /\.(woff|woff2|otf|eot|ico|ttf)(\?[a-z0-9=.]+)?$/,
    use: use('file-loader', {
      name: 'fonts/[name].[ext]'
    })
  },
  {
    test: /\.(svg|jpg|jpeg|png|gif)$/,
    use: [
      use('file-loader', { name: 'img/[name].[ext]' }),
      use('image-webpack-loader')
    ]
  },
  getStyleRule(),
  getStyleRule(false)
];

/**
 * Plugins list
 */
const plugins = [
  /**
   * Output html
   */
  new HtmlWebpackPlugin({
    template: root('src/public/index.html'),
    filename: 'index.html',
    inject: true
  }),

  /**
   * Tweak moment locales list here
   */
  new ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),

  /**
   * Pretty output
   */
  new FriendlyErrorsWebpackPlugin(),

  /**
   * Progress bar for builds
   */
  new SimpleProgressPlugin({
    progressOptions: { clear: true }
  }),

  /**
   * Provide configuration for bundled code
   */
  new DefinePlugin({
    process: {
      env: {
        ...enviroments,
        NODE_ENV: process.env.NODE_ENV
      }
    }
  }),

  /**
   * Warn about circular imports
   */
  new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: true,
    allowAsyncCycles: false
  }),

  /**
   * Cut moment locales
   */
  new IgnorePlugin(/^\.\/locale$/, /moment$/),

  /**
   * Css to sep file
   */
  new MiniCssExtractPlugin()
];

/**
 * Base configuration
 */
const config = {
  entry,
  output,
  resolve,
  module: {
    rules,
    plugins
  }
};

module.exports = {
  config,
  enviroments
};
