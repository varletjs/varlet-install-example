<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-index-bar duration="300" :sticky-offset-top="54" @change="change">
      <div v-for="item in list" :key="item">
        <var-index-anchor :index="item" class="var-index-anchor__example"> Title {{ item }} </var-index-anchor>
        <var-cell>{{ item }} Text</var-cell>
        <var-cell>{{ item }} Text</var-cell>
        <var-cell>{{ item }} Text</var-cell>
      </div>
    </var-index-bar>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from 'vue'
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const list = ref([])

    onMounted(() => {
      for (let i = 0; i < 26; i++) {
        list.value.push(String.fromCharCode(65 + i))
      }
    })

    const change = (value) => {
      console.log(value)
    }
    return {
      list,
      change,
    }
  },
})
</script>
<style lang="less" scoped>
.var-index-anchor__example {
  height: 42px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  transition: all 0.25s;
  background: rgb(41, 42, 45);
  color: rgb(57, 128, 232);
}
</style>
