import Vue from 'vue'
import App from './App.vue'
import '@varlet-vue2/ui/es/style.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
