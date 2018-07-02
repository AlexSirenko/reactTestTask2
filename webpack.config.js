'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

    context: __dirname + '\\development\\',

    entry: {
        bundle: './js/app.jsx',
        styles: './scss/app.scss'
    },

    output: {
        filename: '[name].js',
        path: __dirname + '\\public\\build',
        publicPath: "/build/",
        library: '[name]'
    },

    watch: NODE_ENV === 'development',
    
    resolve: {
        extensions: [' ', '.js', '.jsx', '.scss']
    },

    devtool: false,//NODE_ENV ==='development' ? 'source-map' : false,

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'react', 'stage-0']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['raw-loader','sass-loader']
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css',{
            allChanks: true
        })
    ]
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // don't show unreachable variables etc
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}