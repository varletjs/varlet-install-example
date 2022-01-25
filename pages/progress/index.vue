<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-space direction="column" :size="[12, 0]">
      <var-progress :value="20" :track="false" />
      <var-progress :value="value" :track="false" />
      <var-progress :value="100" :track="false" />
    </var-space>

    <app-type>Show Label</app-type>
    <var-progress :value="30" label />
    <var-progress :value="value" label />
    <var-progress :value="100" label>success</var-progress>

    <app-type>Custom Style</app-type>
    <var-space direction="column" :size="[12, 0]">
      <var-progress :value="30" line-width="8" color="#ff9f00" />
      <var-progress :value="60" line-width="8" color="#ff9f00" track-color="#f5cb90" />
      <var-progress :value="80" ripple line-width="8" color="#ff9f00" track-color="#f5cb90" />
    </var-space>

    <app-type>Circle Progress</app-type>
    <var-space :size="[20, 20]">
      <var-progress mode="circle" :value="30" line-width="5" :size="56" />
      <var-progress mode="circle" label :value="value" line-width="5" :size="56" />
      <var-progress mode="circle" label :value="100" line-width="5" :size="56" />
    </var-space>

    <app-type>Hide Track</app-type>
    <var-progress mode="circle" :value="50" :size="56" :track="false" />
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { defineNuxtComponent } from '#app'
export default defineNuxtComponent({
  name: 'ProgressExample',
  setup() {
    const value = ref(0)
    const interval = ref<NodeJS.Timer | Number>(0)

    onMounted(() => {
      interval.value = setInterval(() => {
        if (value.value >= 100) value.value = 0
        else value.value += 20
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(Number(interval.value))
    })

    return {
      value,
    }
  },
})
</script>
