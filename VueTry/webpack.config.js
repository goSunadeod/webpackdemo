const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    resolve: {  //导入的时候不用写拓展名
        extensions: [' ', '.js', '.json', '.vue', '.scss', '.css']
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,//防止重复保存频繁重新编译,300ms内重复保存不打包
        poll: 1000  //每秒询问的文件变更的次数
    },
    devServer:{
        // contentBase: path.join(__dirname, "dist"), // 目录（绝对路径）
        inline: true, // 服务器获取js文件
        compress: true, //gzip压缩
        host: '127.0.0.1',
        port: 8080,
        historyApiFallback: true //任意的 404 响应都可能需要被替代为 index.html
    },
    module: {
        rules: [
            {test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{loader: 'url-loader',options:{limit:8192}}]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[id].css"
        })
    ]
}