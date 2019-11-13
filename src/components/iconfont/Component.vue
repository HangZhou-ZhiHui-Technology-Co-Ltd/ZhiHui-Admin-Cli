<template>
  <svg class="icon-font" :style="{fontSize: size}">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon-font',
  props: {
    /**
     * 图标类名
     */
    name: {
      type: String,
      required: true
    },
    /**
     * 图标大小
     */
    size: {
      type: [String, Number]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
