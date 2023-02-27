<script setup lang="ts">
import { ref } from 'vue'

function handleClick() {
  Snackbar('Hello')
}

const value = ref('')
</script>

<template>
  <var-tooltip content="Say Hello">
    <var-button @click="handleClick" v-ripple="{ disabled: 123 }">
      Say Hello
      <var-icon name="xml" />
      <var-icon namespace="var-ext-icon" name="a" />
    </var-button>
  </var-tooltip>

  <var-input type="number" v-model="value" />
</template>

<style>
body {
  transition: background-color 0.25s, color 0.25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
