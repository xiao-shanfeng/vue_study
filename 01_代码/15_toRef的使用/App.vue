<template>
  <h2>toRef的使用以及特点</h2>
  <h3>state:{{state}}</h3>
  <h3>age:{{age}}</h3>
  <h3>money:{{money}}</h3>
  <hr>
  <button @click="update">更新数据</button>
  <!-- 由于age是ref对象，在js中使用age.value的形式拿数据，但是在html里面直接可以使用age就可以了，相当于age.value -->
  <Child :age="age" />
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, toRef } from 'vue';
import Child from "./components/Child.vue"
export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  setup() {
    const state = reactive({
      age: 20,
      money: 100
    })
    // toRef是把响应式数据state对象中的某个属性age变成ref对象了
    // toRef相当于把原有数据的地址赋给了新的变量
    const age = toRef(state, "age");
    // ref是把响应式对象中的某个属性变成ref对象
    // ref相当于把原有数据拷贝了一份赋给了新的变量
    const money = ref(state.money);
    console.log(age)
    console.log(money)
    const update = () => {
      // state.age += 2;//都改了
      age.value += 2;//都改了
      // state.money += 2;//只改了一个
      // money.value += 2;//只改了一个
    }
    return {
      state,
      age,
      money,
      update
    }
  }
})
</script>
<style>
</style>