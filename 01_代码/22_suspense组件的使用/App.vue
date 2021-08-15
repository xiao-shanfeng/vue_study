<template>
  <h2>App父级组件Suspense组件的使用</h2>
  <Suspense>
    <template #default>
      <AsyncComponent />
      <!-- <AsyncAddress /> -->
    </template>
    <template v-slot:fallback>
      <h2>Loding...</h2>
    </template>
  </Suspense>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';

// vue2的动态引入组件
// const AsyncComponent = import("./components/AsyncComponent.vue")
// vue3的动态引入组件
// const AsyncComponent = defineAsyncComponent(() => import("./components/AsyncComponent.vue"))

// 静态引入组件
import AsyncComponent from "./components/AsyncComponent.vue"
// import AsyncAddress from "./components/AsyncAddress.vue";
export default defineComponent({
  name: 'App',
  components: {
    AsyncComponent
    // AsyncAddress
  },
  setup() {
    return {
    }
  }
})
</script>
<style>
</style>