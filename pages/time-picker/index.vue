<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-time-picker v-model="basic" />

    <app-type>24hr Format</app-type>
    <var-time-picker v-model="twentyFour" format="24hr" shadow />

    <app-type>Show Seconds</app-type>
    <var-time-picker v-model="seconds" format="24hr" use-seconds />

    <app-type>Readonly</app-type>
    <var-time-picker v-model="readonly" readonly shadow />

    <app-type>Time Limit</app-type>
    <var-time-picker
      v-model="timeLimit"
      format="24hr"
      use-seconds
      min="2:28:38"
      max="19:40:22"
      :allowed-time="allowedTime"
    />

    <app-type>Custom</app-type>
    <var-time-picker
      v-model="custom"
      header-color="purple"
      color="#7bb872"
      min="2:28:38"
      max="19:40:22"
      shadow
      @change="change"
    />
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
      basic: '11:20',
      twentyFour: '15:10',
      seconds: '17:36:22',
      readonly: '07:10',
      timeLimit: '07:10:12',
      custom: '05:10',
    })
    const allowedTime = {
      hours(hour) {
        return hour % 2 === 0
      },
      minutes(minute) {
        return minute % 15 !== 0
      },
      seconds(second) {
        return second % 2 !== 0
      },
    }

    const change = (time) => {
      console.log(time)
    }

    return {
      ...toRefs(data),
      allowedTime,
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
