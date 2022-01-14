<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-countdown time="108000000" />

    <app-type>Custom Format</app-type>
    <var-countdown time="108000000" format="DD Day, HH:mm:ss" />

    <app-type>Show Millisecond</app-type>
    <var-countdown time="108000000" format="HH : mm : ss : SS" />

    <app-type>Custom Style</app-type>
    <var-countdown time="108000000">
      <template #default="timeData">
        <span class="block">{{ timeData.hours }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.minutes }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.seconds }}</span>
      </template>
    </var-countdown>
    <app-type>Manual Control</app-type>
    <var-countdown :time="time" ref="countdown" :auto-start="false" format="ss : SSS" @end="end" @change="change" />
    <var-space class="btn-container" justify="space-between" style="margin: 10px 0">
      <var-button type="primary" @click="$refs.countdown.start()">Start</var-button>
      <var-button @click="$refs.countdown.pause()">Pause</var-button>
      <var-button @click="$refs.countdown.reset()">Reset</var-button>
    </var-space>
  </div>
</template>

<script>
import AppType from '~/components/appType.vue'
import { Snackbar } from '@varlet/ui'
import { ref } from 'vue'

export default {
  name: 'CountdownExample',
  components: {
    AppType,
  },
  setup() {
    const countdown = ref(null)
    const time = ref(3000)

    const end = () => {
      Snackbar.info('end!')
    }

    const change = () => {
      console.log('change')
    }

    return {
      time,
      end,
      countdown,
      change,
    }
  },
}
</script>

<style scoped>

.block {
  background: #ff9f00;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.colon {
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
}
</style>
