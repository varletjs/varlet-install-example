<template>
  <header>
    <var-app-bar class="app-bar" title-position="left" :title="title">
      <template #left>
        <var-button v-if="showBackIcon" text round color="transparent" text-color="#fff">
          <var-icon name="chevron-left" :size="28" style="margin-top: 1px" @click="back" />
        </var-button>
        <var-button v-else text round color="transparent" text-color="#fff">
          <var-icon name="github" :size="28" style="margin-top: 1px" @click="toGithub" />
        </var-button>
      </template>
      <template #right>
        <var-button text round color="transparent" text-color="#fff" @click="toggleTheme">
          <var-icon
            size="24px"
            color="#fff"
            :name="currentThemes === 'themes' ? 'white-balance-sunny' : 'weather-night'"
          />
        </var-button>
      </template>
    </var-app-bar>
  </header>
  <NuxtPage />
</template>

<script lang="ts">
import { defineNuxtComponent } from '#app'
import { useRoute, useRouter } from 'vue-router'
import config from '~/assets/varlet-nuxt.config.json'
import { get } from 'lodash-es'
import { ref, watch } from 'vue'
import { useSystemStore } from '~/store/system'
import { $localStorage } from './plugins/init.client'
import dark from '@varlet/ui/es/themes/dark'
import { StyleProvider } from '@varlet/ui'

export default defineNuxtComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const github = get(config, 'github')
    const showBackIcon = ref(false)
    const title = ref('')
    const themesKey = get(config, 'themesKey')
    const system = useSystemStore()
    const currentThemes = ref(system.getBrowserThemes(themesKey))

    watch(
      () => route.path,
      (to: string) => {
        showBackIcon.value = to !== '/'
        title.value = to.substr(1)
      }
    )

    const toGithub = () => {
      window.top!.open(github)
    }

    const toggleTheme = () => {
      currentThemes.value = currentThemes.value === 'darkThemes' ? 'themes' : 'darkThemes'
      $localStorage.set(themesKey, currentThemes.value)
      StyleProvider(currentThemes.value === 'darkThemes' ? dark : null)
    }

    onBeforeMount(() => {
      StyleProvider(currentThemes.value === 'darkThemes' ? dark : null)
    })

    const back = () => {
      router.go(-1)
    }
    return { showBackIcon, toGithub, back, title, toggleTheme, currentThemes }
  },
})
</script>

<style lang="less">
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

body {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
  color: var(--color-text);
  background-color: var(--color-body);
}
.app-bar {
  text-transform: capitalize;
}
</style>
