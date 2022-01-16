<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-steps :active="active">
      <var-step>{{ first }}</var-step>
      <var-step>{{ second }}</var-step>
      <var-step>{{ third }}</var-step>
      <var-step>{{ fourth }}</var-step>
    </var-steps>

    <app-type>Custom Style</app-type>
    <var-steps :active="active" active-color="#f44336" inactive-color="#e99eb4">
      <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ first }}</var-step>
      <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ second }}</var-step>
      <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ third }}</var-step>
      <var-step active-icon="heart" current-icon="fire" inactive-icon="heart-half-full">{{ fourth }}</var-step>
    </var-steps>

    <app-type>Vertical Mode</app-type>
    <var-steps direction="vertical" :active="active">
      <var-step>{{ first }}</var-step>
      <var-step>{{ second }}</var-step>
      <var-step>{{ third }}</var-step>
      <var-step>{{ fourth }}</var-step>
    </var-steps>

    <var-button type="primary" block @click="next" style="margin-top: 20px">Next</var-button>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
import { ref } from 'vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const active = ref(0)
    const next = () => {
      active.value = (active.value + 1) % 4
    }
    return { first: 'Step1', second: 'Step2', third: 'Step3', fourth: 'Step4', next, active }
  },
})
</script>
