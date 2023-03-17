<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClick() {
  router.push('/layout/home/list')
}
</script>

<template>
  <div class="home">
    <var-tooltip content="To List">
      <var-button type="primary" @click="handleClick"> To List </var-button>
    </var-tooltip>
  </div>

  <router-stack-view />
</template>
