const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'}
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src')
        ]
    }
};