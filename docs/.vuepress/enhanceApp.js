import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'element-ui/lib/theme-chalk/base.css'
import ZhAdvice from '../../src/components/advice'
import ActionMenu from '../../src/components/actionmenu'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

export default ({ Vue }) => {
  Vue.use(AntD)
  Vue.use(ZhAdvice)
  Vue.use(ActionMenu)
  Vue.component(CollapseTransition.name, CollapseTransition)
}
