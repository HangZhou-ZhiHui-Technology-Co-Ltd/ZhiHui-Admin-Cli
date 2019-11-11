<template>
<code-box>
<template slot="demo">
  <zh-advice :local="local" />
</template>
<template slot="title">

## 基本使用

</template>
<template slot="desc">

基本使用。

</template>
<template slot="code">

```html
<template>
  <zh-advice :local="local" />
</template>
```

```js
<script>
export default {
  data () {
    return {
      local: [
        'Vue',
        'Angular',
        'React'
      ]
    }
  }
}
</script>
```

</template>
</code-box>
</template>

<script>
export default {
  data () {
    return {
      local: [
        'Vue',
        'Angular',
        'React'
      ]
    }
  }
}
</script>
