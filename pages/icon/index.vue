<template>
  <div class="example">
    <app-type>Icon Size</app-type>
    <var-space>
      <var-icon name="checkbox-marked-circle" />
      <var-icon name="checkbox-marked-circle" :size="26" />
    </var-space>

    <app-type>Icon Color</app-type>
    <var-space>
      <var-icon name="checkbox-marked-circle" color="#2979ff" />
      <var-icon name="checkbox-marked-circle" color="#2979ff" :size="26" />
    </var-space>

    <app-type>Use Image</app-type>
    <var-icon name="https://varlet.gitee.io/varlet-ui/cat.jpg" :size="32" />

    <app-type>Events</app-type>
    <var-icon name="checkbox-marked-circle" color="#2979ff" @click="() => Snackbar.success('Successful click')" />

    <app-type>Icon Animation</app-type>
    <var-icon
      class="example__animation-icon"
      color="#2979ff"
      :name="name"
      :transition="300"
      :size="30"
      @click="toggle"
    />

    <app-type>Icon List (click copy)</app-type>
    <div class="example__icons">
      <div
        class="example__icon var-elevation--2"
        :data-clipboard-text="name"
        :key="name"
        v-for="name in iconNames"
        v-ripple
      >
        <var-icon :name="name" />
        <div class="example__icon-name">{{ name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Snackbar } from '@varlet/ui'
import icons from '@varlet/icons'
import Clipboard from 'clipboard'
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
import { onBeforeMount } from '@vue/runtime-core'
import { reactive, ref } from 'vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const name = ref('information')
    const iconNames = reactive(icons)

    const toggle = () => {
      name.value = name.value === 'information' ? 'checkbox-marked-circle' : 'information'
    }

    onBeforeMount(() => {
      const clipboard = new Clipboard('.example__icon', {
        text: (trigger) => `<var-icon name="${trigger.getAttribute('data-clipboard-text')}" />`,
      })

      clipboard.on('success', (e) => {
        console.log(e)
        Snackbar.success(`${e.text} Successful click!`)
      })
    })
    return {
      name,
      toggle,
      Snackbar,
      iconNames,
    }
  },
})
</script>

<style lang="less" scoped>
.example {
  &__icons {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  &__icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 29%;
    padding: 6% 5%;
    margin: 0 2% 4%;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    user-select: none;
    border-bottom: 2px solid var(--color-primary);
    transition: background-color 0.25s;
  }

  &__icon-name {
    width: 100%;
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 8px;
  }
}
</style>
