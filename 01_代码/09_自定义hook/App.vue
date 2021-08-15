<template>
<h2>自定义hook函数操作</h2>
<h2>x:{{x}},y:{{y}}</h2>
<h3 v-if="loading">正在加载中....</h3>
<h3 v-else-if="errorMsg">错误信息：{{errorMsg}}</h3>
<ul v-else>
  <!-- <li>id:{{data.id}}</li>
  <li>address:{{data.address}}</li>
  <li>distance:{{data.distance}}</li> -->
  <li v-for="item in data" :key="item.id">
    <h3>id:{{item.id}}</h3>
    <h3>title:{{item.title}}</h3>
    <h3>price:{{item.price}}</h3>
  </li>
</ul>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";

import useMousePosition from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'

// interface IAddressData {
//   id: number;
//   address: string;
//   distance: string;
// }
interface IProductData {
  id: number;
  title: string;
  price: number;
}

export default defineComponent({
  name: "App",
  setup() {
    const { x, y } = useMousePosition();
    // const { loading, data, errorMsg } = useRequest<IAddressData>("/data/address.json");
    const { loading, data, errorMsg} = useRequest<IProductData[]>("/data/products.json");
    watch(data, () => {
      if(data.value) {
        console.log(data.value.length);
      }
    })
    return {
      x,
      y,
      loading,
      data,
      errorMsg
    }
  }
})
</script>

<style>
</style>