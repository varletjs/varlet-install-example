import { defineNuxtPlugin } from '#app'
import { StyleProvider, Themes } from '@varlet/ui'
import '@varlet/touch-emulator'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    StyleProvider(Themes.dark)
  }
})
