const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            hash: true,
            minify: true,
        }),

        new CopyPlugin({
            patterns: [{ from: './src/assets/' }],
        }),
    ],
    optimization: {
        // minimize: argv.mode === 'production',
        minimizer: [new TerserPlugin({
            terserOptions: {
                ecma: 6,
                compress: { drop_console: true },
                output: { comments: false, beautify: false },
            },
        })],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg)$/i,
                use: "file-loader"
            },
        ],
    },
    resolve: {
        extensions: ['.js']
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
