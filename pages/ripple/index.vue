<template>
  <div class='example'>
    <app-type>Basic Usage</app-type>
    <div class="block var-elevation--2" v-ripple>Click</div>

    <app-type>Custom Color</app-type>
    <div class="block var-elevation--2" v-ripple="{ color: '#2979ff' }">Click</div>

    <app-type>Disabled Status</app-type>
    <div class="block var-elevation--2" v-ripple="{ disabled: true }">Click</div>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
})
</script>

<style scoped lang='less'>
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: var(--site-config-color-sub-text);
  background: var(--site-config-color-sub-bar);
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: background-color 0.25s;
}
</style>
