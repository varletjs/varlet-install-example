import App from './App.vue'
import { createApp } from 'vue'
import { Themes } from '@varlet/ui'
import '@varlet/touch-emulator'
import '@/assets/fonts/iconfont.css'

StyleProvider(Themes.dark)

createApp(App).mount('#app')
