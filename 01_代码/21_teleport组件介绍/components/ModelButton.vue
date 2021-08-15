<template>
<button @click="modelOpen=true">打卡一个对话框</button>
<teleport to="body">
  <div v-if="modelOpen">
  <div>这是对话框</div>
  <button @click="modelOpen=false">关闭对话框</button>
</div>
</teleport>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'ModelButton',
  setup() {
    const modelOpen = ref(false);
    return {
      modelOpen
    }
  }
})
</script>
<style>
</style>