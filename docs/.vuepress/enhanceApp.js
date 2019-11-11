import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import ZhAdvice from '../../src/components/advice'
import ActionMenu from '../../src/components/actionmenu'

export default ({ Vue }) => {
  Vue.use(AntD)
  Vue.use(ZhAdvice)
  Vue.use(ActionMenu)
}
