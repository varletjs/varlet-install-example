<template>
  <div class="example">
    <app-type> Basic Usage </app-type>
    <var-space>
      <var-switch v-model="basic" />
    </var-space>

    <app-type> Not Available </app-type>
    <var-space align="center">
      <var-switch v-model="available" disabled />
      <var-switch v-model="available" readonly />
    </var-space>

    <app-type> Custom Color</app-type>
    <var-space align="center">
      <var-switch v-model="color" :ripple="false" />
      <var-switch v-model="color" color="#ff9f00" close-color="#f5cb90" />
    </var-space>

    <app-type> Size </app-type>
    <var-space align="center">
      <var-switch v-model="size" size="15" />
      <var-switch v-model="size" />
      <var-switch v-model="size" size="25" />
    </var-space>

    <app-type> Loading </app-type>
    <var-space align="center">
      <var-switch :model-value="true" loading />
      <var-switch :model-value="true" size="25" loading loading-color="#ff9f00" />
    </var-space>

    <app-type> Validate Value </app-type>
    <var-space>
      <var-switch v-model="value" :rules="[(v) => v === true || 'Error!']" />
    </var-space>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
import { reactive, toRefs } from 'vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const data = reactive({
      basic: true,
      available: false,
      color: true,
      size: false,
      value: true,
    })
    return { ...toRefs(data) }
  },
})
</script>
<style lang="less" scoped></style>
