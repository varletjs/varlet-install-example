<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-counter v-model="basic" />

    <app-type>Set The Value Range</app-type>
    <var-counter :min="0" :max="5" v-model="range" />

    <app-type>Set Step</app-type>
    <var-counter :step="10" v-model="step" />

    <app-type>Decimal Length</app-type>
    <var-counter :decimal-length="1" v-model="decimal" />

    <app-type>Set Size</app-type>
    <var-counter input-text-size="18px" input-width="50px" button-size="36px" v-model="size" />

    <app-type>Disabled</app-type>
    <var-counter disabled v-model="disable" />

    <app-type>Readonly</app-type>
    <var-counter readonly v-model="readonly" />

    <app-type>Asynchronous Change</app-type>
    <var-counter lazy-change v-model="change" @before-change="handleBeforeChange" />

    <app-type>Validate</app-type>
    <var-counter :rules="[(v) => v > 5 || 'Please select a value greater than 5']" v-model="validate" />
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue'
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const data = reactive({
      basic: 0,
      range: 0,
      step: 0,
      decimal: 0,
      size: 0,
      disable: 0,
      readonly: 0,
      change: 0,
      validate: 0,
    })
    const handleBeforeChange = (value, change) => {
      setTimeout(() => change(value), 500)
    }
    return {
      ...toRefs(data),
      handleBeforeChange,
    }
  },
})
</script>
