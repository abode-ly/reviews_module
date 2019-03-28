const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/client'),
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  }
};