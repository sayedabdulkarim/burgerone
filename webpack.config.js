const config = {
  entry: './main.js', // entry point
  output: {
        filename: 'index.js', // place where bundled app will be served
     },
  devServer: {
        inline: true, // autorefresh
        port: 8080 // development port server
     },
  module: {
        rules: [
           {
              test: /\.jsx?$/, // search for js files 
              exclude: /node_modules/,
              loader: 'babel-loader',
           },
           {
              test: /\.css$/, 
              loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]' //css mdls
           },
           {
              test: /\.(png|jpg)$/, //img
              loader: 'url-loader'
           }

     ]
  }
}

module.exports = config;