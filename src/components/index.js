import ZhAdvice from './advice'

const components = {
  ZhAdvice
}

const cmpt_inc = function (Vue) {
  if (cmpt_inc.installed) {
    return
  }
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

export default {
  cmpt_inc
}
