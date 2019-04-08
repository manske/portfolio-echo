var path = require('path');
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: "bundle.js",
    publicPath: '/public/'
  },
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
        test: /\.mp4/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimtetype: 'video/mp4',
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader?attrs[]=video:src'
      },
      {
        test: /\.(jpg|png|svg)$/, 
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
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
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
            {from:'src/assets/images',to:'public/images'},
            {from:'src/assets/models',to:'public/models'} 
    ]), 
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  node: { fs: 'empty' }, 
  target: 'node'
};