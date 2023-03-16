<template>
  <div class="container" tabindex="0">
    <select @change="changeHandle">
      <option v-for="item, i of searchUrls" :selected="i === index" :value="i">{{ item.label
      }}</option>
    </select>
    <img :src="favicon" alt="" tabindex="0">
    <input type="text" v-model="searchValue" @keydown.enter="search">
    <img :src="SearchPng" alt="" tabindex="0" @click="search">
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { searchUrls } from '../utils/constants'
import { getFaviconAPI } from '../utils/helper'
import SearchPng from '../assets/search.png'
import useStore from '../store/useStore'

const store = useStore()

const searchValue = ref("")

const index = computed({
  get() {
    return store.searchItemIndex
  },
  set(v) {
    store.searchItemIndex = v
  }
})
const favicon = computed(() => getFaviconAPI(searchUrls[index.value].url))

const changeHandle = e => {
  const options = Array.from(e.target.children)
  const i = options.findIndex(o => o.selected)
  index.value = i
}

function search() {
  if (!searchValue.value) return
  const url = searchUrls[index.value].url + searchValue.value
  window.open(url, "_blank")
}

</script>

<style scoped>
.container {
  position: relative;
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

select {
  position: absolute;
  left: 20px;
  top: -40px;
  width: 100px;
  height: 30px;
  outline: 0;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

input {
  flex: 1;
  height: 100%;
  outline: 0;
  border: 0;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0);
  font-size: 20px;
  margin: 0 20px 0 20px;
  cursor: pointer;
}

img {
  aspect-ratio: 1;
  height: 50%;
  cursor: pointer;
}
</style>