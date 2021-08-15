<template>
  <h2>toRefs的使用</h2>
  <!-- <h2>name:{{state.name}}</h2>
  <h2>age:{{state.age}}</h2> -->
  <h2>name:{{name}}</h2>
  <h2>age:{{age}}</h2>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: "自来也",
      age: 47
    })
    const {name, age} = toRefs(state);
    // console.log(state2)
    setInterval(() => {
      state.name += "====="
      // console.log("=====")
    }, 1000);
    return {
      // ...state
      // ...state2
      name,
      age
    }
  }
})
</script>
<style>
</style>