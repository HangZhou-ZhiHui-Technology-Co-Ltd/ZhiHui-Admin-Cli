<ClientOnly>
<template>
<code-box>
<template slot="demo">
</template>
<template slot="title">

## 基本用法

</template>
<template slot="desc">

基本的用法，将数个功能转换为按钮块

</template>
<template slot="code">

``` html
<template slot="demo">
    <action-menu :config="config" />
</template>
```
``` js
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
