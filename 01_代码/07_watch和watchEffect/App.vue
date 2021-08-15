<template>
<h2>计算属性和监视</h2>
<fieldset>
  <legend>姓名操作</legend>
  姓氏：<input type="text" v-model="user.firstName" placeholder="请输入姓氏" /><br>
  名字：<input type="text" v-model="user.lastName" placeholder="请输入名字" /><br>
</fieldset>
<fieldset>
  <legend>计算属性和监视的演示</legend>
  姓名：<input type="text" v-model="fullName1" placeholder="显示姓名" /><br>
  姓名：<input type="text" v-model="fullName2" placeholder="显示姓名" /><br>
  姓名：<input type="text" v-model="fullName3" placeholder="显示姓名" /><br>
</fieldset>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败"
    })
    //vue3中computed计算属性是通过函数执行的，传一个参数是获取计算属性的，返回的仍然是一个响应式数据
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName
    })
    // console.log(fullName1)
    // 如果computed里面传递的是一个对象，那这个对象有两个方法（get获取值和set设置值）
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName
      },
      set(val:string) {
        const names = val.split("_")
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })
    const fullName3 = ref("")
    // watch监视数据
    // watch(user, ({firstName, lastName}) => {
    //   fullName3.value = firstName + "_" + lastName
    // }, {immediate: true, deep: true})
    // immediate是在初始化的时候执行一次
    // deep指深度监视

    // watchEffect也可以监视数据，不需要配置immediate，默认就会执行一次
    watchEffect(() => {
      fullName3.value = user.firstName + "_" + user.lastName;
    })
    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
})
</script>

<style>
</style>