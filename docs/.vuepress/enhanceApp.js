import AntD from 'ant-design-vue'
import '../../src/icons/iconfont.js'
import '../../src/icons/iconfont.css'
import 'ant-design-vue/dist/antd.css'
import 'element-ui/lib/theme-chalk/base.css'
import IconFont from '../../src/components/iconfont'
import ActionMenu from '../../src/components/actionmenu'
import asd from '../../src/components/advice/demo/index.vue'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

export default ({ Vue }) => {
  Vue.use(AntD)
  Vue.component('hello-world', asd)
  Vue.component('icon-font', IconFont)
  Vue.component('action-menu', ActionMenu)
  Vue.component(CollapseTransition.name, CollapseTransition)
}
