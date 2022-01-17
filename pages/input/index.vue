<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-input placeholder="Please enter text" v-model="basic" />

    <app-type>Plain Mode</app-type>
    <var-input :hint="false" :line="false" placeholder="Please enter text" v-model="plain" />

    <app-type>Textarea</app-type>
    <var-input placeholder="Please enter text" textarea v-model="textarea" />

    <app-type>Maxlength</app-type>
    <var-input placeholder="Please enter text" :maxlength="10" v-model="maxlength" />

    <app-type>Disabled</app-type>
    <var-input placeholder="Please enter text" disabled v-model="disable" />

    <app-type>Readonly</app-type>
    <var-input placeholder="Please enter text" readonly v-model="readonly" />

    <app-type>Clearable</app-type>
    <var-input placeholder="Please enter text" clearable v-model="clearable" />

    <app-type>Display Icon</app-type>
    <var-input placeholder="Please enter text" v-model="icon">
      <template #prepend-icon>
        <var-icon name="plus" />
      </template>
      <template #append-icon>
        <var-icon name="minus" />
      </template>
    </var-input>

    <app-type>Validation</app-type>
    <var-input
      placeholder="Please enter text"
      :rules="[(v) => v.length > 6 || 'Text length must be greater than 6']"
      v-model="validation"
    />
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
      basic: '',
      plain: '',
      textarea: '',
      maxlength: '',
      disable: '',
      readonly: '',
      clearable: '',
      icon: '',
      validation: '',
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
