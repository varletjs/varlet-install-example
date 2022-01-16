<template>
  <div class="example">
    <app-type>Form Example</app-type>
    <var-form ref="form" :disabled="disabled" :readonly="readonly">
      <var-input
        class="mb"
        placeholder="Please input username"
        :rules="[(v) => !!v || 'The username cannot be empty']"
        v-model="formData.username"
      />
      <var-input
        class="mb"
        type="password"
        placeholder="Please input password"
        :rules="[(v) => !!v || 'The password cannot be empty']"
        v-model="formData.password"
      />
      <var-select
        class="mb"
        placeholder="Please select department"
        :rules="[(v) => !!v || 'The select cannot be empty']"
        v-model="formData.department"
      >
        <var-option label="Eat department" />
        <var-option label="Sleep department" />
        <var-option label="Play game department" />
      </var-select>
      <var-select
        class="mb"
        multiple
        placeholder="Please select group"
        :rules="[(v) => v.length >= 1 || 'The select cannot be empty']"
        v-model="formData.group"
      >
        <var-option label="Eat group" />
        <var-option label="Sleep group" />
        <var-option label="Play game group" />
      </var-select>
      <var-radio-group class="mb" :rules="[(v) => !!v || 'The gender cannot be empty']" v-model="formData.gender">
        <var-radio :checked-value="1">Male</var-radio>
        <var-radio :checked-value="2">Female</var-radio>
      </var-radio-group>
      <var-checkbox-group
        class="mb"
        :rules="[(v) => v.length > 0 || 'The select cannot be empty']"
        v-model="formData.like"
      >
        <var-checkbox :checked-value="1">Eat</var-checkbox>
        <var-checkbox :checked-value="2">Sleep</var-checkbox>
        <var-checkbox :checked-value="3">Play game</var-checkbox>
      </var-checkbox-group>
      <var-rate class="mb" :rules="[(v) => v >= 3 || 'It has to be greater than 2']" v-model="formData.score" />
      <div class="row mb">
        <var-switch :rules="[(v) => !!v || 'You must turn on']" v-model="formData.license" />
      </div>
      <div class="row mb">
        <var-counter :rules="[(v) => v > 10 || 'It has to be greater than 10']" v-model="formData.count" />
      </div>
      <var-slider class="mb" :rules="[(v) => v > 10 || 'It has to be greater than 10']" v-model="formData.range" />
      <var-uploader
        class="mb"
        :rules="[(v) => v.length >= 1 || 'Upload at least one picture']"
        v-model="formData.files"
      />
    </var-form>

    <app-type>Form Control</app-type>
    <var-space direction="column">
      <var-button block type="danger" @click="form.reset()">Empty Form</var-button>
      <var-button block type="warning" @click="form.resetValidation()">Empty The Validation</var-button>
      <var-button block type="success" @click="form.validate()">Trigger validation</var-button>
      <var-button block type="info" @click="disabled = !disabled">Form Disabled</var-button>
      <var-button block type="primary" @click="readonly = !readonly">Form Readonly</var-button>
    </var-space>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
import { reactive, ref } from 'vue'

export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const formData = reactive({
      username: '',
      password: '',
      department: '',
      gender: undefined,
      license: false,
      range: 0,
      count: 0,
      group: [],
      score: 0,
      like: [],
      files: [],
    })

    const form = ref(null)
    const disabled = ref(false)
    const readonly = ref(false)
    return { formData, form, disabled, readonly }
  },
})
</script>

<style></style>
