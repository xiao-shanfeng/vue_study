<template>
<!-- 片段标签，vue3中template里面不需要根标签，内部会将多个标签包含在一个Fragment虚拟元素中减少标签层级，减少内存占用 -->
  <h2></h2>
  <h3></h3>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    return {
    }
  }
})
</script>
<style>
</style>