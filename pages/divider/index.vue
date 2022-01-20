<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-divider />

    <app-type>Dashed Divider</app-type>
    <var-divider dashed />

    <app-type>Inset Divider</app-type>
    <var-divider inset />
    <var-divider :inset="36" margin="36px 0" />
    <var-divider inset="-36px" />

    <app-type>Vertical Divider</app-type>
    <var-space justify="center" :size="[8, 8]">
      <span>Text</span>
      <var-divider vertical />
      <span>Text</span>
      <var-divider vertical />
      <span>Text</span>
    </var-space>

    <app-type>The Divider with description</app-type>
    <var-divider description="Description" />

    <app-type>Custom</app-type>
    <var-divider>
      <var-icon name="heart-outline" style="margin: 0 16px; color: rgb(41, 121, 255)" />
    </var-divider>
  </div>
</template>
<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {},
})
</script>
<style lang="less" scoped>
.var-space {
  color: #333;

  span {
    font-size: 14px;
    color: #888;
  }
}
</style>
