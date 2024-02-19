import App from './App.vue'
import { createApp } from 'vue'
import Varlet, { StyleProvider, Themes } from '@varlet/ui'
import '@varlet/touch-emulator'
import '@varlet/ui/es/style'

StyleProvider(Themes.md3Dark)

createApp(App).use(Varlet).mount('#root')
