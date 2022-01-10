<template>
  <div class="app-container">

      <var-cell v-ripple class="app-component"
                v-for="page in pages"
                @click="goRoute(page)"
                :key="page">
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
import {useRouter} from "vue-router";

export default defineNuxtComponent({
  setup() {
    const router = useRouter()
    const goRoute = (path)=>{
      router.push(path)
    }
    const pages = ref(Object
      .keys(import.meta.globEager('./**/index.vue'))
      .map(file => file.replace(/(\/index.vue)|(\.\/)/g, '')))
    return { pages,goRoute }
  }
})
</script>

<style lang="less">
.app-container {
  .app-component {
    text-transform: capitalize;
  }
}
</style>
