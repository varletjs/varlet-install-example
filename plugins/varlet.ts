import { defineNuxtPlugin } from '#app'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'
import VarLet,{ Locale } from '@varlet/ui'
import enUS from '@varlet/ui/es/locale/en-US'



export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VarLet)
  Locale.add('en-US', enUS)
  Locale.use('en-US')
})
