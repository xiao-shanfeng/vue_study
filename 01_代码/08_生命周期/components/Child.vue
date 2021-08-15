<template>
  <h2>Child子级组件</h2>
  <h3>msg:{{msg}}</h3>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";
export default defineComponent({
  name: "Child",
  beforeCreate() {
    console.log("2.x中的beforeCreate...")
  },
  created() {
    console.log("2.x中的created...");
  },
  beforeMount() {
    console.log("2.x中的beforeMount...")
  },
  mounted() {
    console.log("2.x中的mounted...");
  },
  beforeUpdate() {
    console.log("2.x中的beforeUpdate...")
  },
  updated() {
    console.log("2.x中的updated...")
  },
  // beforeDestroy和destroyed是2.x里面的，在3.x中改名字了，不能在3.x中使用了
  /* 
  beforeDestroy() {
    console.log("2.x中的beforeDestroy...")
  },
  destroyed() {
    console.log("2.x中的destroyed...")
  },
  */
  beforeUnmount() {
    console.log("3.x中的beforeUnmount...")
  },
  unmounted() {
    console.log("3.x中的unmounted...")
  },
  setup() {
    console.log("3.0中的setup")
    const msg = ref("abc");
    const update = () => {
      msg.value += "===";
    }
    onBeforeMount(() => {
      console.log("3.0中的onBeforeMount");
    })
    onMounted(() => {
      console.log("3.0中的onMounted");
    })
    onBeforeUpdate(() => {
      console.log("3.0中的onBeforeUpdate")
    })
    onUpdated(() => {
      console.log("3.0中的onUpdated")
    })
    onBeforeUnmount(() => {
      console.log("3.0中的onBeforeUnmount")
    })
    onUnmounted(() => {
      console.log("3.0中的onUnmounted")
    })
    return {
      msg,
      update,
    }
  }
})
</script>

<style>
</style>