<script setup lang="ts">
import { Themes } from '@varlet/ui'

const show = ref(false)
const date = ref('2021-04-08')
const locale = ref('en-US')
const messages = ref({
  'zh-CN': Locale.zhCN,
  'en-US': Locale.enUS,
})

onMounted(() => {
  setLocale(locale.value)
})

function handleClick() {
  show.value = true
}

function switchLocale() {
  const targetLocale = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  setLocale(targetLocale)
}

function showDialog() {
  Dialog()
}

function setLocale(value: string) {
  locale.value = value

  // for functional component
  Locale.add(value, messages.value[value as keyof typeof messages.value])
  Locale.use(value)
}
</script>

<template>
  <var-locale-provider :locale="locale" :messages="messages">
    <var-style-provider :style-vars="Themes.md3Dark">
      <var-space>
        <var-button type="primary" @click="handleClick">Show Popup</var-button>
        <var-button type="primary" @click="showDialog">Show Dialog</var-button>
        <var-button type="primary" @click="switchLocale">Switch Locale</var-button>
      </var-space>

      <var-date-picker style="width: 400px; margin-top: 20px" v-model="date" />

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
    </var-style-provider>
  </var-locale-provider>
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
