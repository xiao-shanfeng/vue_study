<template>
<h2>Child子级组件</h2>
<h3>msg:{{msg}}</h3>
<!-- <h3>count:</h3> -->
<button @click="test">分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
  name : "Child",
  props: ["msg"],
  // setup(props, context) {
    // context建议使用以下方式
  setup(props, {attrs, slots, emit}) {
    // props参数是一个proxy对象，包含了父级组件传递给子级组件的数据，并且是子级组件中使用props接收到的所有属性
    // console.log(props.msg);
    // context中的attrs是一个proxy对象，包含了父级组件传递给自己组件但是不在自己组件中props属性中的所有数据
    // console.log(context.attrs.msg2);

    // context中emit是一个函数，主要就是分发事件的，对于父级组件中自定义的事件进行处理的
    // console.log(context.emit);

    function test() {
      emit("test", "++")
    }
    return {
      test
    }
  }
})
</script>

<style>
</style>