<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-date-picker v-model="basic" />

    <app-type>Month Picker</app-type>
    <var-date-picker type="month" v-model="month" shadow />

    <app-type>Multiple</app-type>
    <var-date-picker v-model="multiple" multiple />

    <app-type>Range</app-type>
    <var-date-picker type="date" v-model="range" range />

    <app-type>Date Limit</app-type>
    <var-date-picker v-model="dateLimit" min="2020-10-15" max="2022-12-31" :allowed-dates="dateLimitAllowedDates" />

    <app-type>Custom</app-type>
    <var-date-picker
      shadow
      type="month"
      v-model="custom"
      min="2016-07"
      max="2022-12"
      header-color="purple"
      color="#7bb872"
      first-day-of-week="1"
      :allowed-dates="customAllowedDates"
      @change="change"
    >
      <template #year="{ year }">
        <span>{{ year }}</span>
      </template>
      <template #month="{ year, month }">
        <span>{{ year }}-{{ month }}</span>
      </template>
    </var-date-picker>
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
      basic: '2022-01-01',
      month: '2022-01-01',
      multiple: [],
      range: ['2022-01-01', '2022-01-31'],
      dateLimit: '2022-01-01',
      custom: '2022-01-01',
    })
    const dateLimitAllowedDates = (val) => {
      return parseInt(val.split('-')[2], 10) % 2 === 1
    }
    const customAllowedDates = (val) => {
      return parseInt(val.split('-')[1], 10) % 2 === 1
    }
    const change = (date) => {
      console.log(date)
    }
    return {
      ...toRefs(data),
      dateLimitAllowedDates,
      customAllowedDates,
      change,
    }
  },
})
</script>
<style lang="less" scoped>
.relation {
  display: inline-block;
  margin-top: 8px;
}
</style>
