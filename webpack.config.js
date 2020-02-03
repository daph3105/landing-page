const htmlwebpackplugin = require('html-webpack-plugin')

module.exports = {
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: [
              {
            loader: 'html-loader',
            options: {minimize:true},
              }
            ]
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
            test: /\.(svg|gif|png|jpg)$/,
            use: [
                    { loader:'file-loader',
                      options:{name:'[name].[ext]',
                      outputPath: 'images/',
                      publicPath: 'images/',
                      esModule: false }
            }
                ]
        }
      ]
    },
    plugins:[
        new htmlwebpackplugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
  };