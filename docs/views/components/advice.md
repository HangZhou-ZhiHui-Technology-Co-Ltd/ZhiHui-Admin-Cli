<ClientOnly>
<template>
<code-box>
<template slot="demo">

</template>
<template slot="title">

## 离线建议

</template>
<template slot="desc">

当建议项已知时，可以通过 `advice` 设置离线建议直接进行展示

</template>
<template slot="code">

```html
<template slot="demo">
  <action-menu :config="config" />
</template>
```

```js
export default {
  data () {
    config: [
      { label: '搜索', icon: 'search', data: { action: 'search' } },
      { label: '重置', icon: 'redo', data: { action: 'reset' } },
      [
        { icon: 'plus', label: '新增', data: { action: 'create' }
      ]
    ]
  }
}
```

</template>
</code-box>
</template>
</ClientOnly>
