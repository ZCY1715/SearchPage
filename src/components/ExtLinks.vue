<template>
  <div class="container">
    <span v-for="link of links" class="linkItem">
      <img :src="getFaviconAPI(link.url)" alt="" @click="openLink(link.url)">
      <span class="name">{{ link.label }}</span>
      <span v-if="link.canEdit" class="edit">
        <span @click="() => moveLeft(link.index)" title="左移">←</span>
        <span @click="() => moveRight(link.index)" title="右移">→</span>
        <span @click="() => showEdit(link.index)" title="编辑">🖉</span>
        <span @click="() => removeLink(link.index)" title="删除">🗙</span>
      </span>
    </span>
    <span v-if="links.length < 32" class="linkItem" style="justify-content: center;font-size: 25px;"
      @click="showPanel = true">
      ☩
    </span>
    <div v-if="showPanel" class="addLinkPanel" @click="clickOutsideHandle">
      <div class="wrap">
        <h3>编辑</h3>
        <div>
          <span>website*</span>
          <input type="text" v-model="newURL" />
        </div>
        <div>
          <span>name*</span>
          <input type="text" v-model="newLabel">
        </div>
        <div class="control">
          <span @click="showPanel = false">close</span>
          <span @click="saveLink">save</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { extLinks } from '../utils/constants'
import useStore from '../store/useStore'
import { getFaviconAPI } from '../utils/helper'

const showPanel = ref(false)
const newURL = ref("")
const newLabel = ref("")
const editIndex = ref(Number.MAX_SAFE_INTEGER)

const store = useStore()

const links = computed(() => [
  ...extLinks.map(e => ({ ...e, canEdit: false })),
  ...store.extLinks.map((e, index) => ({ ...e, canEdit: true, index }))
])

const openLink = (url) => window.open(url, "_blank")

const saveLink = () => {

  if (
    !newURL.value ||
    !newLabel.value
  ) return

  let url = newURL.value

  url = url.replace(/http(s?):\/\//, "")
  if (url.indexOf(".") === url.lastIndexOf(".")) {
    url = "www." + url
  }
  url = "https://" + url

  if (editIndex.value === Number.MAX_SAFE_INTEGER) {
    store.addLink(url, newLabel.value)
  } else {
    store.updateLink(editIndex.value, url, newLabel.value)
  }

  showPanel.value = false
}

const moveLeft = (index) => store.moveLinkLeft(index)

const moveRight = (index) => store.moveLinkRight(index)

const showEdit = (index) => {
  editIndex.value = index
  newURL.value = store.extLinks[index].url
  newLabel.value = store.extLinks[index].label
  showPanel.value = true
}

const removeLink = (index) => store.removeLink(index)

const clickOutsideHandle = (e) => e.target === e.currentTarget && (showPanel.value = false)

watch(showPanel, () => {
  if (!showPanel.value) {
    newURL.value = ""
    newLabel.value = ""
    editIndex.value = Number.MAX_SAFE_INTEGER
  }
})



</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100px;
  margin-top: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  column-gap: 1px;
}

.linkItem {
  width: 100px;
  height: 100px;
  transition: .2s;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.linkItem:hover {
  transform: translateY(-10px);
}

.linkItem img {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  aspect-ratio: 1;
}

.linkItem .name {
  font-size: 14px;
  margin-top: 10px;
  color: rgb(247, 248, 156);
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px #666, 2px 2px 2px #666;
}

.linkItem:hover .edit {
  opacity: 1;
}

.edit {
  position: absolute;
  right: -11px;
  top: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: .3s;
}

.edit span {
  font-size: 16px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  transition: .3s;
  color: #fff;
}

.edit span:hover {
  background-color: rgb(247, 180, 35);

}

.addLinkPanel {
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrap {
  width: 400px;
  height: 220px;
  background-color: #fff;
  padding: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
}

.wrap div {
  width: 100%;
  height: 30px;
  display: flex;
  margin-bottom: 20px;
  align-items: flex-end;
}

.wrap span {
  width: 100px;
  font-weight: 300;
}

.wrap input {
  width: 200px;
  height: 30px;
  border: none;
  outline: 0;
  border-bottom: 1px solid rgb(247, 180, 35);
  font-size: 18px;
}

.wrap input:focus {
  border-bottom: 2px solid rgb(247, 180, 35);
}

.control {
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
}

.control span {
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border: 1px solid rgb(247, 180, 35);
  cursor: pointer;
  transition: .3s;
}

.control span:hover {
  background-color: rgb(247, 180, 35);
  color: #fff;
}
</style>