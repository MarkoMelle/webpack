const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
   mode: 'production',
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.css$/i,
            use: [
               MiniCSSExtractPlugin.loader,
               'css-loader'
            ]
         }
      ]
   },
   optimization: {
      minimizer: [
         new CssMinimizerPlugin(),
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         filename: 'index.html'
      }),
      new MiniCSSExtractPlugin()
   ],
}