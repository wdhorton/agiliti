// Run like this:
// cd client && npm run build:client
// Note that Foreman (Procfile.dev) has also been configured to take care of this.

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./webpack.client.base.config');

const devBuild = process.env.NODE_ENV !== 'production';

config.output = {
  filename: '[name]-bundle.js',
  path: '../app/assets/webpack',
};

// You can add entry points specific to rails here
config.entry.vendor.unshift(
  'es5-shim/es5-shim',
  'es5-shim/es5-sham'
);

// See webpack.common.config for adding modules common to both the webpack dev server and rails

config.module.loaders.push(
  { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?minimize&modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]' +
      '!postcss'
    ),
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?minimize&modules&importLoaders=3&localIdentName=[name]__[local]__[hash:base64:5]' +
      '!postcss' +
      '!sass' +
      '!sass-resources'
    ),
  },
  { test: require.resolve('react'), loader: 'imports?shim=es5-shim/es5-shim&sham=es5-shim/es5-sham' }
);

config.plugins.push(
  new ExtractTextPlugin('[name]-bundle.css', { allChunks: true }),
  new webpack.optimize.DedupePlugin()
);

if (devBuild) {
  console.log('Webpack dev build for Rails');
  config.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails');
}

module.exports = config;
