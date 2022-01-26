<template>
  <div class="example">
    <app-type>Alignment Methods</app-type>

    <var-menu v-model:show="top">
      <var-button type="primary" @click="top = true">Top Alignment</var-button>

      <template #menu>
        <div class="cell-list" :style="{ background: bgColor }">
          <var-cell>Menu Option</var-cell>
          <var-cell>Menu Option</var-cell>
          <var-cell>Menu Option</var-cell>
        </div>
      </template>
    </var-menu>

    <div style="margin-top: 130px">
      <var-menu alignment="bottom" v-model:show="bottom">
        <var-button type="primary" @click="bottom = true">Bottom Alignment</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>Menu Option</var-cell>
            <var-cell>Menu Option</var-cell>
            <var-cell>Menu Option</var-cell>
          </div>
        </template>
      </var-menu>
    </div>

    <app-type>Offset</app-type>

    <var-space justify="space-between">
      <var-menu :offset-x="72" v-model:show="offsetX">
        <var-button type="primary" @click="offsetX = true">Offset Right</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>Menu Option</var-cell>
            <var-cell>Menu Option</var-cell>
            <var-cell>Menu Option</var-cell>
          </div>
        </template>
      </var-menu>

      <var-menu :offset-x="-72" v-model:show="offsetX1">
        <var-button type="primary" @click="offsetX1 = true">Offset Left</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>Menu Option</var-cell>
            <var-cell>Menu Option</var-cell>
            <var-cell>Menu Option</var-cell>
          </div>
        </template>
      </var-menu>
    </var-space>

    <var-space justify="space-between" style="margin-top: 130px">
      <var-menu :offset-y="36" v-model:show="offsetY">
        <var-button type="primary" @click="offsetY = true">Offset Bottom</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>Menu Option</var-cell>
            <var-cell>Menu Option</var-cell>
            <var-cell>Menu Option</var-cell>
          </div>
        </template>
      </var-menu>

      <var-menu :offset-y="-36" v-model:show="offsetY1">
        <var-button type="primary" @click="offsetY1 = true">Offset Top</var-button>

        <template #menu>
          <div class="cell-list" :style="{ background: bgColor }">
            <var-cell>Menu Option</var-cell>
            <var-cell>Menu Option</var-cell>
            <var-cell>Menu Option</var-cell>
          </div>
        </template>
      </var-menu>
    </var-space>

    <app-type>Events</app-type>
    <var-menu
      v-model:show="event"
      @open="() => Snackbar.info('open')"
      @opened="() => Snackbar.success('opened')"
      @close="() => Snackbar.warning('close')"
      @closed="() => Snackbar.error('closed')"
    >
      <var-button type="primary" @click="event = true">Events</var-button>

      <template #menu>
        <div class="cell-list" :style="{ background: bgColor }">
          <var-cell>Menu Option</var-cell>
          <var-cell>Menu Option</var-cell>
          <var-cell>Menu Option</var-cell>
        </div>
      </template>
    </var-menu>

    <div style="margin-bottom: 100px"></div>
  </div>
</template>

<script>
import { Snackbar } from '@varlet/ui'
import AppType from '~/components/AppType'
import { watch, reactive, ref, toRefs } from "vue";
import { defineNuxtComponent, useNuxtApp } from '#app'

export default defineNuxtComponent({
  name: 'MenuExample',
  components: {
    AppType,
  },
  setup() {
    const values = reactive({
      top: false,
      bottom: false,
      offsetX: false,
      offsetX1: false,
      offsetY: false,
      offsetY1: false,
      event: false,
    })
    const { $theme } = useNuxtApp()
    const bgColor = ref('')

    watch(
      $theme.currentTheme,
      (newVal) => {
        bgColor.value = newVal  === 'themes' ? '#fff' : '#272727'
      },
      { immediate: true }
    )

    return {
      ...toRefs(values),
      bgColor,
      Snackbar
    }
  },
})
</script>

<style scoped lang="less">
.cell-list {
  transition: background-color 0.25s;
}
</style>
