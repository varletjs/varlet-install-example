<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-swipe class="swipe" ref="swipe">
      <template v-for="pic in pics">
        <var-swipe-item>
          <img class="swipe-item" :src="pic.src" />
        </var-swipe-item>
      </template>
    </var-swipe>

    <app-type>Forbid Loop</app-type>
    <var-swipe class="swipe" :loop="false">
      <template v-for="pic in pics">
        <var-swipe-item>
          <img class="swipe-item" :src="pic.src" />
        </var-swipe-item>
      </template>
    </var-swipe>

    <app-type>Autoplay</app-type>
    <var-swipe class="swipe" :autoplay="2000">
      <template v-for="pic in pics">
        <var-swipe-item>
          <img class="swipe-item" :src="pic.src" />
        </var-swipe-item>
      </template>
    </var-swipe>

    <app-type>Vertical Swipe</app-type>
    <var-swipe class="swipe" vertical>
      <template v-for="pic in pics">
        <var-swipe-item>
          <img class="swipe-item" :src="pic.src" />
        </var-swipe-item>
      </template>
    </var-swipe>

    <app-type>Handle Change</app-type>
    <var-swipe class="swipe" @change="handleChange">
      <template v-for="pic in pics">
        <var-swipe-item>
          <img class="swipe-item" :src="pic.src" />
        </var-swipe-item>
      </template>
    </var-swipe>

    <app-type>Custom Indicator</app-type>
    <var-swipe class="swipe">
      <template v-for="pic in pics">
        <var-swipe-item>
          <img class="swipe-item" :src="pic.src" />
        </var-swipe-item>
      </template>

      <template #indicator="{ index, length }">
        <div class="indicators">{{ index + 1 }} / {{ length }}</div>
      </template>
    </var-swipe>

    <div class="space"></div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
import { Snackbar } from '@varlet/ui'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const pics = ref([{
      src: 'https://varlet.gitee.io/varlet-ui/cat.jpg'
    }, {
      src: 'https://varlet.gitee.io/varlet-ui/cat2.jpg'
    }, {
      src: 'https://varlet.gitee.io/varlet-ui/cat3.jpg'
    }])
    const handleChange = (e: number) => {
      Snackbar('' + e)
    }
    return {
      pics,
      handleChange
    }
  },
})
</script>

<style scoped lang="less">
.swipe {
  height: 160px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.space {
  height: 20px;
}

.indicators {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 4px 0;
  color: #fff;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.6);
}
</style>