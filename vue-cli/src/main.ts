import App from './App.vue'
import { createApp } from 'vue'
import { Themes } from '@varlet/ui'
import '@varlet/touch-emulator'

StyleProvider(Themes.md3Dark)

createApp(App).mount('#app')
