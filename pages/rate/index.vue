<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-rate v-model="basic" />

    <app-type>Customize The Total Rating</app-type>
    <var-rate v-model="total" :count="8" />

    <app-type>Customize The Rating Icon Color</app-type>
    <var-rate v-model="color" color="#9c27b0" empty-color="#d199da" />
    <var-rate v-model="color" color="#e91e63" empty-color="#f48fb1" />
    <var-rate v-model="color" color="#4caf50" empty-color="#a5d6a7" />
    <var-rate v-model="color" color="#3f51b5" empty-color="#9fa8da" />

    <app-type>Customize The Rating Icon Style</app-type>
    <var-rate v-model="style" icon="heart" empty-icon="heart-outline" color="red"></var-rate>

    <app-type>Customize The Rating Icon Size</app-type>
    <var-rate v-model="size" :size="14" />
    <var-rate v-model="size" :size="16" />
    <var-rate v-model="size" :size="18" />
    <var-rate v-model="size" :size="20" />

    <app-type>Custom Icon Interval</app-type>
    <var-rate v-model="interval" :gap="2" />
    <var-rate v-model="interval" />
    <var-rate v-model="interval" :gap="6" />
    <var-rate v-model="interval" :gap="8" />

    <app-type>Allows Half Icon</app-type>
    <var-rate v-model="half" :count="8" half />
    <var-rate
      v-model="half"
      :count="8"
      icon="heart"
      half-icon="heart-half-full"
      empty-icon="heart-outline"
      color="red"
      half
    ></var-rate>

    <app-type>Disables Rating</app-type>
    <var-rate v-model="disable" disabled disabled-color="#bbbbbb" />

    <app-type>Read Only Rating</app-type>
    <var-rate v-model="readonly" readonly />

    <app-type>Use Water Ripples</app-type>
    <var-rate v-model="waterRipple" :ripple="false" />

    <app-type>listens For The Change Event</app-type>
    <var-rate v-model="change" @change="handleChange" />

    <app-type>Validate Value</app-type>
    <var-rate :rules="[(v) => v >= 3 || 'It has to be greater than 2']" v-model="validate" />
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue'
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
import { Snackbar } from '@varlet/ui'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const data = reactive({
      basic: 3,
      total: 3,
      color: 3,
      style: 3,
      size: 3,
      interval: 3,
      half: 3.5,
      disable: 3,
      readonly: 3,
      waterRipple: 3,
      change: 3,
      validate: 3,
    })
    const handleChange = (score) => {
      Snackbar({
        content: `click ${score}`,
        position: 'top',
      })
    }
    return { ...toRefs(data), handleChange }
  },
})
</script>
