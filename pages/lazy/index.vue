<template>
  <div class="example">
    <app-type> Basic Usage </app-type>
    <var-space>
      <img class="cat" v-lazy="lazy" />
      <img class="cat" v-lazy="lazy" />
      <img class="cat" v-lazy="lazy" />
      <img class="cat" v-lazy="lazy" />
      <img class="cat" v-lazy="lazy" />
      <img class="cat" v-lazy="lazy" />
    </var-space>

    <app-type> Background Image Lazy Load </app-type>
    <div class="cat height" v-lazy:background-image="lazy"></div>

    <app-type> Inline Attributes </app-type>
    <img class="cat" v-lazy="lazy" lazy-loading="loading" lazy-error="error" lazy-attempt="3" />
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const data = reactive({
      lazy: 'https://varlet.gitee.io/varlet-ui/cat.jpg',
      loading: 'https://xxx.cn/loading.png',
      error: 'https://xxx.cn/error.png',
    })
    return { ...toRefs(data) }
  },
})
</script>
<style lang="less" scoped>
.cat {
  width: 100%;
  object-fit: cover;
  background-size: cover;
  pointer-events: none;
}
.height {
  height: 200px;
}
</style>
