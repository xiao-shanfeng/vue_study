<template>
  <ul class="todo-main">
    <Item :taggleTodo="taggleTodo" :deleteTodo="deleteTodo" v-for="(todo,index) in todos" :key="todo.id" :index="Number(index)" :todo="todo" />
  </ul>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import Item from "./Item.vue";
export default defineComponent({
  name: 'List',
  props: ["todos", "deleteTodo", "taggleTodo"],
  components: {
    Item
  },
  setup() {
    return {
    }
  }
})
</script>
<style scoped>
.todo-main {
  margin-left: 0;
  padding: 0;
  border-radius: 2px;
  border: 1px solid #ddd;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>