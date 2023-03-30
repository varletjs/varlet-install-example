import App from './App.vue'
import { createApp } from 'vue'
import { Themes } from '@varlet/ui'
import '@varlet/touch-emulator'
import router from '@/router'

StyleProvider(Themes.dark)

createApp(App).use(router).mount('#app')