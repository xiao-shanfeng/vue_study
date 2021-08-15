<template>
  <h2>ref的另一个作用：可以获取页面中的元素</h2>
  <input type="text" ref="inputRef" />
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    // 页面加载完毕input自动获取焦点
    const inputRef = ref<HTMLElement |null>(null);
    onMounted(() => {
      // ifinputRef有值，则自动获取焦点
      inputRef.value && inputRef.value.focus();
    })
    return {
      inputRef
    }
  }
})
</script>
<style>
</style>