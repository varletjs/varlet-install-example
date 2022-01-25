import Varlet, { Locale } from '@varlet/ui'
import enUS from '@varlet/ui/es/locale/en-US'
import { defineNuxtPlugin } from '#app'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Varlet)
  Locale.add('en-US', enUS)
  Locale.use('en-US')
})
