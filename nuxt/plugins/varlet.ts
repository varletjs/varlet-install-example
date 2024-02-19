import { StyleProvider, Themes } from '@varlet/ui'
import '@varlet/touch-emulator'

export default defineNuxtPlugin(() => {
  if (process.client) {
    StyleProvider(Themes.md3Dark)
  }
})
