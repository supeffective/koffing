const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        libraryTarget: "umd",
        path: __dirname + '/dist',
        filename: 'koffing.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
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