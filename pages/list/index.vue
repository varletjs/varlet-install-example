<template>
  <div class="example">
    <var-tabs v-model:active="current" sticky offset-top="54px" style="margin-bottom: 10px">
      <var-tab>Basic Usage</var-tab>
      <var-tab>Load Fail</var-tab>
      <var-tab>Tip Text</var-tab>
    </var-tabs>

    <var-tabs-items v-model:active="current">
      <var-tab-item>
        <var-list :finished="basicUsageFinished" v-model:loading="basicUsageLoading" @load="basicUsageLoad">
          <var-cell :key="d" v-for="d in basicUsageList"> List Item : {{ d }} </var-cell>
        </var-list>
      </var-tab-item>
      <var-tab-item>
        <var-list
          :finished="loadFailFinished"
          v-model:error="error"
          v-model:loading="loadFailLoading"
          @load="loadFailLoad"
        >
          <var-cell :key="d" v-for="d in loadFailList"> List Item : {{ d }} </var-cell>
        </var-list>
      </var-tab-item>
      <var-tab-item>
        <var-list
          :loading-text="'loading QAQ'"
          :finished-text="'finished ORZ'"
          :error-text="'error TNT'"
          :finished="tipTextFinished"
          v-model:loading="tipTextLoading"
          @load="tipTextLoad"
        >
          <var-cell :key="d" v-for="d in tipTextList"> List Item : {{ d }} </var-cell>
        </var-list>
      </var-tab-item>
    </var-tabs-items>
  </div>
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
export default defineNuxtComponent({
  setup() {
    const values = reactive({
      current: 0,
      basicUsageLoading: false,
      loadFailLoading: false,
      tipTextLoading: false,
      basicUsageFinished: false,
      loadFailFinished: false,
      tipTextFinished: false,
      error: false,
      basicUsageList: [],
      loadFailList: [],
      tipTextList: [],
    })
    const basicUsageLoad = () => {
      values.basicUsageLoading = true
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          values.basicUsageList.push(values.basicUsageList.length + 1)
        }
        if (values.basicUsageList.length >= 60) {
          values.basicUsageFinished = true
        }
        values.basicUsageLoading = false
      }, 1000)
    }
    const loadFailLoad = () => {
      setTimeout(() => {
        if (values.loadFailList.length === 40) {
          values.error = true
          values.loadFailLoading = false
          return
        }

        for (let i = 0; i < 20; i++) {
          values.loadFailList.push(values.loadFailList.length + 1)
        }

        values.loadFailLoading = false
      }, 1000)
    }
    const tipTextLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          values.tipTextList.push(values.tipTextList.length + 1)
        }

        values.tipTextLoading = false

        if (values.tipTextList.length >= 60) {
          values.tipTextFinished = true
        }
      }, 1000)
    }
    onMounted(() => {
      basicUsageLoad()
    })
    return {
      ...toRefs(values),
      basicUsageLoad,
      loadFailLoad,
      tipTextLoad,
    }
  },
})
</script>
