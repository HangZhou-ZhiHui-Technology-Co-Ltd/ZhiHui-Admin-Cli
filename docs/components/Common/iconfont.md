---
title: 自定义图标 iconfont
---

# IconFont 自定义图标
可以引入[阿里巴巴矢量图标库](https://www.iconfont.cn/)中的图标

## 使用前的准备

1. 登录 [阿里巴巴矢量图标库](https://www.iconfont.cn/)
2. 搜索需要的图标并依次添加入库
3. 使用 [symbol](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)方式将项目下载至本地项目中
4. 在 main.js 中引入下载好的 css 和 js 文件

## 代码演示
&nbsp;

<code-box>
<template slot="demo">
  <icon-font name='icon-nanzhi' style="font-size:36px" />
  <icon-font name="icon-nvzhi" style="font-size:36px" />
  <icon-font name="icon-zuojiantou" style="font-size:36px" />
  <icon-font name="icon-youjiantou1" style="font-size:36px" />
  <icon-font name="icon-shezhi" style="font-size:36px" />
  <icon-font name="icon-guanbi" style="font-size:36px" />
</template>
<template slot="title">

## 基本使用

</template>
<template slot="desc">

指定图标对应的 `name` 属性

</template>
<template slot="code">

``` jsx
<template slot="demo">
  <icon-font name="icon-nanzhi" />
  <icon-font name="icon-nvzhi" />
  <icon-font name="icon-zuojiantou" />
  <icon-font name="icon-youjiantou1" />
  <icon-font name="icon-shezhi" />
  <icon-font name="icon-guanbi" />
</template>
```
</template>
</code-box>
&nbsp;
<code-box>
<template slot="demo">
  <div style="width: 88px;display: flex;flex-direction: column;align-items: center">
    <div style="width: 88px;height: 88px;display: flex;flex-direction: column;justify-content: center;align-items: center;margin-bottom: 5px">
    <icon-font name="icon-nanzhi" :size="demo_two_size" />
    </div>
    <a-input-number :min="16" :max="88" v-model="demo_two_size" step="10" @change="change" />
  </div>
</template>
<template slot="title">

## 控制图标大小

</template>
<template slot="desc">

设置 `size` 来控制图标的大小，

</template>
<template slot="code">

``` js
<template slot="demo">
  <div style="width: 88px;display: flex;flex-direction: column;align-items: center">
    <div style="width: 88px;height: 88px;display: flex;flex-direction: column;justify-content: center;align-items: center;margin-bottom: 5px">
    <icon-font name="icon-nanzhi" :size="demo_two_size" />
    </div>
    <a-input-number :min="16" :max="88" v-model="demo_two_size" step="10" @change="change" />
  </div>
</template>

export default {
  data () {
    return {
      demo_two_size: 'x-large'
    }
  },
  methods: {
    change (value) {
      this.demo_two_size = value
    }
  }
}
```
</template>
</code-box>
&nbsp;
<api-box>
<template slot="desc">

## props

参数 | 说明 | 类型 | 默认值
--|--|--|--
[name](#基本使用) | 使用 [阿里巴巴矢量图标库](https://www.iconfont.cn/) 中的类名 | string | ------
[size](#控制图标大小) | 图标的大小 | string \| number | 16px (ie8为12px)
</template>
</api-box>

<script>
export default {
  data () {
    return {
      demo_two_size: 36
    }
  },
  methods: {
    change (value) {
      this.demo_two_size = value
    }
  }
}
</script>