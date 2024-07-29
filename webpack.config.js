const {resolve} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    mode: "development",
    entry: {
        main: resolve(__dirname, 'src', 'index.tsx')
    },
    output: {
        filename: "index.js",
        path: resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],

      
    },
    module: {
        rules: [
            
            {
                test: /\.tsx$/,
                use: [
                    'babel-loader'
                ],
             
            },
            {
                test: /easy-email-pro-core/,
                include: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                  }
                }
              },
            {
                test: /\.css$/,
                use: [
                    "style-loader", 
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader", 
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html'),
            inject: 'body'
        }),
  
    ],
    devServer: {
        port: 8080
    }
}
