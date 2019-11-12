import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'element-ui/lib/theme-chalk/base.css'
import asd from '../../src/components/advice/demo/index.vue'
import ActionMenu from '../../src/components/actionmenu'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

export default ({ Vue }) => {
  Vue.use(AntD)
  Vue.component('hello-world', asd)
  Vue.use(ActionMenu)
  Vue.component(CollapseTransition.name, CollapseTransition)
}
