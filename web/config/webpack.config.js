// web/config/webpack.config.js

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const configDir = __dirname
//const webpack = require('webpack')

module.exports = (config) => {
  config.plugins[0] = new NodePolyfillPlugin()
  /* config.resolve.fallback = {
    url: require.resolve('url'),
    assert: require.resolve('assert'),
    crypto: require.resolve('crypto-browserify'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify/browser'),
    buffer: require.resolve('buffer'),
    stream: require.resolve('stream-browserify'),
    zlib: require.resolve('browserify-zlib'),
    tty: require.resolve('tty-browserify'),
    timers: require.resolve('timers-browserify'),
  }*/
  config.experiments = {
    topLevelAwait: true,
  }
  /*config.resolve.fallback = {
    fs: false, //require.resolve('fs'),
    module: false, // require.resolve('module'),
    request: require.resolve('request'),
  }*/
  config.module.rules[0].oneOf[5] = {
    test: /\.css$/,
    sideEffects: true,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: configDir,
          },
        },
      },
    ],
  }

  return config
}
