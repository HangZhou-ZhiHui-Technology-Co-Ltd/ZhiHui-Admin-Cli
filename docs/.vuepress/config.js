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
        text: '混入',
        link: '/mixins/'
      },
      {
        text: '插件',
        link: '/plugins/'
      },
      {
        text: '组件',
        link: '/components/'
      },
      {
        text: '规范',
        items: [
          { text: '文档规范', link: '/standard/docstandard' }
        ]
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
    sidebar: {
      '/mixins/': [
        {
          title: '混入',
          collapsable: false,
          children: [
            {
              title: 'tudo',
              path: '../mixins/todo'
            }
          ]
        }
      ],
      '/plugins/': [
        {
          title: '插件',
          collapsable: false,
          children: [
            {
              title: 'tudo',
              path: '../plugins/todo'
            }
          ]
        }
      ],
      '/components/': [
        {
          title: '普通',
          collapsable: false,
          children: [
            {
              title: 'Advice 建议',
              path: '../components/Common/advice'
            },
            {
              title: 'ActionMenu 动作菜单',
              path: '../components/Common/actionmenu'
            },
            {
              title: 'IconFont 自定义图标',
              path: '../components/Common/iconfont'
            },
            {
              title: 'PageTable 分页表格',
              path: '../components/Common/pagetable'
            },
            {
              title: 'PageHeaderPanel 页头面板',
              path: '../components/Common/PageHeaderPanel'
            },
            {
              title: 'TimePicker 时间选择器',
              path: '../components/Common/timepicker'
            },
            {
              title: 'Wangeditor 富文本编辑器',
              path: '../components/Common/Wangeditor'
            },
            {
              title: 'ZHCommitBar 提交条',
              path: '../components/Common/ZHCommitBar'
            },
            {
              title: 'ZHDescriptions 复杂表格',
              path: '../components/Common/ZHDescriptions'
            },
            {
              title: 'ZHGenderTag 性别标签',
              path: '../components/Common/ZHGenderTag'
            },
            {
              title: 'ZHPageHeader 页头',
              path: '../components/Common/ZHPageHeader'
            },
            {
              title: 'ZHResult 结果窗',
              path: '../components/Common/ZHResult'
            },
            {
              title: 'ZHResultModal 审核结果窗',
              path: '../components/Common/ZHResultModal'
            },
            {
              title: 'ZHTree 树选择器',
              path: '../components/Common/ZHTree'
            }
          ]
        },
        {
          title: '业务',
          collapsable: false,
          children: [
            {
              title: 'ReadCard 公告卡片',
              path: '../components/Service/ReadCard'
            },
            {
              title: 'ReadList 已读清单',
              path: '../components/Service/ReadList'
            },
            {
              title: 'ReadModal 公告弹出窗',
              path: '../components/Service/ReadModal'
            },
            {
              title: 'FollowModal 沟通记录',
              path: '../components/Service/FollowModal'
            },
            {
              title: 'AnnexTable 设备附件列表',
              path: '../components/Service/AnnexTable'
            },
            {
              title: 'AccurateNote 设备校准记录',
              path: '../components/Service/AccurateNote'
            },
            {
              title: 'MaintainNote 维护保养记录',
              path: '../components/Service/MaintainNote'
            },
            {
              title: 'ObservedNote 质量监控记录',
              path: '../components/Service/ObservedNote'
            },
            {
              title: 'SurpriseNote 期间核查记录',
              path: '../components/Service/SurpriseNote'
            },
            {
              title: 'NoteTable 记录表格',
              path: '../components/Service/ReadCard'
            },
            {
              title: 'AccuratePlan 设备校准计划',
              path: '../components/Service/AccuratePlan'
            },
            {
              title: 'FeaturesPlan 设备校准需求',
              path: '../components/Service/FeaturesPlan'
            },
            {
              title: 'MaintainPlan 设备保养计划',
              path: '../components/Service/MaintainPlan'
            },
            {
              title: 'ObservedPlan 设备监控计划',
              path: '../components/Service/ObservedPlan'
            },
            {
              title: 'SurprisePlan 设备核查计划',
              path: '../components/Service/SurprisePlan'
            },
            {
              title: 'PlanTable 计划表格',
              path: '../components/Service/PlanTable'
            },
            {
              title: 'SupplyAbility 供应商内容',
              path: '../components/Service/SupplyAbility'
            },
            {
              title: 'SupplyCertify 供应商资质证明',
              path: '../components/Service/SupplyCertify'
            },
            {
              title: 'DraftDrawer 草稿箱',
              path: '../components/Service/DraftDrawer'
            },
            {
              title: 'CalibrationSample 校准委托单样品',
              path: '../components/Service/CalibrationSample'
            },
            {
              title: 'DetectionSample 检测委托单样品',
              path: '../components/Service/DetectionSample'
            },
            {
              title: 'MissionInfoCard 委托单项目详情',
              path: '../components/Service/MissionInfoCard'
            },
            {
              title: 'MissionTplModal 委托单原始记录弹窗',
              path: '../components/Service/MissionTplModal'
            },
            {
              title: 'PapersModal 导出报告单弹窗',
              path: '../components/Service/PapersModal'
            },
            {
              title: 'ReportNumber 报告编号',
              path: '../components/Service/ReportNumber'
            },
            {
              title: 'SampleModal 新增流转记录弹出窗',
              path: '../components/Service/SampleModal'
            },
            {
              title: 'FileDownload 文件下载',
              path: '../components/Service/FileDownload'
            },
            {
              title: 'FileListModal 文件列表弹窗',
              path: '../components/Service/FileListModal'
            },
            {
              title: 'FileModal 文件弹窗',
              path: '../components/Service/FileModal'
            },
            {
              title: 'FilePicker 文件选择器',
              path: '../components/Service/FilePicker'
            },
            {
              title: 'FileTable 文件列表',
              path: '../components/Service/FileTable'
            },
            {
              title: 'FileUpload 文件上传',
              path: '../components/Service/FileUpload'
            },
            {
              title: 'FinanceInvoiceModal 财务管理开具发票弹窗',
              path: '../components/Service/FinanceInvoiceModal'
            },
            {
              title: 'FinanceInvoiceTable 财务管理审核页发票表格',
              path: '../components/Service/FinanceInvoiceTable'
            },
            {
              title: 'GenderAvatar 性别头像',
              path: '../components/Service/GenderAvatar'
            },
            {
              title: 'PlanChecker 计划检查器',
              path: '../components/Service/PlanChecker'
            },
            {
              title: 'ApplyListTable 采购申请清单',
              path: '../components/Service/ApplyListTable'
            },
            {
              title: 'ReplyListTable 领料申请清单',
              path: '../components/Service/ReplyListTable'
            },
            {
              title: 'StockListTable 库存清单',
              path: '../components/Service/StockListTable'
            },
            {
              title: 'ReviewFile 审核文件列表',
              path: '../components/Service/ReviewFile'
            },
            {
              title: 'ReviewResultModal 审核结果弹窗',
              path: '../components/Service/ResultModal'
            },
            {
              title: 'ReviewFileModal 审核文件弹窗',
              path: '../components/Service/ReviewFileModal'
            },
            {
              title: 'WorkerNoteModal 计划记录清单弹窗',
              path: '../components/Service/ReviewItem'
            },
            {
              title: 'WorkerPlan 计划清单详情',
              path: '../components/Service/ReviewFile'
            }
          ]
        },
        {
          title: '布局',
          collapsable: false,
          children: [
            {
              title: 'BaseLayout 基础布局',
              path: '../components/Layout/BaseLayout'
            }
          ]
        }
      ],
      '/standard/': [
        {
          title: '规范',
          collapsable: false,
          children: [
            {
              title: '文档规范',
              path: '../standard/docstandard'
            }
          ]
        }
      ]
    }
  }
}
