<template>
<h2>setup和ref的基本使用</h2>
<h3>{{count}}</h3>
<button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    // let count = 0;
    // ref生成一个reflut
    const count = ref(0)
    console.log(count)

    let updateCount = () => {
      // count数据改变了，但是页面上面数据没有改变
      // count++;
      count.value++;
      console.log("========",count);
    }

    return {
      count,
      updateCount
    }
  }
});
</script>
