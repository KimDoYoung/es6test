module.exports = {
  entry : ['./src/script.js', './src/script2.js'],
  output : {
    filename : '/lib/bundle.js'
  },
  module : {
      loaders : [
        {test: /\.js?/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
  }
}
