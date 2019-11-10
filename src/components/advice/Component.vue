<script>
import { isString, cloneDeep } from 'lodash'
import SELECT from 'ant-design-vue/es/select'
export default {
  name: 'zh-advice',
  props: Object.assign({}, SELECT.props, {
    /**
     * 离线建议
     */
    advices: {
      type: Array,
      default: () => {
        return []
      }
    }
  }),
  data () {
    return {
      /**
       * 绑定数据
       */
      data: null,
      /**
       * 加载状态
       */
      loading: false
    }
  },
  methods: {
    /**
     * 转换
     */
    _format (value) {
      let element = cloneDeep(value)
      if (isString(element)) {
        element = { label: element, value: element }
      }
      return element
    },
   /**
     * 渲染 - 选择器
     */
    _render_select () {
      return (
        <a-select>
          { this._render_options() }
        </a-select>
      )
    },
    /**
     * 渲染 - 建议
     */
    _render_options () {
      if (this.loading) {
        return <a-spin slot="notFoundContent" size="small" />
      } else {
        return this.data.map(item => <a-select-option { ...this._vnode_option(item) } />)
      }
    },
    /**
     * 节点 - 建议
     * ---
     * @param {Object | String} origin 建议原始数据
     * ---
     */
    _vnode_option (origin) {
      const { label, value } = this._format(origin)
      return {
        props: {
          value
        },
        domProps: {
          innerHTML: label
        },
        on: {
          click: () => {
            this.$emit('select', { label, value, origin })
          }
        }
      }
    }
  },
  computed: {

  },
  watch: {
    value: {
      handler (new_value) {
        this.data = new_value
      },
      immediate: true
    }
  },
  render () {
    return this._render_select()
  }
}
</script>
