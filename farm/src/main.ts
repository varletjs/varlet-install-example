import App from './App.vue'
import { Themes, StyleProvider } from '@varlet/ui'
import { createApp } from 'vue'
import '@varlet/touch-emulator'
import '@varlet/ui/es/style'

StyleProvider(Themes.md3Dark)

createApp(App).mount('#app')
