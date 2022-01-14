<template>
  <div class="example">
    <app-type>Chip Type</app-type>
    <var-space>
      <var-chip>Default Chip</var-chip>
      <var-chip type="primary">Primary Chip</var-chip>
      <var-chip type="success">Success Chip</var-chip>
      <var-chip type="danger">Danger Chip</var-chip>
      <var-chip type="warning">Warning Chip</var-chip>
      <var-chip type="info">Info Chip</var-chip>
    </var-space>

    <app-type>Simple Chip</app-type>
    <var-chip plain type="primary">Simple Chip</var-chip>

    <app-type>Non Round Chip</app-type>
    <var-chip :round="false" type="primary">Non Round Chip</var-chip>

    <app-type>Chip Size</app-type>
    <var-space align="center">
      <var-chip type="danger" size="large">Large Chip</var-chip>
      <var-chip type="primary">Normal Chip</var-chip>
      <var-chip type="success" size="small">Small Chip</var-chip>
      <var-chip type="warning" size="mini">Mini Chip</var-chip>
    </var-space>

    <app-type>Block Chip</app-type>
    <var-chip type="primary" block>Block Chip</var-chip>

    <app-type>Can Close Chip</app-type>
    <var-space>
      <var-chip closable v-if="show" @close="show = false">Can Close Chip</var-chip>
      <var-chip closable icon-name="delete" v-if="show1" @close="show1 = false"> Can Close Chip</var-chip>
    </var-space>

    <app-type>Custom Color</app-type>
    <var-space>
      <var-chip color="#009688" text-color="#fff">Chip</var-chip>
      <var-chip color="#009688" plain>Chip</var-chip>
      <var-chip color="#faecd8" text-color="#e6a23c" plain>Chip</var-chip>
      <var-chip color="#faecd8" text-color="#e6a23c">Chip</var-chip>
    </var-space>

    <app-type>Add Slot</app-type>
    <var-space>
      <var-chip>
        Left Slot
        <template #left>
          <var-icon name="star"></var-icon>
        </template>
      </var-chip>
      <var-chip>
        Right Slot
        <template #right>
          <var-icon name="fire"></var-icon>
        </template>
      </var-chip>
      <var-chip>
        Left And Right Slot
        <template #left>
          <var-icon name="account-circle"></var-icon>
        </template>
        <template #right>
          <var-icon name="cake-variant"></var-icon>
        </template>
      </var-chip>
    </var-space>
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
    const content = 'This is Cell.'
    const description = 'Description'
    const data = reactive({
      show: false,
      show1: false,
    })
    return { content, description, ...toRefs(data) }
  },
})
</script>
<style></style>
