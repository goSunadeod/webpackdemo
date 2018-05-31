module.exports = {
    entry: './main.js',
    output: {
        path:__dirname,
        filename: 'bundle.js'
    },
    module: {
       rules:[
        {
            // test 表示测试什么文件类型
            test:/\.css$/,
            // 使用 'style-loader','css-loader'
            loader:['style-loader','css-loader']
        }
    ]
    }
};