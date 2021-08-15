<template>
  <h2>readonly和shallowReadonly</h2>
  <h3>state:{{state2}}</h3>
  <button @click="update">更新数据</button>
</template>
<script lang='ts'>
import { defineComponent, reactive, shallowReadonly } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({ 
      name: "佐助",
      age: 20,
      car: {
        name: "奔驰",
        color: "red",
      }
    })
    // readonly是只读数据，深度只读
    // const state2 = readonly(state)
    // shallowReadonly是只读数据，浅度只读
    const state2 = shallowReadonly(state)
    const update = () => {
      // state2.name += "===="
      state2.car.name += "==="
    }
    return {
      state2,
      update
    }
  }
})
</script>
<style>
</style>