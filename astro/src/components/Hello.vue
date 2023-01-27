<script setup lang="ts">
import '@varlet/touch-emulator'

function handleClick() {
  Snackbar('Hello Astro!!!')
}
</script>

<template>
  <var-tooltip content="Say Hello">
    <var-button type="primary" @click="handleClick">Say Hello</var-button>
  </var-tooltip>
</template>