const path = require('path');

module.exports = {
    entry: './docs/src/index.jsx',
    output: {
        path: __dirname + '/docs',
        publicPath: '/',
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
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