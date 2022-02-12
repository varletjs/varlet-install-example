<template>
  <div class="example">
    <app-type>Function Call</app-type>
    <var-space direction="column">
      <var-button type="primary" block @click="createBasic">Basic Usage</var-button>
      <var-button type="primary" block @click="modifyTitle">Modify Title</var-button>
      <var-button type="primary" block @click="hideButton">Hide Button</var-button>
      <var-button type="primary" block @click="createAction">Handle User Behavior</var-button>
      <var-button type="primary" block @click="asyncClose">Asynchronous Closing</var-button>
      <var-button type="primary" block @click="customClass">Custom Class</var-button>
    </var-space>

    <app-type>Component Call</app-type>
    <var-space direction="column">
      <var-button type="warning" block @click="show = true">Basic Usage</var-button>
      <var-button type="warning" block @click="show1 = true">Asynchronous Closing</var-button>
      <var-button type="warning" block @click="show2 = true">Custom Slots</var-button>
      <var-dialog v-model:show="show1" :title="title" :message="message" @before-close="onBeforeClose" />
    </var-space>

    <var-dialog
      v-model:show="show"
      :title="title"
      :message="message"
      @confirm="actions.confirm"
      @cancel="actions.cancel"
      @closed="actions.close"
    />

    <var-dialog v-model:show="show2">
      <template #title>
        <var-icon name="information" color="#2979ff" />
      </template>

      <var-cell>{{ message }}</var-cell>
      <var-cell>{{ message }}</var-cell>
      <var-cell>{{ message }}</var-cell>
    </var-dialog>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { Dialog, Snackbar } from '@varlet/ui'
import { toRefs, reactive } from 'vue'
import AppType from '~/components/appType.vue'

export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const values = reactive({
      show: false,
      show1: false,
      show2: false,
      value: '',
      title: 'Beat It',
      message: "Don't Wanna See No Blood, Don't Be A Macho Man",
    })

    const actions = {
      confirm: () => Snackbar.success('Confirm'),
      cancel: () => Snackbar.error('Cancel'),
      close: () => Snackbar.info('Close'),
    }

    const createBasic = () =>
      Dialog({
        message: values.message,
      })

    const createAction = async () => actions[await Dialog(values.message)]()

    const modifyTitle = () => {
      Dialog({
        title: values.title,
        message: values.message,
      })
    }

    const hideButton = () => {
      Dialog({
        message: values.message,
        confirmButton: false,
        cancelButton: false,
      })
    }

    const onBeforeClose = (action, done) => {
      Snackbar.loading('Asynchronous shutdown in progress')

      setTimeout(() => {
        actions[action]()
        done()
      }, 1000)
    }

    const asyncClose = () => {
      Dialog({
        message: values.message,
        onBeforeClose,
      })
    }

    const customClass = () => {
      Dialog({
        message: values.message,
        dialogClass: 'dialogClass',
        dialogStyle: {
          color: '#ff9f00',
        },
      })
    }

    return {
      ...toRefs(values),
      asyncClose,
      createBasic,
      createAction,
      modifyTitle,
      hideButton,
      onBeforeClose,
      customClass,
      actions,
    }
  },
})
</script>

<style lang="less">
.dialogClass {
  background: #deb1ff;
}
</style>
