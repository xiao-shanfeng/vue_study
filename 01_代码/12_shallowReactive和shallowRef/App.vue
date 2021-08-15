<template>
  <h2>shallowReactive和shallowRef</h2>
  <h3>m1:{{m1}}</h3>
  <h3>m2:{{m2}}</h3>
  <h3>m3:{{m3}}</h3>
  <h3>m4:{{m4}}</h3>
  <button @click="update">更新数据</button>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    // 深度劫持（深监视）----深度响应式
    const m1 = reactive({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red"
      }
    });
    // 浅劫持（浅监视）-----浅度响应式
    const m2 = shallowReactive({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red"
      }
    });
    // 深度劫持（深监视）----深度响应式
    const m3 = ref({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red"
      }
    });
    // 浅劫持（浅监视）-----浅度响应式
    const m4 = shallowRef({
      name: "鸣人",
      age: 20,
      car: {
        name: "奔驰",
        color: "red"
      }
    });
    console.log(m1)
    console.log(m2)
    console.log(m3)
    console.log(m4)
    const update = () => {
      // m1.name += "===";
      // m1.car.name += "===";
      // m2.name += "===";
      // m2.car.name += "===";
      // m3.value.name += "===";
      // m3.value.car.name += "===";
      // m4.value.name += "===";
      m4.value.car.name += "===";
    }
    return {
      m1,
      m2,
      m3,
      m4,
      update
    }
  }
})
// 总结：
// 如果有一个对象数据，结构比较深，但变化时只是外层属性变化====>shallowReactive
// 如果有一个对象数据，后面会产生新的对象来替换====>shallowRef
</script>
<style>
</style>