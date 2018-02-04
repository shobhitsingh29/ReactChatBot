module.exports = function(env) {
  switch (env) {
    case 'dev':
      return require('./webpack.dev');

    case 'prod':
      return require('./webpack.prod');

    default:
      return require('./webpack.dev');
  }
}
