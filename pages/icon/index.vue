<template>
  <app-type>Icon Size</app-type>
  <var-icon name="checkbox-marked-circle" />
  <var-icon name="checkbox-marked-circle" :size="26" />

  <app-type>Icon Color</app-type>
  <var-icon name="checkbox-marked-circle" color="#2979ff" />
  <var-icon name="checkbox-marked-circle" color="#2979ff" :size="26" />

  <app-type>Use Image</app-type>
  <var-icon name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />

  <app-type>Events</app-type>
  <var-icon name="checkbox-marked-circle" color="#2979ff" @click="() => Snackbar.success('Successful click')" />

  <app-type>Icon Animation</app-type>
  <var-icon color="#2979ff" :name="name" :transition="300" :size="30" @click="toggle" />

</template>

<script lang="ts">
import { Snackbar } from '@varlet/ui'
import AppType from '~/components/appType.vue'
export default {
  components: {
    AppType,
  },
  setup() {
    const name = ref('information')

    const toggle = () => {
      name.value = name.value === 'information' ? 'checkbox-marked-circle' : 'information'
    }

    return {
      name,
      toggle,
      Snackbar,
    }
  },
}
</script>

<style lang="less" scoped>
</style>
