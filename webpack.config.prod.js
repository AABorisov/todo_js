const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(css|scss)\./,
        // include: [path.resolve(__dirname, 'src')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                modules: true,
                minimize: true,
                localIdentName: '[name]__[hash:base64:5]',
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
