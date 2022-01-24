<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-sticky :offset-top="54">
      <var-button type="primary">Basic Usage</var-button>
    </var-sticky>

    <app-type>Local Sticky</app-type>
    <div class="scroller">
      <var-sticky>
        <var-button type="success">Local Sticky</var-button>
      </var-sticky>
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import AppType from '~/components/AppType'
import { defineNuxtComponent } from '#app'

export default defineNuxtComponent({
  name: 'StickyExample',
  components: {
    AppType,
  },
})
</script>

<style scoped lang="less">
.example {
  min-height: 200vh;

  .scroller {
    height: 200px;
    overflow: auto;
    background: #4a7afe;
    border-radius: 4px;

    .block {
      width: 100%;
      height: 600px;
      background: #10c48f;
      opacity: 0.5;
    }
  }
}
</style>
