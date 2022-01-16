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
import { defineNuxtComponent } from '#app'
import { useRouter } from 'vue-router'
import config from '~/assets/varlet-nuxt.config.json'
import { get } from 'lodash-es'
import { ref,computed } from 'vue'
import { useSystemStore } from '~/store/system'
import { Snackbar } from '@varlet/ui'
import { $localStorage } from '~/utils/localStorage'

export default defineNuxtComponent({
  setup() {
    const router = useRouter()
    const github = get(config, 'github')
    const themesKey = get(config, 'themesKey')
    const deviceTip = get(config, 'deviceTip')
    const system = useSystemStore()
    const currentThemes = ref('')
    const showBackIcon = computed(()=>{
      return !!title.value
    })
    const title = computed(()=>{
      return router.currentRoute.value.path.substr(1)
    })

    const toGithub = () => {
      window.top!.open(github)
    }

    const toggleTheme = () => {
      currentThemes.value = currentThemes.value === 'darkThemes' ? 'themes' : 'darkThemes'
      $localStorage.set(themesKey, currentThemes.value)
      system.setThemes(currentThemes.value as 'themes'|'darkThemes')
    }

    onBeforeMount(async () => {
      currentThemes.value = await system.getBrowserThemes(themesKey)
      system.setThemes(currentThemes.value as 'themes'|'darkThemes')
      if(!system.isPhone){
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
}

body {
  padding: 0;
  margin: 0;
  font-family: Roboto, sans-serif;
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

.router-view__block{
  padding: 54px 12px 15px;
}
</style>
