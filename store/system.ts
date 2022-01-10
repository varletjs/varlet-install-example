import { defineStore } from 'pinia'

import { $localStorage } from '~/plugins/init.client'

export const useSystemStore = defineStore('system', {
  getters: {
    isPhone: () => /Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent),
    getBrowserThemes:
      () =>
      (themes = 'VARLET_THEMES'): 'darkThemes' | 'themes' => {
        let currentThemes = $localStorage.get(themes) as 'darkThemes' | 'themes'
        if (!currentThemes && process.client) {
          currentThemes = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'darkThemes' : 'themes'
          $localStorage.set(themes, currentThemes)
        }
        return currentThemes
      },
  },
})
