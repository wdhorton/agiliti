// Run like this:
// cd client && node server-express.js

const webpack = require('webpack');
const config = require('./webpack.client.base.config');

const hotPort = process.env.HOT_PORT || 4000;

config.entry.app.push(

  // Webpack dev server
  'webpack-dev-server/client?http://localhost:' + hotPort,
  'webpack/hot/dev-server'
);

config.output = {

  // this file is served directly by webpack
  filename: '[name]-bundle.js',
  path: __dirname,
};
config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);
config.devtool = 'eval-source-map';

// All the styling loaders only apply to hot-reload, not rails
config.module.loaders.push(
  {
    test: /\.js?$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      plugins: [
        [
          'react-transform',
          {
            transforms: [
              {
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module'],
              },
            ],
          },
        ],
      ],
    },
  },
  {
    test: /\.css$/,
    loaders: [
      'style',
      'css',
      'postcss',
    ],
  },
  {
    test: /\.scss$/,
    loaders: [
      'style',
      'css',
      'postcss',
      'sass',
      'sass-resources'
    ],
  }
);

module.exports = config;
