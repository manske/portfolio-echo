
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
 
module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
    publicPath: '/public/'
  },
 
  node: { 
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false,
    fs: 'empty' }, 
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
        loader: 'style-loader!css-loader!sass-loader?sourceMap'
      },
      {
        test: /\.css$/,  
        include: /node_modules/,  
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader?attrs[]=video:src'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        }
      },
      {
        test: /\.dae$/,
        loader: 'file-loader',
        options: {
           name (file) {
            if (env === 'development') {
              return '[path][name].[ext]'
            }

            return '[hash].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new ExtractTextPlugin({ filename: 'app.css', allChunks: true }),
    new CopyWebpackPlugin([
           {from:'src/assets/images',to:'images'},
           {from:'src/assets/models',to:'models'},
           { from: './favicon.png' }
        ]), 
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};