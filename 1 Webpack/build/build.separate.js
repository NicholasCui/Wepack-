const webpack = require('webpack')
const config = require('./webpack.separate.entry.conf')

webpack(config, (err,stats)=>{
    console.log(err)
}) 