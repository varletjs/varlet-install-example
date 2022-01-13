<template>
  <div class="example">
    <var-cell v-for="list in lists" :key="list">Scroll to bottom {{ list }}</var-cell>
    <var-back-top :duration="300" />
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
export default defineNuxtComponent({
  setup() {
    const lists = [...Array(100).keys()]
    return {
      lists,
    }
  },
})
</script>
