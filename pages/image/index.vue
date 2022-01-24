<template>
  <div class="example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

    <app-type>{{ pack.fitMode }}</app-type>
    <var-space>
      <div class="fit-item">
        <var-image width="85px" height="85px" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
        <div>fill</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="cover" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
        <div>cover</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="contain" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
        <div>contain</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="none" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
        <div>none</div>
      </div>

      <div class="fit-item">
        <var-image width="85px" height="85px" fit="scale-down" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
        <div>scale-down</div>
      </div>
    </var-space>

    <app-type>{{ pack.setRadius }}</app-type>
    <var-space>
      <var-image
        width="85px"
        height="85px"
        fit="cover"
        :radius="10"
        src="https://varlet.gitee.io/varlet-ui/cat.jpg"
        style="margin-right: 10px"
      />

      <var-image width="85px" height="85px" fit="cover" radius="50%" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </var-space>

    <app-type>{{ pack.useRipple }}</app-type>
    <var-image ripple src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

    <app-type>{{ pack.useLazyLoad }}</app-type>
    <var-image lazy src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
  </div>
</template>

<script>
const pack = {
  basicUsage: 'Basic Usage',
  fitMode: 'Fit Mode',
  setRadius: 'Set Radius',
  useRipple: 'Use Ripple',
  useLazyLoad: 'Use LazyLoad',
}
import AppType from '~/components/AppType'
import { defineNuxtComponent } from '#app'

export default defineNuxtComponent({
  name: 'ImageExample',
  components: {
    AppType,
  },
  setup() {
    return { pack }
  },
})
</script>

<style scoped lang="less">
.fit-item {
  color: #888;
  text-align: center;
  margin-right: 11px;
  margin-bottom: 11px;

  div {
    margin-bottom: 5px;
  }
}
</style>
