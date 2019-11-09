<script>
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
     * 渲染项 - 选择器
     */
    _render_select () {
      return (
        <a-select mode={mode} showSearch disabled={this.disabled} dropdownMatchSelectWidth={false} showArrow={this._show_arrow} filterOption={false} v-model={this.current} on-search={this._search} on-change={this._change} defaultActiveFirstOption={false} placeholder={this.placeholder}>
          { this._render_options() }
        </a-select>
      )
    },
    /**
     * 渲染项 - 建议点
     */
    _render_options () {
      if (this.loading) {
        return <a-spin slot="notFoundContent" size="small" />
      } else {
        return this.data.map(item => {
          const { label, value } = this._format(item)
          return (
            <a-select-option value={value} on-click={() => { this.$emit('select', { label, value, original: item }) }}>{label}</a-select-option>
          )
        })
      }
    }
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

<style lang="scss" scoped>
  @import './index.scss';
</style>
