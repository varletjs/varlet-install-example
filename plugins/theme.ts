import { defineNuxtPlugin } from '#app'
import { $localStorage } from '~/utils/localStorage'
import { get } from 'lodash-es'
import config from 'assets/varlet-nuxt.config.json'
import { StyleProvider, StyleVars } from '@varlet/ui'
import dark from '@varlet/ui/es/themes/dark'
import { ref } from 'vue'

type Themes = 'darkThemes' | 'themes'

export default defineNuxtPlugin((nuxtApp) => {
  const getThemes = (themes = 'VARLET_THEMES'): Themes => {
    let currentThemes = $localStorage.get(themes) as Themes
    
    if (!currentThemes && process.client) {
      currentThemes = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'darkThemes' : 'themes'
      $localStorage.set(themes, currentThemes)
    }
    
    return currentThemes
  }

  const theme = ref(getThemes())

  const setThemes = (name: Themes) => {
    theme.value = name

    const styleVars = Object.entries(get(config, name, {})).reduce((styleVars, [key, value]) => {
      styleVars[`--config-${key}`] = value as string
      return styleVars
    }, {} as StyleVars)
    
    StyleProvider(name === 'darkThemes' ? Object.assign(dark, styleVars) : styleVars)
  }

  return {
    provide: {
      theme:  {
        theme,
        getThemes, 
        setThemes, 
      },
    },
  }
})
