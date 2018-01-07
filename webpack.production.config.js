const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: [
    'babel-polyfill',
    `${__dirname}/app/index.jsx`,
  ],
  output: {
    path: `${__dirname}/build`,
    filename: '[name]-[hash].js',
  },

  resolve: {
    extensions: ['.jsx', '.scss', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js|jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options:
            {
              presets: ['es2015', 'react', 'stage-0'],
              env: {
                development: {
                  plugins: ['react-hot-loader/babel'],
                },
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /(\.scss|\.css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options:
              {
                sourceMap: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [autoprefixer],
              },
            },
            {
              loader: 'sass-loader',
              options:
              {
                sourceMap: true,
                data: `@import "${__dirname}/app/components/theme.scss";`,
              },
            },
          ],
        }),
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.gif/,
        loader: 'url-loader',
      },
      {
        test: /\.jpg/,
        loader: 'url-loader',
      },
      {
        test: /\.png/,
        loader: 'url-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/assets/index.template.html`,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
  ],
};
