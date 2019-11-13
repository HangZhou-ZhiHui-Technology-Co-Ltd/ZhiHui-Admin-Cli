<script>
export default {
	methods: {
		/**
		 * 渲染 - 描述
		 */
		render_desc() {
			return <div class='api-box-desc'>{this.$slots.desc}</div>
		}
	},
	render() {
		return (
			this.render_desc()
		)
	}
}
</script>

<style>
.api-box-desc h1, .api-box-desc h2, .api-box-desc h3, .api-box-desc h4, .api-box-desc h5, .api-box-desc h6{
	font-weight: 500
}
.api-box-desc table{
	font-size: 14px;
  line-height: 1.5;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
}
.api-box-desc table td:nth-child(1) {
	width: 20%
}
.api-box-desc table td:nth-child(3) {
	width: 22%;
	color: #c41d7f
}
.api-box-desc table td:nth-child(4) {
	width: 16%
}
</style>
