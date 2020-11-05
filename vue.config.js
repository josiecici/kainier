// vue.config.js
module.exports = {
    // publicPath（Type: string，Default: ‘/’）
    // 这个值也可以被设置为空字符串 (’’) 或是相对路径 (’./’)，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径。
    // outputDir（Type: string，Default: ‘dist’）
    // 输出文件目录，当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 。
    // assetsDir（Type: string，Default: ‘’）
    // 放置生成的静态资源 (js、css、img、fonts) 的目录。
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        // 适配 375 屏幕, 设计图750中量出来的尺寸要 / 2
                        // 配置成 37.5 是为了兼容 没有适配 rem 布局的第三方 ui 库
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
}