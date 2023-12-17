import App from './App.vue'
import { Themes, StyleProvider } from '@varlet/ui'
import { createApp } from 'vue'
import '@varlet/touch-emulator'
import '@varlet/ui/es/style'

StyleProvider(Themes.dark)

createApp(App).mount('#app')
