const webpack = require('webpack')
const appConfig = require('./env-config')

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(appConfig)
    );
    return config;
  }
}