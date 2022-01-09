<template>
  <div class="app-container">
    <NuxtLink
      class="app-component"
      v-for="page in pages"
      :to="`/${page}`"
      :key="page"
      v-ripple
    >
      {{ page }}
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { ref } from 'vue'

export default defineNuxtComponent({
  setup() {
    const pages = ref(Object
      .keys(import.meta.globEager('./**/index.vue'))
      .map(file => file.replace(/(\/index.vue)|(\.\/)/g, '')))

    return { pages }
  }
})
</script>

<style lang="less">
.app-container {
  .app-component {
    display: block;
    padding: 10px 14px;
    text-decoration: none;
    color: #555;
  }
}
</style>
