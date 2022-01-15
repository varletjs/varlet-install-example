<template>
  <div class="example">
    <app-type>Component Call</app-type>
    <var-space direction='column'>
      <var-button type="primary" block @click="changeValue('show1')">Basic Usage</var-button>
      <var-button type="primary" block @click="changeValue('show3')">Multi Line</var-button>
      <var-button type="primary" block @click="changeValue('show2')">Bottom Display</var-button>
      <var-button type="primary" block @click="changeValue('show4')">Hidden Time</var-button>
      <var-button type="primary" block @click="changeValue('show9')">Forbid Click</var-button>
    </var-space>

    <app-type>Function Call</app-type>
    <var-space direction='column'>
      <var-button type="warning" block @click="createSnackbar()">Basic Usage</var-button>
      <var-button type="warning" block @click="createSnackbar('time')">Display Duration</var-button>
      <var-button type="warning" block @click="createSnackbar('position')">Bottom Display</var-button>
    </var-space>


    <app-type>Snackbar Type</app-type>
    <var-space  direction='column'>
      <var-button type="success" block @click="create('success')">Success</var-button>
      <var-button type="warning" block @click="create('warning')">Warning</var-button>
      <var-button type="info" block @click="create('info')">Info</var-button>
      <var-button type="danger" block @click="create('error')">Error</var-button>
      <var-button type="primary" block @click="create('loading')">Loading</var-button>
    </var-space>





    <var-snackbar v-model:show="show1">
      Hello,I'm a snackBar!
    </var-snackbar>

    <var-snackbar v-model:show="show2" position="bottom">
      Hello,I'm a snackBar!
      <template #action>
        <var-button type="primary" @click="show2 = false">Close</var-button>
      </template>
    </var-snackbar>

    <var-snackbar v-model:show="show3" :vertical="true">
      Hello,I'm a snackBar!
      <template #action>
        <var-button type="primary" @click="show3 = false">Close</var-button>
      </template>
    </var-snackbar>

    <var-snackbar v-model:show="show4" :duration="1000">
      Hello,I'm a snackBar!
    </var-snackbar>

    <var-snackbar v-model:show="show9" :forbid-click="true">
      Hello,I'm a snackBar!
    </var-snackbar>

  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
import { reactive, toRefs } from 'vue'
import { Snackbar } from '@varlet/ui'

export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const shows = reactive({
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show9: false,
    })

    const changeValue = (type) => {
      shows[type] = !shows[type]
    }

    const create = (type)=>{
      const text = type === 'loading' ? 'Waiting...' : "Hello,I'm a snackBar!"
        Snackbar[type](text)

      if(type==='loading'){
        setTimeout(() => {
          Snackbar.success('Loaded')
        }, 2000)
      }
    }

    const createSnackbar = (type)=>{
      if (type === 'time') {
        Snackbar({
          content: "Hello,I'm a snackBar!",
          duration: 1000,
        })
      }

      if (type === 'position') {
        Snackbar({
          content: "Hello,I'm a snackBar!",
          position: 'bottom',
        })
      }

      if (!type) {
        Snackbar("Hello,I'm a snackBar!",)
      }
    }

    return { changeValue,...toRefs(shows),createSnackbar,create }
  },
})
</script>

<style></style>
