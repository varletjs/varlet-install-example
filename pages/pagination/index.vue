<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <div class="transformer">
      <var-pagination :current="3" :total="120" />
    </div>
    <app-type>Hide Size Changer</app-type>
    <div class="transformer">
      <var-pagination :current="3" :total="120" :show-size-changer="false" />
    </div>
    <app-type>Show Total</app-type>
    <div class="transformer">
      <var-pagination :current="3" :total="120" :show-total="(total) => ` ${total} items`" />
    </div>
    <app-type>Disabled</app-type>
    <div class="transformer">
      <var-pagination :current="3" :total="120" disabled />
    </div>
  </div>
</template>

<script lang="ts">
import AppType from '~/components/AppType'
import { defineNuxtComponent } from '#app'

export default defineNuxtComponent({
  name: 'PaginationExample',
  components: {
    AppType,
  },
})
</script>

<style lang="less" scoped>
.transformer {
  transform: translateX(-10px);
}
</style>
