const path = require('path');
const merge = require('deepmerge');
/**
 * Get path from root dir
 */
const root = pathname => path.join(__dirname, '../' + pathname);

/**
 * App Entries
 */
const entry = [root('src/index.tsx')];

/**
 * Use loader
 */
const use = (loader, options = {}) => ({
  loader,
  options
});

/**
 * Is production env
 */
const production = process.env.NODE_ENV === 'production';

/**
 * Build stage
 */
const stage = process.env.STAGE_NAME || 'dev';

/**
 * Get enviroment
 */
const enviroment = () => {
  return merge(
    require(`../config/${stage}.json`),
    production ? {} : require('../config/local.json')
  );
};

/**
 * Add process env prefix
 */
const toProcessEnv = source =>
  Object.entries(source).reduce((result, [key, value]) => {
    return {
      ...result,
      [`process.env.${key}`]: JSON.stringify(value)
    };
  }, {});

/**
 * Loader for image files
 */
const images = ({ optimize = true } = {}) => ({
  test: /\.(svg|jpg|jpeg|png|gif)$/,
  use: [
    use('file-loader', {
      name: 'img/[name].[ext]'
    })
  ].concat(
    optimize
      ? [
          use(
            'image-webpack-loader',
            optimize
              ? {
                  mozjpeg: {
                    progressive: true,
                    quality: 65
                  },
                  optipng: {},
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false
                  },
                  webp: {
                    quality: 75
                  }
                }
              : {}
          )
        ]
      : []
  )
});

module.exports = {
  root,
  entry,
  images,
  use,
  production,
  enviroment,
  toProcessEnv,
  stage
};
