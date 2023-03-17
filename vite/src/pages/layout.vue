<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <div class="layout">
    <app-header />
    
    <router-view />

    <var-bottom-navigation safe-area fixed v-model:active="active">
      <var-bottom-navigation-item label="Label" icon="home" />
      <var-bottom-navigation-item label="Label" icon="magnify" />
      <var-bottom-navigation-item label="Label" icon="heart" />
      <var-bottom-navigation-item label="Label" icon="account-circle" />

      <template #fab>
        <var-icon name="heart" />
      </template>
    </var-bottom-navigation>
  </div>
</template>

<style lang="less" scoped>
.layout {
  padding: 70px 16px ;
}
</style>