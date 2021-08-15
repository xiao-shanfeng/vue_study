<template>
  <h2>App父级组件</h2>
  <ModelButton />
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import ModelButton from "./components/ModelButton.vue"
export default defineComponent({
  name: 'App',
  components: {
    ModelButton
  },
  setup() {
    return {
    }
  }
})
</script>
<style>
</style>