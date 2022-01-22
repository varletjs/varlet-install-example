<template>
  <div class="loading-demo">
    <app-type>Type</app-type>
    <var-space>
      <var-loading type="circle" />
      <var-loading type="cube" />
      <var-loading type="wave" />
      <var-loading type="rect" />
      <var-loading type="disappear" />
    </var-space>

    <app-type>Color</app-type>
    <var-space>
      <var-loading type="circle" color="#2979ff" />
      <var-loading type="cube" color="#2979ff" />
      <var-loading type="wave" color="#2979ff" />
      <var-loading type="rect" color="#2979ff" />
      <var-loading type="disappear" color="#2979ff" />
    </var-space>

    <app-type>Size</app-type>
    <var-space>
      <var-loading type="circle" size="small" />
      <var-loading type="cube" size="small" />
      <var-loading type="wave" size="small" />
      <var-loading type="rect" size="small" />
      <var-loading type="disappear" size="small" />
    </var-space>

    <app-type>Wrap</app-type>
    <var-space>
      <var-button @click="loading = !loading">
        {{ loading ? 'Close' : 'Open' }}
      </var-button>
      <var-loading description="loading...." type="circle" :loading="loading">
        <var-card
          title="Intro"
          description="Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community."
        />
      </var-loading>
    </var-space>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { ref } from 'vue'
export default defineNuxtComponent({
  setup() {
    let loading = ref(false)
    return { loading }
  },
})
</script>
