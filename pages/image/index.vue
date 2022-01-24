<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-image src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

    <app-type>Fit Mode</app-type>
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

    <app-type>Set Radius</app-type>
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

    <app-type>Use Ripple</app-type>
    <var-image ripple src="https://varlet.gitee.io/varlet-ui/cat.jpg" />

    <app-type>Use LazyLoad</app-type>
    <var-image lazy src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
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
