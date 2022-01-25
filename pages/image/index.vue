<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-image :src="picUrl" />

    <app-type>Fit Mode</app-type>
    <var-space>
      <div class="fit-item">
        <var-image width="85px" height="85px" :src="picUrl" />
        <div>fill</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="cover" :src="picUrl" />
        <div>cover</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="contain" :src="picUrl" />
        <div>contain</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="none" :src="picUrl" />
        <div>none</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="scale-down" :src="picUrl" />
        <div>scale-down</div>
      </div>
    </var-space>

    <app-type>Set Radius</app-type>
    <var-space>
      <var-image width="85px" height="85px" fit="cover" :radius="10" :src="picUrl" style="margin-right: 10px" />

      <var-image width="85px" height="85px" fit="cover" radius="50%" :src="picUrl" />
    </var-space>

    <app-type>Use Ripple</app-type>
    <var-image ripple :src="picUrl" />

    <app-type>Use LazyLoad</app-type>
    <var-image lazy :src="picUrl" />
  </div>
</template>

<script>
import AppType from '~/components/AppType'
import { defineNuxtComponent } from '#app'

export default defineNuxtComponent({
  name: 'ImageExample',
  components: {
    AppType,
  },
  setup() {
    const picUrl = 'https://varlet.gitee.io/varlet-ui/cat.jpg'

    return {
      picUrl,
    }
  },
})
</script>
