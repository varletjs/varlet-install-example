<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-slider v-model="basic" />

    <app-type>Step Size</app-type>
    <var-slider v-model="step" step="10" />

    <app-type>Dual Thumb</app-type>
    <var-slider v-model="dualThumb" range @change="handleChange" />

    <app-type>Disable</app-type>
    <var-slider v-model="disable" disabled />

    <app-type>Readonly</app-type>
    <var-slider v-model="readonly" readonly />

    <app-type>Slider Size</app-type>
    <var-slider v-model="size" track-height="4" thumb-size="8" range />

    <app-type>Custom style</app-type>
    <var-slider
      v-model="customStyle"
      label-color="purple"
      active-color="#e0732c"
      track-color="#3a68b4"
      thumb-color="#e25241"
      label-text-color="#ededed"
    />

    <app-type>Custom Button</app-type>
    <var-slider v-model="customButton" range active-color="#52af77">
      <template #button="{ currentValue }">
        <div class="slider-example_block">{{ currentValue }}</div>
      </template>
    </var-slider>

    <app-type>Show Label</app-type>
    <var-slider v-model="label1" label-visible="never" />
    <var-slider v-model="label2" />
    <var-slider v-model="label3" label-visible="always" />

    <app-type>Validate Value</app-type>
    <var-slider v-model="validateValue" :rules="[(v) => v > 35 || 'error message']" />
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
      basic: 3,
      step: 3,
      dualThumb: [3, 50],
      disable: 3,
      readonly: 3,
      size: [3, 50],
      customStyle: 3,
      customButton: [3, 50],
      label1: 3,
      label2: 3,
      label3: 3,
      validateValue: 3,
    })
    const handleChange = (value) => {
      console.log(value)
    }
    return { ...toRefs(data), handleChange }
  },
})
</script>
<style lang="less" scoped>
.slider-example_block {
  width: 24px;
  border: 1px solid #52af77;
  color: #52af77;
  height: 24px;
  margin: 0 -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: #ebebeb 0 2px 2px;
  border-radius: 50%;
  font-size: 12px;
  background-color: #fff;
}
</style>
