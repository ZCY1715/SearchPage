<template>
  <div class="container" tabindex="0">
    <input type="text" v-model="searchValue" @keydown.enter="search">
    <img :src="SearchPng" alt="" tabindex="0" @click="search">
  </div>
</template>

<script setup>
import SearchPng from '../assets/search.png'
import { ref } from 'vue'

const searchValue = ref("")
const urls = [
  "https://www.baidu.com/s?wd="
]
const index = ref(0)

function search() {
  const url = urls[index.value] + searchValue.value
  window.open(url, "_blank")
}

</script>

<style scoped>
.container {
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px 20px 5px 20px;
  border-radius: 25px;
  transition: .3s;
  box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);
}

.container:has(input:focus, img:focus),
.container:focus {
  background-color: #fff;
  box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.7);
}

input {
  flex: 1;
  height: 100%;
  outline: 0;
  border: 0;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0);
  font-size: 20px;
  margin-right: 20px;
}

img {
  aspect-ratio: 1;
  height: 50%;
  cursor: pointer;
}
</style>