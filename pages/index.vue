<script setup lang="ts">
import { Snackbar } from '@varlet/ui'

function sayHello() {
  Snackbar('Hello')
}
</script>

<template>
  <var-button type="primary" @click="sayHello">Say Hello</var-button>
</template>

<style>
body {
  transition: background-color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
