module.exports = {
    entry: "./main.js",
    output: {
    	path:__dirname,
        filename: 'bundle.js'
    },
    module: {
    rules: [{
       test:/\.(png|jpg|ico)$/,
       loader:['url-loader?limit=40000']
   }
   ]
    }
};