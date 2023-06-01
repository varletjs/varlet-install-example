<script setup lang="ts">
import { ref } from 'vue'

const isMobile = ref(
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
)
</script>

<template>
  <router-view v-if="isMobile" />

  <div class="result-container" v-else>
    <var-result class="result" type="warning" title="Warning" description="Please use mobile visit..." />
  </div>
</template>

<style lang="less">
* {
  box-sizing: border-box;
}

body {
  transition: background-color 0.25s, color 0.25s;
  color: var(--color-text);
  background-color: var(--color-body);
  overflow: hidden;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
</style>

<style lang="less" scoped>
.result-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; 
}

.result {
  width: 40%;
  min-width: 375px;
}
</style>
