---
title: 自定义图标 iconfont
---

# IconFont 自定义图标
可以自由引入阿里巴巴矢量图标库中的图标

## 何时使用
- ant design vue 图标库无法支持业务场景时
- 可以自己设计图标

## 使用前的准备

1. 登录 [iconfont.cn](https://www.iconfont.cn/)
2. 搜索需要的图标并依次添加入库
3. 使用 [symbol](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)方式将项目下载至本地
4. 将下载的文件放入项目 /src 根目录下

## 代码演示
&nbsp;

<code-box>
<template slot="demo">
  <icon-font name="icon-nanzhi" />
  <icon-font name="icon-nvzhi" />
  <icon-font name="icon-zuojiantou" />
  <icon-font name="icon-youjiantou1" />
  <icon-font name="icon-shezhi" />
  <icon-font name="icon-guanbi" />
</template>
<template slot="title">

## 基本使用

</template>
<template slot="desc">

使用 `<icon-font/>` 标签声明组件，指定图标对应的 `name` 属性

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
  <icon-font name="icon-nanzhi" size="20" /><br/>
  <icon-font name="icon-nanzhi" size="small" /><br/>
  <icon-font name="icon-nanzhi" size="18px" />
</template>
<template slot="title">

## 控制图标大小

</template>
<template slot="desc">

设置 `size` 来控制图标的大小，

</template>
<template slot="code">
``` jsx
<template slot="demo">
  <icon-font name="icon-nanzhi" size="20" /><br/>
  <icon-font name="icon-nanzhi" size="small" /><br/>
  <icon-font name="icon-nanzhi" size="18px" />
</template>
```
</template>
</code-box>

## props

参数 | 说明 | 类型 | 默认值
--|--|--|--
[name](#基本使用) | 图标名字，使用 [iconfont.cn](https://www.iconfont.cn/) 库中的名字 | string | ------
[size](#控制图标大小) | 图标所使用的字号，与 `font-size` 保持一致 | string \| number | ------