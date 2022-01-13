<template>
  <div class="example">
    <app-type>Theme Color Button</app-type>
    <var-space>
      <var-button>Default Button</var-button>
      <var-button type="primary">Primary Button</var-button>
      <var-button type="info">Info Button</var-button>
      <var-button type="success">Success Button</var-button>
      <var-button type="warning">Warning Button</var-button>
      <var-button type="danger">Danger Button</var-button>
    </var-space>

    <app-type>Theme Color Button</app-type>
    <var-space>
      <var-button text outline type="primary">Outline Button</var-button>
      <var-button text type="primary">Plain Text Button</var-button>
    </var-space>

    <app-type>Disabled Status</app-type>
    <var-space>
      <var-button disabled>Disabled Status</var-button>
      <var-button disabled text outline>Disabled Status</var-button>
      <var-button disabled text>Disabled Status</var-button>
    </var-space>

    <app-type>Loading Status</app-type>
    <var-space>
      <var-button loading type="primary">Loading Status</var-button>
      <var-button loading type="info" loading-type="rect">Loading Status</var-button>
      <var-button loading type="success" loading-type="disappear">Loading Status</var-button>
      <var-button loading type="danger" loading-type="cube">Loading Status</var-button>
      <var-button loading type="warning" loading-type="wave">Loading Status</var-button>
    </var-space>

    <app-type>Button Size</app-type>
    <var-space align="center">
      <var-button type="primary">Normal Button</var-button>
      <var-button type="success" size="small">Small Button</var-button>
      <var-button type="warning" size="mini">Mini Button</var-button>
      <var-button type="danger" size="large">Large Button</var-button>
    </var-space>

    <app-type>Block Button</app-type>
    <var-button block type="primary">Block Button</var-button>

    <app-type>Custom Color</app-type>
    <var-space>
      <var-button color="#69dbaa" text-color="#eee">Background/Text Color</var-button>
      <var-button color="linear-gradient(to right, #69dbaa, #3a7afe)" text-color="#fff">
        LinearGradient Color
      </var-button>
    </var-space>

    <app-type>Round Button</app-type>
    <var-space>
      <var-button type="primary" round>
        <var-icon name="plus" />
      </var-button>
      <var-button type="info" round>
        <var-icon name="information" />
      </var-button>
      <var-button type="success" round>
        <var-icon name="check" />
      </var-button>
      <var-button type="warning" round>
        <var-icon name="warning" />
      </var-button>
      <var-button type="danger" round>
        <var-icon name="window-close" />
      </var-button>
    </var-space>

    <app-type>Event</app-type>
    <var-space>
      <var-button type="success" @click="handleClick">Click</var-button>
      <var-button type="warning" @touchstart="handleTouchstart">Touchstart</var-button>
    </var-space>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { Snackbar } from '@varlet/ui'
import AppType from '~/components/appType.vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const handleTouchstart = () => {
      Snackbar.info('Touchstart Success')
    }
    const handleClick = () => {
      Snackbar.success('Click Success')
    }
    return { handleClick, handleTouchstart }
  },
})
</script>

<style lang="less" scoped>
.example {
  //padding: 0 14px;
}
</style>
