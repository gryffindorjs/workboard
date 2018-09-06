const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: './src/client/components/app.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
<<<<<<< HEAD
          query: {
            presets: ['react', 'es2015', 'env', 'stage-3']
          }
        }
=======
          query: { 
            presets: ['react', 'es2015', 'env'], 
            plugins: [
              "transform-class-properties",
              "transform-object-rest-spread"
            ],
            cacheDirectory: true
          }
    
        }, 
>>>>>>> c852c0b5ed7a1190a2f4086540661459b66d4a71
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
