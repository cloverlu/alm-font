const path = require("path");
// 代码压缩
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// gzip压缩
const CompressionWebpackPlugin = require("compression-webpack-plugin");

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== "production";

// 作为配置文件，直接导出配置对象即可
module.exports = {
  productionSourceMap: false,
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // 输出文件目录
  outputDir: "dist",
  devServer: {
    // 设置主机地址
    host: "192.168.43.236",
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
      "/alm": {
        // alm开发环境API地址
        target: "http://192.168.43.76:9001",
        // 如果要代理 websockets
        ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          "^/alm": "/"
        }
      }
    }
  },

  configureWebpack: config => {
    // 生产环境相关配置
    if (isProduction) {
      // 代码压缩
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            //生产环境自动删除console
            compress: {
              // warnings: false, // 若打包错误，则注释这行
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ["console.log"]
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
      // gzip压缩
      const productionGzipExtensions = ["html", "js", "css"];
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      );
    }
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
    // 移除 preload 插件
    config.plugins.delete("preload");
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => Object.assign(options, { limit: 10240 }));
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/style/global.scss")]
    });
}
