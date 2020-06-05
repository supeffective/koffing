const path = require('path');
const libraryName = 'koffing';

const commonConfig = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', {}, '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
    modules: [
      path.resolve(__dirname, 'src')
    ]
  }
};

let universalModuleConfig = {
  libraryTarget: "umd",
  //library: libraryName,
  //umdNamedDefine: true,
  globalObject: 'typeof self !== \'undefined\' ? self : this'
};

let minifiedConfig = Object.assign({
  output: Object.assign({
    path: __dirname + '/dist',
    filename: libraryName + '.min.js',
  }, universalModuleConfig)
}, commonConfig);

let unminifiedConfig = Object.assign({
  optimization: {
    minimize: false
  },
  output: Object.assign({
    path: __dirname + '/dist',
    filename: libraryName + '.js',
  }, universalModuleConfig)
}, commonConfig);


module.exports = [minifiedConfig, unminifiedConfig];
