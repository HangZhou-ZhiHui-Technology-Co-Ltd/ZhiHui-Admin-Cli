/**
 * eslint规则配置文件
 * ---
 * @doc http://eslint.cn/docs/user-guide/configuring
 * ---
 */
module.exports = {
  /**
   * 将ESlint的作用域限制在本项目里
   * ---
   * @doc http://eslint.cn/docs/user-guide/configuring#using-configuration-files-1
   * ---
   */
  root: true,
  /**
   * 根据代码运行的环境判断是否进行风格检查
   */
  env: {
    node: true
  },
  /**
   * 继承的配置
   */
  extends: [
    '@vue/standard',
    'plugin:vue/essential'
  ],
  rules: {
    /**
     * process 对象是一个 global （全局变量），提供有关信息，控制当前 Node.js 进程。
     * ---
     * @doc http://nodejs.cn/api/process.html#process_process
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
   * 指定解析器
   */
  parserOptions: {
    parser: 'babel-eslint'
  }
}
