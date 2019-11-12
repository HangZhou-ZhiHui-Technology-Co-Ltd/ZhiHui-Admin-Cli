/**
 * eslint 规则配置文件
 * ---
 * @doc http://eslint.cn/docs/user-guide/configuring
 * ---
 */
module.exports = {
  /**
   * 将当前目录设置为根目录，避免 ESlint 继续向上查找配置
   * ---
   * @doc http://eslint.cn/docs/user-guide/configuring#using-configuration-files-1
   * ---
   */
  root: true,
  /**
   * 根据代码运行的环境设置是否启用风格检查
   * ---
   * @doc http://eslint.cn/docs/user-guide/configuring#specifying-environments
   * ---
   */
  env: {
    node: true
  },
  /**
   * 指定扩展的配置，配置支持递归扩展，支持规则的覆盖和聚合。
   * ---
   * @doc http://eslint.cn/docs/user-guide/configuring#extending-configuration-files
   * ---
   */
  extends: [
    '@vue/standard',
    'plugin:vue/essential'
  ],
  rules: {
    /**
     * process 对象是一个 global （全局变量），提供有关信息，控制当前 Node.js 进程。
     * process.env 属性返回一个包含用户环境信息的对象。
     * process.env.NODE_ENV 是运行 vue-cli-service 命令时脚本配置的属性，共有三个模式
     * development 模式用于 vue-cli-service serve
     * production 模式用于 vue-cli-service build 和 vue-cli-service test:e2e
     * test 模式用于 vue-cli-service test:unit
     * ---
     * @doc http://nodejs.cn/api/process.html#process_process
     * @doc https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F
     * ---
     */
    /**
     * 禁用 console
     * ---
     * @doc http://eslint.cn/docs/rules/no-console
     * ---
     */
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /**
     * 禁用 debugger
     * ---
     * @doc: http://eslint.cn/docs/rules/no-debugger
     * ---
     */
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  /**
   * 指定 ESlint 使用的解析器，默认为 Espree
   * ---
   * @doc http://eslint.cn/docs/user-guide/configuring#specifying-parser-options
   * ---
   */
  parserOptions: {
    parser: 'babel-eslint'
  }
}
