const path = require('path');

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
 * Code entry
 */
const entry = ['src/index.tsx'];

/**
 * Output file configuration
 */
const output = {
  publicPath: '/',

  filename: 'js/[name].js',

  chunkFilename: 'js/[name].chunk.js',

  path: path.resolve(__dirname, '../dist'),

  devtoolModuleFilenameTemplate: '[absolute-resource-path]',

  devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
};

/**
 * Options for imports resolving
 */
const resolve = {
  modules: ['node_modules'],

  plugins: [new TsconfigPathsPlugin()],

  extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json'],

  alias: {
    '@img': '../src/public/img',

    'core.scss': '/src/styles/core/index.scss',

    'common.scss': '/src/styles/common/index.scss'
  }
};

/**
 * Rules config
 */
const rules = [
  {
    test: /\.(ts|tsx)$/,

    use: 'ts-loader',

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

      'image-webpack-loader'
    ]
  },

  {
    test: /(\.css|\.scss)/,

    exclude: [/node_modules/, /(global\..*)$/],

    use: [
      MiniCssExtractPlugin.loader,

      use('css-loader', {
        modules: {
          localIdentName: '[local]__[hash:base64:5]',
          exportLocalsConvention: 'camelCaseOnly'
        }
      }),

      'postcss-loader',

      'sass-loader'
    ]
  },

  {
    test: /(\.css|\.scss)/,

    include: [/(global\..*)$/],

    use: [
      MiniCssExtractPlugin.loader,

      'css-loader',

      'postcss-loader',

      'sass-loader'
    ]
  }
];

/**
 * Plugins list
 */
const plugins = [
  /**
   * Output html
   */
  new HtmlWebpackPlugin({
    inject: true,

    filename: 'index.html',

    template: './src/public/index.html'
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
    progressOptions: {
      clear: true
    }
  }),

  /**
   * Provide configuration for bundled code
   */
  new DefinePlugin({
    process: {
      env: enviroments
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

  plugins,

  module: {
    rules
  }
};

module.exports = {
  config,
  enviroments
};
