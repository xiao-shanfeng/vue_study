<template>
<h2>reactive和ref的细节问题</h2>
<h3>m1:{{m1}}</h3>
<h3>m2:{{m2}}</h3>
<h3>m3:{{m3}}</h3>
<button @click="update">更改数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const m1 = ref("abc");
    const m2 = reactive({
      name: "小明",
      wife: {
        name: "小红"
      }
    })
    // ref中放入一个对象，会经过reactive处理，形成一个Proxy对象(深度处理的)
    const m3 = ref({
      name: "小明",
      wife: {
        name: "小红"
      }
    })
    const update = () => {
      m1.value += "===";
      m2.wife.name += "===";
      // m3.value.name += "===";
      m3.value.wife.name += "===";
      console.log(m3.value.wife);
    }
    return {
      m1,
      m2,
      m3,
      update
    }
  }
})
</script>

<style>
</style>