<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-radio v-model="basic">Current value: {{ basic }}</var-radio>

    <app-type>Set State Value</app-type>
    <var-radio :unchecked-value="0" :checked-value="1" v-model="state"> Current value: {{ state }} </var-radio>

    <app-type>Modify The Icon And Color</app-type>
    <var-radio unchecked-color="#e99eb4" checked-color="#f44336" v-model="modify">
      <template #unchecked-icon>
        <var-icon name="heart-half-full" size="24px" />
      </template>
      <template #checked-icon>
        <var-icon name="heart" size="24px" />
      </template>
      <template #default> Current value: {{ modify }} </template>
    </var-radio>

    <app-type>Disabled</app-type>
    <var-radio disabled v-model="disable">Current value: {{ disable }}</var-radio>

    <app-type>Readonly</app-type>
    <var-radio readonly v-model="readonly">Current value: {{ readonly }}</var-radio>

    <app-type>RadioGroup</app-type>
    <var-radio-group v-model="group">
      <var-radio :checked-value="0">Eat</var-radio>
      <var-radio :checked-value="1">Sleep</var-radio>
    </var-radio-group>
    <span class="relation">Current value: {{ group }}</span>

    <app-type>Radio Validation</app-type>
    <var-radio v-model="validation" :rules="[(v) => v || 'Please check your choice']">
      Current value: {{ validation }}
    </var-radio>

    <app-type>RadioGroup Validation</app-type>
    <var-radio-group v-model="groupValidation" :rules="[(v) => v === 0 || 'Please check eat']">
      <var-radio :checked-value="0">Eat</var-radio>
      <var-radio :checked-value="1">Sleep</var-radio>
    </var-radio-group>
    <span class="relation">Current value: {{ groupValidation }}</span>
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
      basic: false,
      state: 0,
      modify: false,
      disable: false,
      readonly: false,
      group: 1,
      validation: false,
      groupValidation: 0,
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
