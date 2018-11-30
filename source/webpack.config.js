const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    // resolve: {
    //     alias: {
    //         assets: path.resolve('./img')
    //         // Templates: path.resolve(__dirname, 'src/templates/')
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            localIdentName: '[name]_[local]_[hash:base64]',
                            minimize: true,
                            modules: true,
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin]
};
