import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.$router.afterEach(() => {
      scrollTo(0,0)
    })
    
    nuxtApp.$router.beforeEach((to) => {
      document.title = to.name
    })
  }
})
