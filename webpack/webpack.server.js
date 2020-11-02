const config = require('./webpack.dev');

const {
  enviroments: { host, port = 8288 }
} = require('./webpack.base');

/**
 * Dev server config
 */
module.exports = merge(config, {
  watch: true,
  entry: [`webpack-dev-server/client?http://localhost:${port}`],
  devServer: {
    host,
    port,
    hot: true,
    quiet: true,
    inline: true,
    publicPath: '/',
    contentBase: '../dist',
    disableHostCheck: true,
    historyApiFallback: true
  }
});
