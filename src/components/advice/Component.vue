<script>
import { isString } from 'lodash'
import SELECT from 'ant-design-vue/es/select'
export default {
  name: 'zh-advice',
  props: Object.assign({}, SELECT.props, {
    /**
		 * 离线建议
		 */
    local: {
      type: Array,
      default: () => {
        return []
      }
    }
  }),
  data () {
    return {
      /**
			 * 数据
			 */
      data: 'Vue',
      /**
			 * 建议
			 */
      advices: []
    }
  },
  methods: {
    /**
		 * 重载
		 * ---
		 * @focus 1. 若为离线数据则直接同步至 advices 中
		 * ---
		 */
    reload () {
      const { local } = this
      // @focus -> 1
      if (local) {
        this.advices = local
      }
    },
    /**
		 * 转换
		 * ---
		 * @param { String | Object } origin 原始数据
		 * ---
		 * @focus 1. 若数据为 string 则将其转换为固定的数据格式 { label, value }
		 */
    _format (origin) {
      // @focus -> 1
      if (isString(origin)) {
        return { label: origin, value: origin }
      }
    },
    /**
		 * 渲染 - 选项
		 */
    _render_option () {
      const { local } = this
      return this.advices.map(origin => {
        const { label, value } = this._format(origin)
        return <a-select-option value={value}>{label}</a-select-option>
      })
    },
    /**
		 * 配置 - 选择器
		 */
    _vnode_select () {
      return {
        props: Object.assign({}, this.$props)
      }
    }
  },
  mounted () {
    this.reload()
  },
  render () {
    return <a-select>{this._render_option()}</a-select>
  }
}
</script>
