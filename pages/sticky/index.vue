<template>
  <div class="example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-sticky :offset-top="54">
      <var-button type="primary">{{ pack.basicUsage }}</var-button>
    </var-sticky>

    <app-type>{{ pack.localSticky }}</app-type>
    <div class="scroller">
      <var-sticky>
        <var-button type="success">{{ pack.localSticky }}</var-button>
      </var-sticky>
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
import AppType from '~/components/AppType'
import { defineNuxtComponent } from '#app'

const pack = {
  basicUsage: 'Basic Usage',
  localSticky: 'Local Sticky',
}
export default defineNuxtComponent({
  name: 'StickyExample',
  components: {
    AppType,
  },
  setup() {
    return { pack }
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
