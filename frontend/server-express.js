var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.client.express.config');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false,
  },
});

server.app.get('*', function(req, res) {
  res.send();
});

server.listen(4000, 'localhost', function(err) {
  if (err) console.log(err);
  console.log('Listening at localhost:4000...');
});
