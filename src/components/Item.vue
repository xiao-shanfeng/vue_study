<template>
  <li @mouseenter="mouseHandle(true)" @mouseleave="mouseHandle(false)" :style="styleObj">
    <label>
      <!-- <input type="checkbox" :checked="todo?.isComplete" /> -->
      <input type="checkbox" v-model="isComplete" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo()" v-show="isShow">删除</button>
  </li>
</template>
<script lang='ts'>
import { Todo } from '../types/todo';
import { computed, defineComponent, reactive, ref } from 'vue';
import { Style } from '@/types/itemStyle';
export default defineComponent({
  name: 'Item',
  props: {
    todo: {
      type: Object as () => Todo,
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    taggleTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const isShow = ref(false);
    const styleObj = reactive<Style>({});
    const isComplete = computed({
      get() {
        return props.todo.isComplete
      },
      set(val: boolean) {
        props.taggleTodo(props.todo, val)
      }
    })
    const mouseHandle = (flag: boolean) => {
      if(flag) {
        isShow.value = true
        styleObj.backgroundColor = "pink"
        styleObj.color = "green"
      }else {
        isShow.value = false
        styleObj.backgroundColor = "white"
        styleObj.color = "black"
      }
    }
    const delTodo = () => {
      if(window.confirm("确定要删除吗？")){
        props.deleteTodo(props.index)
      }
    }
    return {
      styleObj,
      isShow,
      isComplete,
      mouseHandle,
      delTodo
    }
  }
})
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  margin-top: 3px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}

</style>