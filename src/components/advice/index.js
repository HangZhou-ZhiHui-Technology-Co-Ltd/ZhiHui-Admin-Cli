import Component from './Component'

Component.install = Vue => {
  Vue.component(Component.name, Component)
}

export default Component
