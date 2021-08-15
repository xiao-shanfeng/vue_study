<template>
  <div>Vue3</div>
  <h2>{{number}}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    console.log("setup函数")
    const number = 10;
    return {
      number
    }
  }
});
</script>
