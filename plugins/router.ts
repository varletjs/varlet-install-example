import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.$router.afterEach((to) => {
      scrollTo(0,0)
      document.title = to.name
    })
  }
})
