<template>
  <div class="example">
    <app-type>Popup Position</app-type>
    <var-button class="mt-10" type="primary" block @click="center = true">Center Popup</var-button>
    <var-button class="mt-10" type="primary" block @click="bottom = true">Below Popup</var-button>
    <var-button class="mt-10" type="primary" block @click="top = true">Above Popup</var-button>
    <var-button class="mt-10" type="primary" block @click="left = true">Left Popup</var-button>
    <var-button class="mt-10" type="primary" block @click="right = true">Right Popup</var-button>
    <var-popup v-model:show="center">
      <div class="block">
        As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains
        on the carpet.
      </div>
    </var-popup>
    <var-popup position="bottom" v-model:show="bottom">
      <div class="block">
        As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains
        on the carpet.
      </div>
    </var-popup>
    <var-popup position="top" v-model:show="top">
      <div class="block">
        As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains
        on the carpet.
      </div>
    </var-popup>
    <var-popup position="left" v-model:show="left">
      <div class="block">
        As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains
        on the carpet.
      </div>
    </var-popup>
    <var-popup position="right" v-model:show="right">
      <div class="block">
        As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains
        on the carpet.
      </div>
    </var-popup>

    <app-type>Overlay Style</app-type>
    <var-button class="mt-10" type="primary" block @click="overlayClass = true">Overlay Class</var-button>
    <var-popup overlay-class="custom-overlay" v-model:show="overlayClass">
      <div class="block">
        As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains
        on the carpet.
      </div>
    </var-popup>
    <var-button class="mt-10" type="primary" block @click="overlayStyle = true">Overlay Style</var-button>
    <var-popup
      :overlay-style="{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      }"
      v-model:show="overlayStyle"
    >
      <div class="block">
        As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains
        on the carpet.
      </div>
    </var-popup>

    <app-type>Event</app-type>
    <var-button class="mt-10" type="primary" block @click="event = true">Event</var-button>
    <var-popup
      v-model:show="event"
      @open="() => Snackbar.info('open')"
      @opened="() => Snackbar.success('opened')"
      @close="() => Snackbar.warning('close')"
      @closed="() => Snackbar.error('closed')"
    >
      <div class="block">
        As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains
        on the carpet.
      </div>
    </var-popup>
  </div>
</template>

<script>
import { Snackbar } from '@varlet/ui'
import AppType from '~/components/AppType'
import { reactive, toRefs } from 'vue'

export default {
  name: 'PopupExample',
  components: {
    AppType,
  },
  setup() {
    const values = reactive({
      center: false,
      top: false,
      bottom: false,
      left: false,
      right: false,
      overlayClass: false,
      overlayStyle: false,
      event: false,
    })

    return {
      ...toRefs(values),
      Snackbar,
    }
  },
}
</script>

<style>
.custom-overlay {
  background: rgba(0, 0, 0, 0.3);
}
</style>

<style scoped lang="less">
.mt-10 {
  margin-top: 10px;
}

.block {
  padding: 20px 24px;
  width: 250px;
}
</style>
