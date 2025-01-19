import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
    }),
  ],
  mode: 'development',
};
