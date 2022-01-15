<template>
  <div class="example">
    <app-type>Basic Use</app-type>
    <var-space>
      <var-button>Button1</var-button>
      <var-button>Button2</var-button>
      <var-button>Button3</var-button>
    </var-space>

    <app-type>Align Center</app-type>
    <var-space align="center" :size="[20, 20]">
      <var-button size="mini">Button1</var-button>
      <var-button size="small">Button2</var-button>
      <var-button size="normal">Button3</var-button>
      <var-button size="large">Button3</var-button>
    </var-space>

    <app-type>Align Start</app-type>
    <var-space align="start" :size="[20, 20]">
      <var-button size="mini">Button1</var-button>
      <var-button size="small">Button2</var-button>
      <var-button size="normal">Button3</var-button>
      <var-button size="large">Button3</var-button>
    </var-space>

    <app-type>Align End</app-type>
    <var-space align="end" :size="[20, 20]">
      <var-button size="mini">Button1</var-button>
      <var-button size="small">Button2</var-button>
      <var-button size="normal">Button3</var-button>
      <var-button size="large">Button3</var-button>
    </var-space>

    <app-type>Align Baseline</app-type>
    <var-space align="baseline" :size="[20, 20]">
      <var-button size="mini">Button1</var-button>
      <var-button size="small">Button2</var-button>
      <var-button size="normal">Button3</var-button>
      <var-button size="large">Button3</var-button>
    </var-space>

    <app-type>Vertical</app-type>
    <var-space direction="column" size="large">
      <var-button>Button1</var-button>
      <var-button>Button2</var-button>
      <var-button>Button3</var-button>
    </var-space>

    <app-type>Space Size</app-type>
    <var-space :size="[20, 20]">
      <var-button>Button1</var-button>
      <var-button>Button2</var-button>
      <var-button>Button3</var-button>
      <var-button>Button4</var-button>
      <var-button>Button5</var-button>
      <var-button>Button6</var-button>
    </var-space>

    <app-type>Justify Right</app-type>
    <var-space justify="end">
      <var-button>Button1</var-button>
      <var-button>Button2</var-button>
    </var-space>

    <app-type>Space Around</app-type>
    <var-space justify="space-around">
      <var-button>Button1</var-button>
      <var-button>Button2</var-button>
    </var-space>

    <app-type>Justify Center</app-type>
    <var-space justify="center">
      <var-button>Button1</var-button>
      <var-button>Button2</var-button>
    </var-space>

    <app-type>Space Between</app-type>
    <var-space justify="space-between">
      <var-button>Button1</var-button>
      <var-button>Button2</var-button>
    </var-space>

    <app-type>No Wrap</app-type>
    <var-space :wrap="false">
      <var-button>Button1</var-button>
      <var-button>Button2</var-button>
      <var-button>Button3</var-button>
      <var-button>Button4</var-button>
      <var-button>Button5</var-button>
      <var-button>Button6</var-button>
    </var-space>
  </div>
</template>
<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
  },
})
</script>
<style lang="less" scoped>
</style>
