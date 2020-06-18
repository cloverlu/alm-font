const path = require("path");
// 作为配置文件，直接导出配置对象即可
module.exports = {
  devServer: {
    // 设置主机地址
    host: "localhost",
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
      "/alm": {
        // alm开发环境API地址
        target: "http://20.147.168.80:9001",
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
  chainWebpack: config => {
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
      patterns: [path.resolve(__dirname, "./src/assets/style/mixin.scss")]
    });
}
