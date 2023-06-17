<script setup lang="ts">
const show = ref(false)

function handleClick() {
  show.value = true
}
</script>

<template>
  <var-tooltip content="Show Popup">
    <var-button type="primary" @click="handleClick">Show Popup</var-button>
  </var-tooltip>

  <var-popup v-model:show="show">
    <div class="popup-example-block">
      <var-swipe class="swipe-example" :autoplay="1000">
        <var-swipe-item>
          <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" />
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" />
        </var-swipe-item>
      </var-swipe>
    </div>
  </var-popup>
</template>

<style>
body {
  transition: background-color 0.25s;
  color: var(--color-text);
  background-color: var(--color-body);
}

.popup-example-block {
  padding: 20px 24px;
  width: 250px;
}

.swipe-example {
  height: 160px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
</style>
