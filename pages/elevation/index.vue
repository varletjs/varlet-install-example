<template>
  <div class="example list">
    <div class="list__item" :class="`var-elevation--${e}`" v-for="e in elevations" :key="e">
      {{ e }}
    </div>
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
    const elevations = Array.from({ length: 25 }).map((_, index) => index)
    return { elevations }
  },
})
</script>

<style lang='less' scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 2vw;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 25vw;
    color: var(--site-config-color-sub-text);
    margin: 2vw;
    transition: 0.25s background-color;
  }
}
</style>
