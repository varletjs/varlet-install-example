<script setup lang="ts">
import { Snackbar } from '@varlet/ui'

function handleClick() {
  Snackbar('Hello')
}
</script>

<template>
  <var-tooltip content="Say Hello">
    <var-button type="primary" @click="handleClick">Say Hello</var-button>
  </var-tooltip>
</template>

<style>
body {
  transition: background-color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
