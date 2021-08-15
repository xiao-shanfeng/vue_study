<template>
<h2>App父级组件</h2>
<h3>msg{{msg}}</h3>
<button>更新数据</button>
<hr>
<Child :msg="msg" msg2="test" @test="test"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Child from "./components/Child.vue"

export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  setup() {

    const msg = ref("what are you no sha lei")

    function test(val: string) {
      msg.value += val
    }


    return {
      msg,
      test
    }
  }
});
</script>
