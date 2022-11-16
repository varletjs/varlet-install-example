import { defineNuxtPlugin } from '#app'
import Varlet, { StyleProvider, Themes } from '@varlet/ui'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Varlet)

  if (process.client) {
    StyleProvider(Themes.dark)
  }
})
