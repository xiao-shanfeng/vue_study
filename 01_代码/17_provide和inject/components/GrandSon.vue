<template>
  <h3 :style="{color}">GrandSon孙子组件</h3>
</template>
<script lang='ts'>
import { defineComponent, inject, Ref } from 'vue';
export default defineComponent({
  name: 'GrandSon',
  setup() {
    // 获取数据,采用范型是为了防止文件爆红
    const color = inject<Ref>("color");
    return {
      color
    }
  }
})
</script>
<style>
</style>