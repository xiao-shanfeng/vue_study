<template>
  <h2>CustomRef的使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{keyword}}</p>
</template>
<script lang='ts'>
// 实现防抖效果
import { customRef, defineComponent } from 'vue';
// 自定义hook防抖函数,采用范型的形式
function useDebouncedRef<T>(value:T, delay=200) {
  // 
  let timeOutId: number
  return customRef((track, trigger) => {
    return {
      get() {
        // 告诉vue去追踪数据
        track();
        return value;
      },
      set(newValue:T) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
          value = newValue;
          // 告诉vue去更新界面
          trigger();
        }, delay);
      }
    }
  })
}
export default defineComponent({
  name: 'App',
  setup() {
    // const keyword = ref("abc")
    const keyword = useDebouncedRef("abc", 500);
    return {
      keyword
    }
  }
})
</script>
<style>
</style>