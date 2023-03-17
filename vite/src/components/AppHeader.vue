<script setup lang="ts">
// @ts-ignore
import context from '@varlet/ui/es/context/index.mjs'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

function back() {
  router.back()
}
</script>

<template>
  <header class="app-header" :style="{ zIndex: context.zIndex }">
    <var-app-bar :title="route.meta.title" title-position="center">
      <template #left>
        <var-button
          color="transparent"
          text-color="#fff"
          round
          text
          @click="back"
        >
          <var-icon name="chevron-left" :size="30" />
        </var-button>
      </template>
    </var-app-bar>
  </header>
</template>

<style lang="less" scoped>
.app-header {
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
}
</style>
