<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const active = ref(0)

function handleClick() {
  router.push('/home/list')
}
</script>

<template>
  <router-stack>
    <div class="home">
      <var-tooltip content="To List">
        <var-button type="primary" @click="handleClick"> To List </var-button>
      </var-tooltip>

      <var-bottom-navigation fixed v-model:active="active">
        <var-bottom-navigation-item label="标签" icon="home" />
        <var-bottom-navigation-item label="标签" icon="magnify" />
        <var-bottom-navigation-item label="标签" icon="heart" />
        <var-bottom-navigation-item label="标签" icon="account-circle" />

        <template #fab>
          <var-icon name="heart" />
        </template>
      </var-bottom-navigation>
    </div>
  </router-stack>
</template>

<style lang="less" scoped>
.home {
  padding: 16px;
}
</style>
