const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js", // bundle's entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js", // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader'],

            },
            {
                test: /\.scss$/,
                loader: ["style-loader?sourceMap", "css-loader?sourceMap", "sass-loader?sourceMap"]
            },
            /*
                        {
                            test: /\.css$/,
                            loader: ["style-loader", "css-loader"]
                        }
            */
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        })
    ],
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true,
        },
        runtimeChunk: true,
    },
};
