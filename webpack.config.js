const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
    publicPath: '/public/'
  },
  node: { fs: 'empty' }, 
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.css$/,  
        include: /node_modules/,  
        loaders: ['style-loader', 'css-loader'],
      },
      {
          test: /\.(jpg|png|gif|svg|pdf|ico)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[path][name]-[hash:8].[ext]'
                  },
              },
          ]
      },
      {
        test: /\.(dae)$/,
        loader: 'url-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'app.css', allChunks: true }),
    new CopyWebpackPlugin([
           {from:'src/assets/images',to:'images'},
           {from:'src/assets/models',to:'models'} 
        ])
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};