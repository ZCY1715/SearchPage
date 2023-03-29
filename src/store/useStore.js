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
    },
    moveLinkLeft(index) {
      if (index <= 0) return
      [
        this.extLinks[index - 1],
        this.extLinks[index]
      ] = [
          this.extLinks[index],
          this.extLinks[index - 1]
        ]
    },
    moveLinkRight(index) {
      if (index >= this.extLinks.length - 1) return
      [
        this.extLinks[index],
        this.extLinks[index + 1]
      ] = [
          this.extLinks[index + 1],
          this.extLinks[index]
        ]
    }
  },
  persist: {
    key: 'store',
    storage: localStorage,
  },
})
