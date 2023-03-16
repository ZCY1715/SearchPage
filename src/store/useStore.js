import { defineStore } from 'pinia'

export default defineStore("store", {
  state: () => ({
    searchItemIndex: 0,
    extLinks: []
  }),
  getters: {},
  actions: {
    addLink(url, label) {
      this.extLinks.push({ url, label })
    },
    removeLink(index) {
      this.extLinks.splice(index, 1)
    },
    updateLink(index, url, label) {
      this.extLinks[index].url = url
      this.extLinks[index].label = label
    }
  },
  persist: {
    key: 'store',
    storage: localStorage,
  },
})
