<template>
  <div class="todo-header">
    <input type="text" @keyup.enter="add" v-model="title" placeholder="请输入你的任务名称，按回车确认" />
  </div>
</template>
<script lang='ts'>
import { Todo } from '@/types/todo';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Header',
  props: {
    addTodo: {
      type: Function,
      required: true,
    }
  },
  setup(props) {
    const title = ref("")
    const add = () => {
      const text = title.value;
      if(!text.trim()) {
        return;
      }
      const todo:Todo = {
        id: Date.now(),
        title: text,
        isComplete: false
      }
      props.addTodo(todo);
      title.value = ""
    }
    return {
      add,
      title
    }
  }
})
</script>
<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, .8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, .6);
}
</style>