const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                chart: 'chart@http://localhost:3001/remoteEntry.js'
            },
            shared: {
                "react": { singleton: true, requiredVersion: '^18.3.1' },
                'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
                "antd": { singleton: true, requiredVersion: '^5.19.0' },
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public', 'index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '../public'),
        },
        port: 3000,
        historyApiFallback: true,
    },
};
