<template>
  <div class="app-container">
    <var-cell v-ripple class="app-component" v-for="page in pages" @click="to(page)" :key="page">
      <template #extra>
        <var-icon name="chevron-right" size="14" />
      </template>
      <template #default>
        {{ page }}
      </template>
    </var-cell>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineNuxtComponent({
  setup() {
    const router = useRouter()

    const to = (path) => {
      router.push(path)
    }

    const pages = ref(
      Object.keys(import.meta.globEager('./**/index.vue')).map((file) => file.replace(/(\/index.vue)|(\.\/)/g, ''))
    )

    return { pages, to }
  },
})
</script>

<style lang="less" scoped>
.app-container {
  padding: 10px 0;

  .app-component {
    text-transform: capitalize;
  }
}
</style>
