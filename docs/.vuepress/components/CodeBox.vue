<script>
export default {
	data() {
		return {
		/**
		 * 代码是否处于展开状态
		 */
			expand: false
		}
	},
	methods: {
		/**
		 * 渲染 - 示例
		 */
		render_demo() {
			return (
				<div class="code-box-demo">
					{ this.$slots.demo }
				</div>
			)
		},
		/**
		 * 渲染 - 标题
		 */
		render_head() {
			return (
				<a-divider orientation="left" class="code-box-title">
					{ this.$slots.title }
				</a-divider>
			)
		},
		/**
		 * 渲染 - 描述
		 */
		render_desc() {
			return <div class='code-box-desc'>{this.$slots.desc}</div>
		},
		/**
		 * 渲染 - 功能
		 */
		render_tips() {
			return (
				<div class='code-box-tips'>
					{
						this._tip_config.map(({ icon, tooltip }) => {
							return (
								<a-tooltip {...tooltip}>
									<a-icon {...icon} />
								</a-tooltip>
							)
						})
					}
				</div>
			)
		},
		/**
		 * 渲染 - 代码
		 */
		render_code() {
			const { expand, $slots } = this
			return (
				<el-collapse-transition>
					<div v-show={expand} class='code-box-code'>
						{$slots.code}
					</div>
				</el-collapse-transition>
			)
		}
	},
	computed: {
		_tip_config() {
			let { expand } = this
			return [
				{
					tooltip: {
						props: {
							title: expand ? '收起代码' : '显示代码'
						}
					},
					icon: {
						props: {
							type: expand ? 'shrink' : 'arrows-alt'
						},
						class: 'code-box-tips-icon',
						on: {
							click: () => {
								this.expand = !expand
							}
						}
					}
				}
			]
		}
	},
	render() {
		return (
			<a-card bodyStyle={{ padding: 0 }} class='code-box'>
				{this.render_demo()}
				{this.render_head()}
				{this.render_desc()}
				{this.render_tips()}
				{this.render_code()}
			</a-card>
		)
	}
}
</script>

<style>
.code-box-title h2 {
	margin: 0;
	padding: 0;
	cursor: pointer;
	font-size: 14px;
	color: #314659;
	font-weight: 500;
	border-bottom: none;
}
.code-box-demo {
	padding: 32px 24px 22px;
}
.code-box-desc {
	padding: 0px 24px 24px;
}
.code-box-tips {
	height: 41px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px dashed #ebedf0;
}
.code-box-tips-icon {
	cursor: pointer;
	margin-right: 16px;
}
.code-box-desc p {
	margin: 0;
	line-height: 2;
	font-size: 14px;
	color: #1d2a35;
	word-break: break-word;
}
.code-box-code pre[class*='language-'] {
	margin: 0;
}
.code-box-code div[class*='language-'] {
	border-radius: 0;
}
</style>
