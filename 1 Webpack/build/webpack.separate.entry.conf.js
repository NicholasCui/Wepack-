const path = require('path')
const config = require('./webpack.base.conf')

config.entry = {
    index: './src/index.js',
    app: './src/app.js',
    entry: './src/entry.js'
 }

 module.exports = config