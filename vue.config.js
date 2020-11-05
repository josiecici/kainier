// vue.config.js
module.exports = {
    //     publicPath（Type: string，Default: ‘/’）
    // 这个值也可以被设置为空字符串 (’’) 或是相对路径 (’./’)，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径。
    // outputDir（Type: string，Default: ‘dist’）
    // 输出文件目录，当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 。
    // assetsDir（Type: string，Default: ‘’）
    // 放置生成的静态资源 (js、css、img、fonts) 的目录。
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    chainWebpack: config => {
        config.module
            .rule('less')
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .before('postcss-loader')
            .options({
                remUnit: 37.5
            })
    }
}