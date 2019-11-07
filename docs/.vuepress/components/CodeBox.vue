<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    data () {
        return {
            expand: false
        }
    },
    methods: {
        render_demo (h) {
            return h('div', { class: 'code-box-demo' }, this.$slots.demo)
        },
        render_head (h) {
            return h('a-divider', { props: { orientation: 'left' } }, this.title)
        },
        render_desc (h) {
            return h('div', { class: 'code-box-desc' }, this.$slots.desc)
        },
        render_tips (h) {
            return h('div', { class: 'code-box-tips' },
                this._tip_config.map(({ on, type, title }) => {
                    return h('a-tooltip', { props: { title } }, [
                        h('a-icon', { on, props: { type }, class: 'code-box-tips-icon' })
                    ])
                }))
        },
        render_code (h) {
            return h('div', {
                class: 'code-box-code',
                style: {
                    display: this.expand ? 'block' : 'none'
                }
            },
            this.$slots.code)
        }
    },
    computed: {
        _tip_config () {
            let { expand } = this
            return [
                {
                    title: expand ? '收起代码' : '显示代码',
                    type: expand ? 'shrink' : 'arrows-alt',
                    on: {
                        click: () => {
                            this.expand = !expand
                        }
                    }
                }
            ]
        }
    },
    render (h) {
        return (
            <a-card bodyStyle={{ padding: 0 }} class="code-box">
                { this.render_demo(h) }
                { this.render_head(h) }
                { this.render_desc(h) }
                { this.render_tips(h) }
                { this.render_code(h) }
            </a-card>
        )
    }
}
</script>

<style>
    .code-box .ant-divider-horizontal {
        margin: 0;
        font-size: 14px;
        color: #314659;
        font-weight: 500;
    }
    .code-box-demo {
        padding: 32px 24px 22px;
    }
    .code-box-desc {
        padding: 8px 24px 18px;
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
    .code-box-desc p{
        margin: 0;
        line-height: 2;
        font-size: 14px;
        color: #1d2a35;
        word-break: break-word;
    }
    .code-box-code pre[class*="language-"]{
        margin: 0;
    }
    .code-box-code div[class*="language-"] {
        border-radius: 0;
    }
</style>