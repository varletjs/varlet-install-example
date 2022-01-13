<template>
  <div class="example">
    <app-type>Theme Color Badge</app-type>
    <var-badge />
    <var-badge type="primary" />
    <var-badge type="info" />
    <var-badge type="warning" />
    <var-badge type="success" />
    <var-badge type="danger" />

    <app-type>Dot Badge</app-type>
    <var-badge dot type="danger" />

    <app-type>Custom Content Badge</app-type>
    <var-badge type="danger" value="badge" />
    <var-badge type="danger" value="hot" />
    <var-badge type="danger" value="66" />

    <app-type>Maximum</app-type>
    <var-badge type="danger" :value="value" :max-value="maxValue" />
    <var-badge type="danger" :value="value1" :max-value="maxValue" />

    <app-type>Different Positioning Badges</app-type>
    <div class="example__position">
      <var-badge type="danger" position="right-top">
        <var-chip plain :round="false" color="#009688">The Upper Right</var-chip>
      </var-badge>
      <br />
      <var-badge type="danger" position="right-bottom">
        <var-chip plain :round="false" color="#009688">The Lower Right</var-chip>
      </var-badge>
      <br />
      <var-badge type="danger" position="left-top">
        <var-chip plain :round="false" color="#009688">The Upper Left</var-chip>
      </var-badge>
      <br />
      <var-badge type="danger" position="left-bottom">
        <var-chip plain :round="false" color="#009688">The Lower Left</var-chip>
      </var-badge>
    </div>

    <app-type>Whether To Display The Badge</app-type>
    <var-button @click="handleChange"> Click To Change The State </var-button>
    <var-badge type="danger" position="right-top" :hidden="hidden">
      <var-chip plain :round="false" color="#009688">Badge</var-chip>
    </var-badge>

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
export default {
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
}
</script>
<style lang="less" scoped>
.var-badge {
  margin-right: 20px;
  margin-bottom: 8px;
}
.example {
	&__position {
		margin-left: 10px;
	}
}
</style>
