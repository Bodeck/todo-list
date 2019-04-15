const path = require('path');
const HTMLTemplatePlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const plugins = [new HTMLTemplatePlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
})];

module.exports = (env) => {
  const environment = env;
  if (environment === 'production') {
    plugins.push(new OptimizeJsPlugin({
      sourceMap: false
    }))
  }
  return {
    mode: environment,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            plugins: env !== 'production' ? ['react-hot-loader/babel'] : []
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    },
    plugins
  }
};