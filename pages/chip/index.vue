<template>
  <div class="example">
    <app-type>Chip Type</app-type>
    <var-space>
      <var-chip>Default Chip</var-chip>
      <var-chip type="primary">Primary Chip</var-chip>
      <var-chip type="success">Success Chip</var-chip>
      <var-chip type="danger">Danger Chip</var-chip>
      <var-chip type="warning">Warning Chip</var-chip>
      <var-chip type="info">Info Chip</var-chip>
    </var-space>

    <app-type>Simple Chip</app-type>
    <var-chip plain type="primary">Simple Chip</var-chip>

  </div>
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
