<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-skeleton :loading="loading">Loading Data</var-skeleton>

    <app-type>Display Title</app-type>
    <var-skeleton title :loading="loading">Loading Data</var-skeleton>

    <app-type>Custom Row Heights</app-type>
    <var-skeleton title :rows="3" :loading="loading" :rows-width="['200px', '100px', '50px']">
      Loading Data
    </var-skeleton>

    <app-type>Display Avatar</app-type>
    <var-skeleton title avatar :loading="loading">Loading Data</var-skeleton>

    <app-type>Display Card</app-type>
    <var-skeleton title avatar card :loading="loading">Loading Data</var-skeleton>

    <app-type>Fullscreen Mode</app-type>
    <var-button type="danger" class="button" @click="fullscreenLoading = !fullscreenLoading">
      Toggle Fullscreen Mode
    </var-button>
    <var-skeleton fullscreen :loading="fullscreenLoading" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'

export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const loading = ref(true)
    const fullscreenLoading = ref(false)
    return { loading, fullscreenLoading }
  },
})
</script>

<style></style>
