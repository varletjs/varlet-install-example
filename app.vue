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
  <div class="router-view__block">
    <NuxtPage />
  </div>
</template>

<script lang="ts">
import config from '~/varlet.config.json'
import { defineNuxtComponent, useNuxtApp } from '#app'
import { useRouter } from '#imports'
import { get } from 'lodash-es'
import { ref, computed } from 'vue'
import { useSystemStore } from '~/store/system'
import { Snackbar } from '@varlet/ui'
import { $localStorage } from '~/utils/localStorage'
import { pascalCase } from '~/utils/pascalCase'

export default defineNuxtComponent({
  setup() {
    const router = useRouter()
    const github = get(config, 'github')
    const themesKey = get(config, 'themesKey')
    const deviceTip = get(config, 'deviceTip')
    const system = useSystemStore()
    const currentThemes = ref('')
    const { $theme } = useNuxtApp()

    const showBackIcon = computed(() => {
      return title.value !== 'Index'
    })

    const title = computed(() => {
      const name: string = router.currentRoute.value.name ?? ''
      return pascalCase(name)
    })

    const toGithub = () => {
      window.top!.open(github)
    }

    const toggleTheme = () => {
      currentThemes.value = currentThemes.value === 'darkThemes' ? 'themes' : 'darkThemes'

      $localStorage.set(themesKey, currentThemes.value)
      $theme.setTheme(currentThemes.value as 'themes' | 'darkThemes')
    }

    onBeforeMount(async () => {
      currentThemes.value = await $theme.currentTheme.value
      $theme.setTheme(currentThemes.value as 'themes' | 'darkThemes')
      if (!system.isPhone) {
        Snackbar(deviceTip)
      }
    })

    const back = () => {
      router.back()
    }

    return { showBackIcon, toGithub, back, title, toggleTheme, currentThemes }
  },
})
</script>

<style lang="less">
* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

body {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
  transition: color 0.25s, background-color 0.25s;
  color: var(--color-text);
  background-color: var(--color-body);
}

header {
  position: fixed;
  z-index: 99;
  width: 100%;
  font-weight: bold;
}

.app-bar {
  text-transform: capitalize;
}

.router-view__block {
  padding: 54px 12px 15px;
}
</style>
