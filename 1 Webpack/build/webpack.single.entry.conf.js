const path = require('path')
const config = require('./webpack.base.conf')

config.entry = {
    bundle: './src/index.js'
 }

 module.exports = config