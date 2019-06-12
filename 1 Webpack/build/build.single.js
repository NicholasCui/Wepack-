const webpack = require('webpack')
const config = require('./webpack.single.entry.conf')

webpack(config, (err,stats)=>{
    console.log(err)
}) 