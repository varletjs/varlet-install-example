import { defineNuxtPlugin } from '#app'
import Varlet, { StyleProvider } from '@varlet/ui'
import dark from '@varlet/ui/es/themes/dark'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Varlet)

  if (process.client) {
    StyleProvider(dark)
  }
})
