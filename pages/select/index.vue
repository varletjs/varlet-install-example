<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-select placeholder="Please select one the options" v-model="basic">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>

    <app-type>Plain Mode</app-type>
    <var-select :hint="false" :line="false" placeholder="Please select one the options" v-model="plain">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>

    <app-type>Label Relation Value</app-type>
    <var-select placeholder="Please select one the options" v-model="labelRelation">
      <var-option label="Eat" :value="1" />
      <var-option label="Sleep" :value="2" />
    </var-select>
    <span class="relation">The current selection is: {{ labelRelation }}</span>

    <app-type>Disabled</app-type>
    <var-select placeholder="Please select one the options" disabled v-model="disable">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>

    <app-type>Readonly</app-type>
    <var-select placeholder="Please select one the options" readonly v-model="readonly">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>

    <app-type>Clearable</app-type>
    <var-select placeholder="Please select one the options" clearable v-model="clearable">
      <var-option label="Eat" />
      <var-option label="Sleep" />
    </var-select>

    <app-type>Display Icon</app-type>
    <var-select placeholder="Please select one the options" v-model="icon">
      <template #prepend-icon>
        <var-icon name="plus" />
      </template>
      <template #append-icon>
        <var-icon name="minus" />
      </template>
      <template #default>
        <var-option label="Eat" />
        <var-option label="Sleep" />
      </template>
    </var-select>

    <app-type>Multiple Selection</app-type>
    <var-select placeholder="Please select multiple options" multiple v-model="multiple">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>

    <app-type>Multiple Choice Of Paper Style</app-type>
    <var-select placeholder="Please select multiple options" chip multiple v-model="paperStyle">
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>

    <app-type>Validation</app-type>
    <var-select
      placeholder="Please select one the options"
      :rules="[(v) => v === 'Rest' || 'You must choose to rest']"
      v-model="validation"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Rest" />
    </var-select>

    <app-type>Multiple Validation</app-type>
    <var-select
      placeholder="Please select multiple options"
      multiple
      :rules="[(v) => v.length >= 2 || 'You select at least two options']"
      v-model="multipleValidation"
    >
      <var-option label="Eat" />
      <var-option label="Sleep" />
      <var-option label="Play game" />
      <var-option label="Coding" />
    </var-select>
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
      basic: '',
      plain: '',
      labelRelation: '',
      disable: '',
      readonly: '',
      clearable: '',
      icon: '',
      multiple: [],
      paperStyle: [],
      validation: '',
      multipleValidation: [],
    })
    return { ...toRefs(data) }
  },
})
</script>
<style lang="less" scoped>
.relation {
  display: inline-block;
  margin-top: 8px;
}
</style>
