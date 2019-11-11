<script>
import { isString } from 'lodash'
import SELECT from 'ant-design-vue/es/select'
export default {
	name: 'zh-advice',
	props: Object.assign({}, SELECT.props, {
		local: {
			type: Array,
			default: () => {
				return []
			}
		}
	}),
	data() {
		return {
			data: 'Vue',
			advices: []
		}
	},
	methods: {
		/**
		 * 重载
		 */
		reload() {
			const { local } = this
			if (local) {
				this.advices = local
			}
		},
		/**
		 * 转换
		 * ---
		 * @param { String | Object } origin 原始数据
		 * ---
		 */
		_format(origin) {
			if (isString(origin)) {
				return { label: origin, value: origin }
			}
		},
		/**
		 * 渲染 - 选项
		 */
		_render_option() {
			const { local } = this
			return this.advices.map(origin => {
				const { label, value } = this._format(origin)
				return <a-select-option value={value}>{label}</a-select-option>
			})
		},
		/**
		 * 配置 - 选择器
		 */
		_vnode_selectt() {
			return {
				props: Object.assign({}, this.$props)
			}
		}
	},
	mounted() {
		this.reload()
	},
	render() {
		return <a-select>{this._render_option()}</a-select>
	}
}
</script>
