<script>
import moment from 'moment'
import { DatePicker } from 'ant-design-vue'
export default {
  name: 'time-picker',
  props: {
    /**
     * 区间
     */
    range: {
      type: Boolean,
      default: false
    },
    /**
     * 范围
     */
    scope: {
      type: String,
      default: 'date',
      validator: (value) => {
        return ['date', 'month', 'week'].includes(value)
      }
    },
    /**
     * 格式化模板
     */
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    /**
     * 双向绑定
     */
    value: {
      type: [String, Array, Object]
    }
  },
  components: {
    DatePicker
  },
  data () {
    return {
      current: null
    }
  },
  methods: {
    /**
     * 变动
     */
    _change (value) {
      this.current = value
      let data = this._transform(value)
      this.$emit('input', data)
      this.$emit('change', data)
    },
    /**
     * 转换
     * ---
     * @param {Object}  value    数据
     * @param {Boolean} positive true:  string -> moment
     *                           false: moment -> string
     * ---
     */
    _transform (value, positive) {
        if (this.range) {
          value = value.map(item => positive ? moment(item) : item.format(this.format))
        } else {
          value = positive ? moment(value) : value.format(this.format)
        }
      return value
    }
  },
  computed: {
    /**
     * 标签
     */
    _tag () {
      if (this.range) {
        return 'a-range-picker'
      } else {
        return DatePicker
      }
    }
  },
  watch: {
    value: {
      handler (new_value) {
        this.current = this._transform(new_value, true)
      },
      immediate: true
    }
  },
  render (h) {
    return h(this._tag, {
      props: {
        value: this.current
      },
      on: {
        change: this._change
      }
    })
  }
  }
</script>
