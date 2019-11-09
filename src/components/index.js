import TimePicker from '../components/Form/TimePicker'
import ActionMenu from '../components/Action/ActionMenu'

const components = {
  TimePicker,
  ActionMenu
}

const install = function (Vue) {
  if (install.installed) {
    return
  }
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
