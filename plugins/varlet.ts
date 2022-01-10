import { defineNuxtPlugin } from '#app'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'
import VarLet from '@varlet/ui'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VarLet)
})
