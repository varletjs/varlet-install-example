<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-checkbox v-model="basic">Current value: {{ basic }}</var-checkbox>

    <app-type>Set State Value</app-type>
    <var-checkbox :unchecked-value="0" :checked-value="1" v-model="state"> Current value: {{ state }} </var-checkbox>

    <app-type>Modify The Icon And Color</app-type>
    <var-checkbox unchecked-color="#e99eb4" checked-color="#f44336" v-model="modify">
      <template #unchecked-icon>
        <var-icon name="heart-half-full" size="24px" />
      </template>
      <template #checked-icon>
        <var-icon name="heart" size="24px" />
      </template>
      <template #default> Current value: {{ modify }} </template>
    </var-checkbox>

    <app-type>Disabled</app-type>
    <var-checkbox disabled v-model="disable">Current value: {{ disable }}</var-checkbox>

    <app-type>Readonly</app-type>
    <var-checkbox readonly v-model="readonly">Current value: {{ readonly }}</var-checkbox>

    <app-type>CheckboxGroup/Actions</app-type>
    <var-space align="center">
      <var-checkbox-group ref="group" v-model="groupAction">
        <var-checkbox :checked-value="0">Eat</var-checkbox>
        <var-checkbox :checked-value="1">Sleep</var-checkbox>
      </var-checkbox-group>

      <var-button class="button" type="primary" @click="$refs.group.checkAll()">Check All</var-button>
      <var-button class="button" type="primary" @click="$refs.group.inverseAll()">Inverse All</var-button>
    </var-space>
    <var-space align="center">Current value: {{ groupAction }}</var-space>

    <app-type>Checkbox Validation</app-type>
    <var-checkbox v-model="validation" :rules="[(v) => v || 'Please check your choices']">
      Current value: {{ validation }}
    </var-checkbox>

    <app-type>CheckboxGroup Validation</app-type>
    <var-checkbox-group v-model="groupValidation" :rules="[(v) => v.length === 2 || 'Please check all']">
      <var-checkbox :checked-value="0">Eat</var-checkbox>
      <var-checkbox :checked-value="1">Sleep</var-checkbox>
    </var-checkbox-group>
    <var-space align="center">Current value: {{ groupValidation }}</var-space>
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
      basic: false,
      state: 0,
      modify: false,
      disable: false,
      readonly: false,
      groupAction: [],
      validation: false,
      groupValidation: [],
    })
    return { ...toRefs(data) }
  },
})
</script>
