---
title: 动作菜单 actionmenu
---

# ActionMenu 动作菜单
将数个动作或功能转换为一排菜单。

### 何时使用 
&nbsp;
- 需要对某组件进行数个操作时
- 提供三种不同类型的菜单
### 代码演示
&nbsp;

<ClientOnly>
<template>
<code-box>
<template slot="demo">
  <action-menu :config="config" />
</template>
<template slot="title">

## 基本使用

</template>
<template slot="desc">

基本的用法，将数个功能转换为按钮块，通过 `config` 配置按钮块各项属性

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
        { icon: 'plus', label: '新增', data: { action: 'create' } },
        { icon: 'edit', label: '编辑', data: { action: 'update' } }
      ]
    ]
  }
}
```
</template>
</code-box>
&nbsp;
<code-box>
<template slot="demo">
  <action-menu :config="config" :compact="true" />
</template>
<template slot="title">

## 紧凑型

</template>
<template slot="desc">

空间不足时的解决方案，使用`compact`设置紧凑型

</template>
<template slot="code">

``` html
<template slot="demo">
  <action-menu :config="config" :compact="true" />
</template>
```
``` js
export default {
  data () {
    config: [
      { label: '搜索', icon: 'search', data: { action: 'search' } },
      { label: '重置', icon: 'redo', data: { action: 'reset' } },
      [
        { icon: 'plus', label: '新增', data: { action: 'create' } },
        { icon: 'edit', label: '编辑', data: { action: 'update' } }
      ]
    ]
  }
}
```
</template>
</code-box>
&nbsp;
<code-box>
<template slot="demo">
  <action-menu :config="tableConfig" type="link" />
  <action-menu :config="tableConfig" :divider="false" type="link" style="width:50px" />
</template>
<template slot="title">

## 分割线

</template>
<template slot="desc">

可以通过 `divider` 控制是否显示分割线

</template>
<template slot="code">

``` html
<template slot="demo">
  <action-menu :config="tableConfig" type="link" />
  <a-config-provider :autoInsertSpaceInButton="false">
    <action-menu :config="tableConfig" :divider="false" type="link" />
  </a-config-provider>
</template>
```
``` js
export default {
  data () {
    tableConfig: [
        { label: '详情', data: { action: 'info' } },
        { label: '删除', data: { action: 'delete' } },
        [
          { icon: 'plus', label: '新增', data: { action: 'create' } },
          { icon: 'edit', label: '编辑', data: { action: 'update' } }
        ]
      ],
  }
}
```
</template>
</code-box>
&nbsp;
<code-box>
<template slot="demo">
  <action-menu :config="config" @action="_action" />
</template>
<template slot="title">

## 组件回调事件

</template>
<template slot="desc">

捕获组件传来的 `action` 事件

</template>
<template slot="code">

``` html
<template slot="demo">
  <action-menu :config="config" @action="_action" />
</template>
```
``` js
export default {
  data () {
    config: [
        { label: '搜索', icon: 'search', data: { action: 'search', data: 'This is a message of search' } },
        { label: '重置', icon: 'redo', data: { action: 'reset', data: 'This is a message of reset' } },
        [
          { icon: 'plus', label: '新增', data: { action: 'create', data: 'This is a message of create' } },
          { icon: 'edit', label: '编辑', data: { action: 'update', data: 'This is a message of update' } }
        ]
      ]
  },
  methods: {
    /**
     * ---
     * @param {String} action 动作
     * @param {Object} data 数据
     * ---
     */
    _action({ data, action }) {
      console.log('data:', data)
      console.log('action:', action)
    }
  }
}
```
</template>
</code-box>
&nbsp;
<code-box>
<template slot="demo">
  <a-table :columns="columns" :dataSource="data" :pagination="false">
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
  </a-table>
</template>
<template slot="title">

## 适应表格内空间的菜单

</template>
<template slot="desc">

表格中的使用场景

</template>

<template slot="code">

``` html
<template slot="demo">
  <a-table :columns="columns" :dataSource="data" :pagination="false">
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
  </a-table>
</template>
```
``` js
export default {
  data () {
    return {
      tableConfig: [
        { label: '详情', data: { action: 'info' } },
        { label: '删除', data: { action: 'delete' } },
        [
          { icon: 'plus', label: '新增', data: { action: 'create' } },
          { icon: 'edit', label: '编辑', data: { action: 'update' } }
        ]
      ],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
        },
        {
          title: '活动范围',
          dataIndex: 'address',
        },
        {
          width: 180,
          title: '操作',
          customRender: (text, data) => {
            return (
              <action-menu type="link" config={this.tableConfig} />
            )
          }
        }
      ],
      data: [
        {
          key: '1',
          name: '莲',
          age: 17,
          address: '秀尽学园'
        },
        {
          key: '2',
          name: '祐介',
          age: 18,
          address: '公立洸星高校'
        },
        {
          key: '3',
          name: '武见',
          age: 26,
          address: '四轩茶屋'
        },
      ]
    }
  }
}
```
</template>
</code-box>
</template>
</ClientOnly>
&nbsp;
<api-box>
<template slot="desc">

### API
#### props

参数 | 说明 | 类型 | 默认值
--|--|--|--
[config](#基本使用) | 动作菜单的配置数组 | array | ------
[compact](#紧凑型) | 是否为紧凑型 | boolean | false
[divider](#分割线) | 是否含有分割线 | boolean | true
[type](#适应表格内空间的菜单) | 设置按钮的类型 | string | default

#### events

名称 | 说明 | 回调参数 
--|--|--
[action](#事件) | 点击按钮后回调事件 | function({ action, data })

#### config 配置项示例

参数 | 说明 | 类型 | 默认值
--|--|--|--
label | 按钮名称 | string | ------
buttonProps | 按钮 props | [buttonProps](https://www.antdv.com/components/button) | [buttonProps](https://www.antdv.com/components/button)
data | 可以填入按钮对应的动作类型和要传递的数据 | object | ------

</template>
</api-box>

<script>
export default {
  data () {
    return {
      config: [
        { label: '搜索', icon: 'search', data: { action: 'search', data: 'This is a message of search' } },
        { label: '重置', icon: 'redo', data: { action: 'reset', data: 'This is a message of reset' } },
        [
          { icon: 'plus', label: '新增', data: { action: 'create', data: 'This is a message of create' } },
          { icon: 'edit', label: '编辑', data: { action: 'update', data: 'This is a message of update' } }
        ]
      ],
      tableConfig: [
        { label: '详情', data: { action: 'info' } },
        { label: '删除', data: { action: 'delete' } },
        [
          { icon: 'plus', label: '新增', data: { action: 'create' } },
          { icon: 'edit', label: '编辑', data: { action: 'update' } }
        ]
      ],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
        },
        {
          title: '活动范围',
          dataIndex: 'address',
        },
        {
          width: 178,
          title: '操作',
          customRender: (text, data) => {
            return (
              <action-menu type="link" config={this.tableConfig} />
            )
          }
        }
      ],
      data: [
        {
          key: '1',
          name: '莲',
          age: 17,
          address: '秀尽学园'
        },
        {
          key: '2',
          name: '祐介',
          age: 18,
          address: '公立洸星高校'
        },
        {
          key: '3',
          name: '武见',
          age: 26,
          address: '四轩茶屋'
        },
      ]
    }
  },
  methods: {
    _action({ data, action }) {
      console.log('data:', data)
      console.log('action:', action)
    }
  }
}
</script>
<style>
  .bmr{
    margin-right: 8px!important;
  }
</style>