<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-collapse v-model="basic" @change="changeHandle">
      <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
      <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
    </var-collapse>

    <app-type>Hide The Margin</app-type>
    <var-collapse v-model="hideMargin" :offset="false">
      <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
      <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
    </var-collapse>

    <app-type>Accordion Mode</app-type>
    <var-collapse v-model="accordion" accordion :offset="false">
      <var-collapse-item title="Title" name="1">Hello World</var-collapse-item>
      <var-collapse-item title="Title" name="2">Hello World</var-collapse-item>
    </var-collapse>

    <app-type>Disabled</app-type>
    <var-button @click="disabled = !disabled" style="margin-bottom: 8px">
      {{ disabled ? 'Enable' : 'Disabled' }}
    </var-button>
    <var-collapse v-model="disabledValue">
      <var-collapse-item title="Title" :name="1" :disabled="disabled"> Hello World </var-collapse-item>
      <var-collapse-item title="Title" :name="2" :disabled="disabled"> Hello World </var-collapse-item>
    </var-collapse>

    <app-type>Custom Content</app-type>
    <var-collapse v-model="custom">
      <var-collapse-item title="Title" name="1" icon="account-circle"> Hello World </var-collapse-item>
      <var-collapse-item name="2">
        <template #title>Title</template>
        <template #icon>^_^</template>
        Hello World
      </var-collapse-item>
    </var-collapse>
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
      basic: ['1'],
      hideMargin: ['2'],
      accordion: '',
      disabledValue: [1],
      disabled: false,
      custom: [1],
    })
    const changeHandle = (val) => {
      console.log(val)
    }
    return { ...toRefs(data), changeHandle }
  },
})
</script>
