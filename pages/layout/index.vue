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
    <app-type>Responsive Layout</app-type>
    <var-row :gutter="10">
      <var-col class="col" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">1</var-col>
      <var-col class="col" :xs="4" :sm="6" :md="8" :lg="9" :xl="11">2</var-col>
      <var-col class="col" :xs="4" :sm="6" :md="8" :lg="9" :xl="11">3</var-col>
      <var-col class="col" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">4</var-col>
    </var-row>
    <var-row :gutter="10">
      <var-col
        class="col"
        :xs="{ span: 12, offset: 6 }"
        :sm="{ span: 6 }"
        :md="{ span: 4, offset: 4 }"
        :lg="{ span: 3, offset: 3 }"
        :xl="{ span: 2, offset: 2 }"
      >
        1
      </var-col>
      <var-col
        class="col"
        :xs="{ span: 12, offset: 6 }"
        :sm="{ span: 6 }"
        :md="{ span: 4, offset: 4 }"
        :lg="{ span: 3, offset: 3 }"
        :xl="{ span: 2, offset: 2 }"
      >
        2
      </var-col>
      <var-col
        class="col"
        :xs="{ span: 12, offset: 6 }"
        :sm="{ span: 6 }"
        :md="{ span: 4, offset: 4 }"
        :lg="{ span: 3, offset: 3 }"
        :xl="{ span: 2, offset: 2 }"
      >
        3
      </var-col>
      <var-col
        class="col"
        :xs="{ span: 12, offset: 6 }"
        :sm="{ span: 6 }"
        :md="{ span: 4, offset: 4 }"
        :lg="{ span: 3, offset: 3 }"
        :xl="{ span: 2, offset: 2 }"
      >
        4
      </var-col>
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
