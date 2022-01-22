<template>
  <div class="example">
    <app-type>Function Call</app-type>
    <var-button type="primary" block @click="createBasic">Basic Usage</var-button>
    <var-button type="primary" block @click="modifyTitle">Modify Title</var-button>
    <var-button type="primary" block @click="disableAction">Action Disabled</var-button>
    <var-button
      type="primary"
      block
      @click="disableCloseOnClickAction"
    >Disable close on click action</var-button>
    <var-button type="primary" block @click="customActionStyles">Custom Action Styles</var-button>

    <app-type>Component Call</app-type>
    <var-button type="warning" block @click="show = true">Basic Usage</var-button>
    <var-action-sheet
      title="Select One"
      :actions="actions"
      v-model:show="show"
      @select="handleSelect"
    />

    <var-button type="warning" block @click="show1 = true">Modify Title</var-button>
    <var-action-sheet
      title="Choose whichever you like"
      :actions="actions"
      v-model:show="show1"
      @select="handleSelect"
    />

    <var-button type="warning" block @click="show2 = true">Action Disabled</var-button>
    <var-action-sheet
      title="Select One"
      :actions="disabledActions"
      v-model:show="show2"
      @select="handleSelect"
    />

    <var-button type="warning" block @click="show3 = true">Disable close on click action</var-button>
    <var-action-sheet
      title="Select One"
      :close-on-click-action="false"
      :actions="actions"
      v-model:show="show3"
      @select="handleSelect"
    />

    <var-button type="warning" block @click="show4 = true">Custom Action Styles</var-button>
    <var-action-sheet
      title="Select One"
      :actions="customStyleActions"
      v-model:show="show4"
      @select="handleSelect"
    />
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
import { ActionSheet, Snackbar } from '@varlet/ui'

export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const rawActions = [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
      },
    ]
    const rawDisabledActions = [
      {
        name: 'Item 01',
        icon: 'account-circle',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
        disabled: true,
      },
    ]
    const rawCustomStyleActions = [
      {
        name: 'Item 01',
        icon: 'account-circle',
        color: '#00c48f',
      },
      {
        name: 'Item 02',
        icon: 'notebook',
        color: '#ff9800',
      },
      {
        name: 'Item 03',
        icon: 'wifi',
        color: '#00afef',
      },
    ]
    const actions = reactive(rawActions)
    const disabledActions = reactive(rawDisabledActions)
    const customStyleActions = reactive(rawCustomStyleActions)
    const show = ref(false)
    const show1 = ref(false)
    const show2 = ref(false)
    const show3 = ref(false)
    const show4 = ref(false)

    const createBasic = async () => {
      const action = await ActionSheet({ actions: rawActions, title: 'Select One' })

      action !== 'close' && Snackbar(`Your selected is:${action.name}`)
    }

    const modifyTitle = async () => {
      const action = await ActionSheet({
        actions: rawActions,
        title: 'Choose whichever you like',
      })

      action !== 'close' && Snackbar(`Your selected is:${action.name}`)
    }

    const disableAction = async () => {
      const action = await ActionSheet({
        actions: rawDisabledActions,
        title: 'Select One'
      })

      action !== 'close' && Snackbar(`Your selected is:${action.name}`)
    }

    const customActionStyles = async () => {
      const action = await ActionSheet({
        actions: rawCustomStyleActions,
        title: 'Select One'
      })

      action !== 'close' && Snackbar(`Your selected is:${action.name}`)
    }

    const disableCloseOnClickAction = () => {
      ActionSheet({
        actions: [
          {
            name: 'Item 01',
            icon: 'account-circle',
          },
          {
            name: 'Item 02',
            icon: 'notebook',
          },
          {
            name: 'Item 03',
            icon: 'wifi',
          },
        ],
        title: 'Select One',
        closeOnClickAction: false,
        onSelect: (action) => Snackbar(`Your selected is:${action.name}`),
      })
    }

    const handleSelect = (action) => {
      Snackbar(`Your selected is:${action.name}`)
    }




    return {
      show,
      show1,
      show2,
      show3,
      show4,
      actions,
      disabledActions,
      customStyleActions,
      createBasic,
      modifyTitle,
      disableAction,
      customActionStyles,
      handleSelect,
      disableCloseOnClickAction,
    }
  },
})
</script>

<style scoped lang="less">
.var-button {
  margin-top: 10px;
}
</style>