const path = require('path');
const HttpWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // mode: 'development'
    devServer: {
        contentBase: './dist'
    },
    plugins:[
        new HttpWebpackPlugin({
            filename:'index.html',
            template: './src/index.html'
        })
    ]
}