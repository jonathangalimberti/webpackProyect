 const path = require('path');
 const htmlWebpackPlugin = require('html-webpack-plugin');
 const miniCssExtractPlugin= require('mini-css-extract-plugin');    

 module.exports ={
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve:{
        extensions: ['.js'],
    },
    module: {
        rules:[{
            test: /\.m?js$/,
            exclude: /node_molules/,
            use: {
                loader: "babel-loader"
            },

        },
    {
        test: /\.css| .styl$/i,
        use:[miniCssExtractPlugin.loader,'css-loader','stylus-loader'],
    }
    ],

    },
    plugins: [
        new htmlWebpackPlugin ({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new miniCssExtractPlugin (),
    ],
 }