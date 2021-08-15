<template>
<div class="todo-container">
  <div class="todo-wrap">
    <Header :addTodo="addTodo" />
    <List :deleteTodo="deleteTodo" :taggleTodo="taggleTodo" :todos="todos" />
    <Footer :clearAllCompletedTodos="clearAllCompletedTodos" :checkAll="checkAll" :todos="todos" />
  </div>
</div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue';
import Header from "./components/Header.vue"
import List from "./components/List.vue"
import Footer from "./components/Footer.vue"

import {Todo} from "./types/todo"
import { readTodos, saveTodos } from './utils/localStorageUtils';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    List,
    Footer
  },
  setup() {
    const state = reactive<{todos: Todo[]}>({
      todos: []
    })
    // 界面加载完毕后，过了一会加载数据
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos();
      }, 2000);
    })
    // 添加数据的方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }
    // 删除数据的方法
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1)
    }
    // 修改todo的isComplete属性的状态
    const taggleTodo = (todo: Todo, val: boolean) => {
      todo.isComplete = val
      console.log(todo)
    }
    // 修改所有todo的isComplete属性的状态
    const checkAll = (isComplete: boolean) => {
      state.todos.forEach(todo => {
        todo.isComplete = isComplete
      })
    }
    // 清除所有选中的数据
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter((todo) => !todo.isComplete)
    }

    // 监视state中的todos变化
    // watch(state.todos, (vale) => {
    //   saveTodos(vale)
    // }, { deep: true })
    watch(() => state.todos, saveTodos, { deep: true })
    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      taggleTodo,
      checkAll,
      clearAllCompletedTodos
    }
  }
})
</script>
<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>