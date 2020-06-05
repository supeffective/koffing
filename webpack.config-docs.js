const path = require('path');

module.exports = {
  entry: './docs/src/index.js',
  output: {
    path: __dirname + '/docs',
    publicPath: '/',
    filename: 'assets/js/bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'docs/src'),
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ]
  },
  devServer: {
    contentBase: './docs'
  }
};
