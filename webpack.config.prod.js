const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|scss)\./,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                modules: true,
                minimize: true,
                localIdentName: '[folder]_[name]__[local]',
              },
              importLoaders: 1,
            },
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      allChunks: true,
    }),
    new UglifyJsPlugin({
      parallel: true,
      uglifyOptions: {
        ecma: 5,
        warnings: false,
        mangle: true,
        compress: {
          side_effects: false,
          drop_console: true,
        },
        output: {
          comments: false,
          beautify: false,
        },
      },
    }),
  ],
};
