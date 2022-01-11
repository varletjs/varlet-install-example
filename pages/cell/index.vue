<template>
  <app-type>Basic Usage</app-type>
  <var-cell>{{ content }}</var-cell>
  <var-cell>{{ content }}</var-cell>

  <app-type>Show Icon</app-type>
  <var-cell icon="fire" :title="content">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>
  <var-cell icon="fire" :title="content">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>

  <app-type>Show Description</app-type>
  <var-cell icon="fire" :title="content" :desc="description">
    <template #extra>
      <var-icon name="information" />
    </template>
  </var-cell>
  <var-cell :title="content" :desc="description" />

  <app-type>Show Border</app-type>
  <var-cell border> {{ content }} </var-cell>
  <var-cell border> {{ content }} </var-cell>
</template>
<script lang="ts">
import { defineNuxtComponent } from '#app'

import AppType from '~/components/appType.vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const content = 'This is Cell.'
    const description = 'Description'
    return { content, description }
  },
})
</script>
<style></style>
