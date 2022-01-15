<template>
  <div class="example">
    <app-type>Grid System</app-type>
    <var-row>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
    </var-row>

    <app-type>Offset</app-type>
    <var-row>
      <var-col class="col" :span="16" :offset="8">offset: 8 span: 16</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
    </var-row>

    <app-type>Alignment</app-type>
    <var-row>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
    </var-row>
    <var-row justify="center">
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
    </var-row>
    <var-row justify="flex-end">
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
    </var-row>
    <var-row justify="space-around">
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
    </var-row>
    <var-row justify="space-between">
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
    </var-row>

    <app-type>Gutter</app-type>
    <var-row :gutter="10">
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
      <var-col class="col" :span="8">span: 8</var-col>
    </var-row>
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
.var-col {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 36px;
  background: #3a7afe;
  background-clip: content-box;
  margin-bottom: 10px;
  color: #fff;
}
</style>
