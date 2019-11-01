const path = require('path')

module.exports = {
  base: '/Zh-Admin-Docs/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '组件', link: '/views/components/timepicker.md' },
      { text: 'Github', link: 'https://github.com/TravisChenn/Zh-Admin-Docs' }
    ]
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      return {
        module: {
          rules: [
            {
              test: /\.less$/,
              loader: 'less-loader',
              options: { 
                javascriptEnabled: true 
              } 
            }
          ]
        }
      }
    }
  }
}
