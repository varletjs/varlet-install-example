<template>
  <div class="example">
    <app-type>Function Call</app-type>
    <var-space direction="column" size="large">
      <var-button type="primary" style="margin-bottom: 10px" block @click="picker">Single Column Picker</var-button>
      <var-button type="primary" style="margin-bottom: 10px" block @click="picker2">Multiple Column Picker</var-button>
      <var-button type="primary" style="margin-bottom: 10px" block @click="picker3">Cascade Column Picker</var-button>
    </var-space>

    <app-type>Component Call</app-type>
    <var-space direction="column" size="large">
      <var-picker style="margin-bottom: 14px" :columns="columns" />
      <var-picker style="margin-bottom: 14px" :columns="columns2" />
      <var-picker style="margin-bottom: 14px" cascade :columns="columns3" />
    </var-space>
  </div>
</template>

<script>
import { Picker, Locale } from '@varlet/ui'
import AppType from '~/components/appType.vue'
import area from '../../json/area.json'
import { ref, onMounted } from 'vue'

export default {
  name: 'PickerExample',
  components: {
    AppType,
  },
  setup() {
    const columns = ref([Array.from({ length: 20 }).map((_, index) => index)])
    const columns2 = ref([
      Array.from({ length: 20 }).map((_, index) => index),
      Array.from({ length: 20 }).map((_, index) => index),
      Array.from({ length: 20 }).map((_, index) => index),
    ])
    const columns3 = ref(area)
    Locale.use('en-US')

    const picker = async () => {
      await Picker(columns.value)
    }

    const picker2 = async () => {
      await Picker(columns2.value)
    }

    const picker3 = async () => {
      await Picker({
        cascade: true,
        columns: columns3.value,
      })
    }

    return {
      columns,
      columns2,
      columns3,
      picker,
      picker2,
      picker3,
    }
  },
}
</script>
