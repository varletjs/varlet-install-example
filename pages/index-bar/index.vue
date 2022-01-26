<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-index-bar duration="300" :sticky-offset-top="54" @change="change">
      <div v-for="item in list" :key="item">
        <var-index-anchor :index="item" class="var-index-anchor__example" :style="{ background: bgColor, color }"> Title {{ item }} </var-index-anchor>
        <var-cell>{{ item }} Text</var-cell>
        <var-cell>{{ item }} Text</var-cell>
        <var-cell>{{ item }} Text</var-cell>
      </div>
    </var-index-bar>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, watch } from "vue";
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'

export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const list = ref([])
    const bgColor = ref('')
    const color = ref('')
    const { $theme } = useNuxtApp()

    onMounted(() => {
      for (let i = 0; i < 26; i++) {
        list.value.push(String.fromCharCode(65 + i))
      }
    })

    watch(
      $theme.currentTheme,
      (newVal) => {
        bgColor.value = newVal === 'darkThemes' ? 'rgb(41 42 45)' : '#e7edf7'
        color.value = newVal === 'darkThemes' ? '#3980e8' : '#2e67ba'
      },
      { immediate: true }
    )

    const change = (value) => {
      console.log(value)
    }
    return {
      color,
      bgColor,
      list,
      change,
    }
  },
})
</script>
<style lang="less" scoped>
:deep(.var-index-anchor__example) {
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.25s;
}
</style>
