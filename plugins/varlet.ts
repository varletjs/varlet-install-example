import { defineNuxtPlugin } from '#app'
import { Button, Space, Ripple } from '@varlet/ui'
import '@varlet/touch-emulator'
import '@varlet/ui/es/button/style/index.js'
import '@varlet/ui/es/space/style/index.js'
import '@varlet/ui/es/ripple/style/index.js'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp
    .use(Button)
    .use(Space)
    .use(Ripple)
})
