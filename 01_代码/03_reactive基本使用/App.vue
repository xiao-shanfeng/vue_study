<template>
<h2>reactive的使用</h2>
<h3>姓名:{{user.name}}</h3>
<h3>年龄:{{user.age}}</h3>
<h3>媳妇:{{user.wife}}</h3>
<button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const user = reactive({
      name: "小明",
      age: 20,
      wife: {
        name: "小甜甜",
        age: 18,
        cars: ["奔驰","宝马","奥迪"]
      }
    })
    console.log(user)
    const updateUser = () => {
      user.name += "==";
      user.age += 2;
      user.wife.name += "==";
      user.wife.cars[0] = "玛莎拉蒂"
    }
    return {
      user,
      updateUser
    }
  }
});
</script>
