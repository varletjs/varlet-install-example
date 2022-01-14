<template>
  <div class="example">
    <app-type>Theme Color Badge</app-type>
    <var-space>
      <var-badge />
      <var-badge type="primary" />
      <var-badge type="info" />
      <var-badge type="warning" />
      <var-badge type="success" />
      <var-badge type="danger" />
    </var-space>

    <app-type>Dot Badge</app-type>
    <var-badge dot type="danger" />

    <app-type>Custom Content Badge</app-type>
    <var-space>
      <var-badge type="danger" value="badge" />
      <var-badge type="danger" value="hot" />
      <var-badge type="danger" value="66" />
    </var-space>

    <app-type>Maximum</app-type>
    <var-space>
      <var-badge type="danger" :value="value" :max-value="maxValue" />
      <var-badge type="danger" :value="value1" :max-value="maxValue" />
    </var-space>
    <app-type>Different Positioning Badges</app-type>
    <var-space direction="column" size="large" class="pl">
      <var-badge type="danger" position="right-top">
        <var-chip plain :round="false" color="#009688">The Upper Right</var-chip>
      </var-badge>
      <var-badge type="danger" position="right-bottom">
        <var-chip plain :round="false" color="#009688">The Lower Right</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-top">
        <var-chip plain :round="false" color="#009688">The Upper Left</var-chip>
      </var-badge>
      <var-badge type="danger" position="left-bottom">
        <var-chip plain :round="false" color="#009688">The Lower Left</var-chip>
      </var-badge>
    </var-space>

    <app-type>Whether To Display The Badge</app-type>
    <var-space>
      <var-button @click="handleChange"> Click To Change The State </var-button>
      <var-badge type="danger" position="right-top" :hidden="hidden">
        <var-chip plain :round="false" color="#009688">Badge</var-chip>
      </var-badge>
    </var-space>

    <app-type>Custom Badge Colors</app-type>
    <var-badge color="#6200ea" position="right-top">
      <var-chip plain :round="false" color="#009688">Badge</var-chip>
    </var-badge>

    <app-type>Custom Badge Icons</app-type>
    <var-badge color="#6200ea" position="right-top" icon="notebook">
      <var-chip plain :round="false" color="#009688">Badge</var-chip>
    </var-badge>
  </div>
</template>
<script>
import { defineNuxtComponent } from '#app'
import AppType from '~/components/appType.vue'
import { ref } from 'vue'

export default defineNuxtComponent({
  components: {
    AppType,
  },
  name: 'BadgeExample',
  setup() {
    const hidden = ref(false)
    const value = ref(88)
    const value1 = ref(188)
    const maxValue = ref(99)
    const handleChange = () => {
      hidden.value = !hidden.value
    }
    return {
      value,
      value1,
      maxValue,
      hidden,
      handleChange,
    }
  },
})
</script>
<style lang="less" scoped>
.pl {
  padding-left: 12px;
}
</style>
