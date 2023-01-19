import App from './App.vue'
import { createApp } from 'vue'
import { Themes } from '@varlet/ui'
import '@varlet/touch-emulator'

StyleProvider(Themes.dark)

createApp(App).mount('#app')
