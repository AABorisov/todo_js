const path = require('path');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const prodConf = require('./webpack.config.prod');
const devConf = require('./webpack.config.dev');

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg)$/,
        include: [path.resolve(__dirname, 'public')],
        use: 'url-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: 'public',
        to: '',
      },
    ]),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],
};

let resultConfig;

if (process.env.NODE_ENV === 'production') {
  resultConfig = merge(config, prodConf);
} else {
  resultConfig = merge(config, devConf);
}

module.exports = resultConfig;
