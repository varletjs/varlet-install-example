<template>
  <div class="app-type">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'

export default defineNuxtComponent({
  name: 'AppType',
})
</script>

<style lang="less">
.app-type {
  width: 100%;
  padding: 15px 0;
  font-size: 14px;
}
</style>
