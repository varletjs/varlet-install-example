<template>
  <div class="example">
    <app-type>Basic Usage</app-type>
    <var-tabs v-model:active="basic">
      <var-tab>Option1</var-tab>
      <var-tab>Option2</var-tab>
      <var-tab>Option3</var-tab>
    </var-tabs>

    <app-type>Modify Style</app-type>
    <var-tabs
      elevation
      color="#2979ff"
      active-color="#fff"
      inactive-color="hsla(0, 0%, 100%, .6)"
      v-model:active="modify"
    >
      <var-tab>Option1</var-tab>
      <var-tab>Option2</var-tab>
      <var-tab>Option3</var-tab>
    </var-tabs>

    <app-type>Tab Disabled</app-type>
    <var-tabs
      elevation
      color="#2979ff"
      active-color="#fff"
      inactive-color="hsla(0, 0%, 100%, .6)"
      disabled-color="#aaa"
      v-model:active="disabled"
    >
      <var-tab>Option1</var-tab>
      <var-tab>Option2</var-tab>
      <var-tab disabled>disabled</var-tab>
    </var-tabs>

    <app-type>Enable Scroll</app-type>
    <var-tabs
      elevation
      color="#2979ff"
      active-color="#fff"
      inactive-color="hsla(0, 0%, 100%, .6)"
      v-model:active="scroll"
    >
      <var-tab>Option1</var-tab>
      <var-tab>Option2</var-tab>
      <var-tab>Option3</var-tab>
      <var-tab>Option4</var-tab>
      <var-tab>Option5</var-tab>
      <var-tab>Option6</var-tab>
      <var-tab>Option7</var-tab>
      <var-tab>Option8</var-tab>
    </var-tabs>

    <app-type>Tab Vertical Layout</app-type>
    <var-tabs
      elevation
      item-direction="vertical"
      color="#2979ff"
      active-color="#fff"
      inactive-color="hsla(0, 0%, 100%, .6)"
      v-model:active="tabLayout"
    >
      <var-tab>
        <var-icon class="icon" name="information" />
        <div>Option1</div>
      </var-tab>
      <var-tab>
        <var-icon class="icon" name="warning" />
        <div>Option2</div>
      </var-tab>
      <var-tab>
        <var-icon class="icon" name="error" />
        <div>Option3</div>
      </var-tab>
    </var-tabs>

    <app-type>Tabs Vertical Layout</app-type>
    <var-tabs
      class="vertical-tabs"
      elevation
      layout-direction="vertical"
      color="#2979ff"
      active-color="#fff"
      inactive-color="hsla(0, 0%, 100%, .6)"
      v-model:active="tabsLayout"
    >
      <var-tab>Option1</var-tab>
      <var-tab>Option2</var-tab>
      <var-tab>Option3</var-tab>
    </var-tabs>

    <app-type>View Relation</app-type>
    <var-tabs
      elevation
      color="#2979ff"
      active-color="#fff"
      inactive-color="hsla(0, 0%, 100%, .6)"
      v-model:active="relation"
    >
      <var-tab>Option1</var-tab>
      <var-tab>Option2</var-tab>
      <var-tab>Option3</var-tab>
    </var-tabs>

    <var-tabs-items v-model:active="relation">
      <var-tab-item>
        The way she came into the place. I knew right then and there. there was something different about this girl.
      </var-tab-item>
      <var-tab-item>
        The girl was persuasive. the girl I could not trust. The girl was bad. the girl was dangerous. I never know.
      </var-tab-item>
      <var-tab-item>
        She's so dangerous. the girl is so dangerous. Take away my money, throw away my time. You can call me honey. but
        you're no damn good for me.
      </var-tab-item>
    </var-tabs-items>

    <app-type>Sticky Layout</app-type>
    <var-tabs
      sticky
      elevation
      color="#2979ff"
      active-color="#fff"
      inactive-color="hsla(0, 0%, 100%, .6)"
      :offset-top="54"
      v-model:active="sticky"
    >
      <var-tab>Option1</var-tab>
      <var-tab>Option2</var-tab>
      <var-tab>Option3</var-tab>
    </var-tabs>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue'
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
export default defineNuxtComponent({
  components: {
    AppType,
  },
  setup() {
    const data = reactive({
      basic: 0,
      modify: 0,
      disabled: 0,
      scroll: 0,
      tabLayout: 0,
      tabsLayout: 0,
      relation: 0,
      sticky: 0,
    })
    return { ...toRefs(data) }
  },
})
</script>
<style lang="less" scoped>
.example {
  padding-bottom: 20px;
  .icon {
    margin-bottom: 5px;
  }
  .vertical-tabs {
    width: 80px;
    height: 120px;
  }
}
</style>
