import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.$router.afterEach((to, from, next) => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    });
  }
})
