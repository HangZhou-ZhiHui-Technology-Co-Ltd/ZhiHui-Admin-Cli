module.exports = {
  /**
   * 保存时不执行 ESLint 检查
   */
  lintOnSave: false,
  /**
   * Webpack 配置
   */
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
