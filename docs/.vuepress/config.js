const path = require('path')
module.exports = {
  /**
   * 部署站点的基础路径
   * ---
   * @doc https://vuepress.vuejs.org/zh/config/#base
   * ---
   */
  base: '/ZhiHui-Admin-Cli/',
  /**
   * Markdown 拓展
   * ---
   * @doc https://vuepress.vuejs.org/zh/guide/markdown.html
   * ---
   */
  markdown: {
    /**
     * 行号
     * ---
     * @doc https://vuepress.vuejs.org/zh/guide/markdown.html#%E8%A1%8C%E5%8F%B7
     * ---
     */
    lineNumbers: true
  },
  /**
   * 默认主体配置
   * ---
   * @doc https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE
   * ---
   */
  themeConfig: {
    /**
     * 自动生成侧栏
     * ---
     * @doc https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E4%BE%A7%E6%A0%8F
     * ---
     */
    sidebar: 'auto',
    /**
     * 导航栏
     * ---
     * @doc https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
     * ---
     */
    nav: [
      {
        text: '组件',
        link: '/views/components/'
      },
      {
        text: 'Github',
        link: 'https://github.com/HangZhou-ZhiHui-Technology-Co-Ltd/ZhiHui-Admin-Cli'
      }
    ],
    /**
     * 侧边栏
     * ---
     * @doc https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
     * ---
     */
    sidebar: [
      {
        title: '组件',
        collapsable: false,
        path: '/views/components',
        children: [
          {
            title: '建议',
            path: '../views/components/advice'
          },
          {
            title: '动作菜单',
            path: '../views/components/actionmenu'
          }
        ]
      }
    ]
  }
}
