import './index.css';
import { createApp } from 'vue';
import App from './App.vue';
import { StyleProvider,Themes } from '@varlet/ui'
import '@varlet/touch-emulator'

StyleProvider(Themes.dark)

createApp(App).mount('#root');