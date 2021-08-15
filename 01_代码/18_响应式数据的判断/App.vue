<template>
  <h2>响应式数据的判断</h2>
</template>
<script lang='ts'>
import { defineComponent, isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref } from 'vue';
export default defineComponent({
  name: 'App',
  setup() {
    // isRef判断对象是不是通过ref创建的
    console.log(isRef(ref({})))
    // isReact判断对象是不是通过reactive创建的
    console.log(isReactive(reactive({})))
    // isReadonly判断对象是不是通过readonly创建的
    console.log(isReadonly(readonly({})))
    // isProxy判断对象是不是通过reactive和readonly创建的
    console.log(isProxy(reactive({})))
    console.log(isProxy(readonly({})))
    console.log(isProxy(ref({})))
    return {
    }
  }
})
</script>
<style>
</style>