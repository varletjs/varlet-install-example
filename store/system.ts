import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  getters: {
    isPhone: () => /Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent)
  },
})
