import config from 'assets/varlet-nuxt.config.json'
import dark from '@varlet/ui/es/themes/dark'
import { defineNuxtPlugin } from '#app'
import { $localStorage } from '~/utils/localStorage'
import { get } from 'lodash-es'
import { StyleProvider, StyleVars } from '@varlet/ui'
import { ref } from 'vue'

type Themes = 'darkThemes' | 'themes'

export default defineNuxtPlugin((nuxtApp) => {
  const getTheme = (themes = 'VARLET_THEMES'): Themes => {
    let theme = $localStorage.get(themes) as Themes
    
    if (!theme && process.client) {
      theme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'darkThemes' : 'themes'
      $localStorage.set(themes, theme)
    }
    
    return theme
  }

  const currentTheme = ref(getTheme())

  const setTheme = (name: Themes) => {
    currentTheme.value = name

    const styleVars = Object.entries(get(config, name, {})).reduce((styleVars, [key, value]) => {
      styleVars[`--config-${key}`] = value as string
      return styleVars
    }, {} as StyleVars)
    
    StyleProvider(name === 'darkThemes' ? Object.assign(dark, styleVars) : styleVars)
  }

  return {
    provide: {
      theme:  {
        currentTheme,
        getTheme,
        setTheme,
      },
    },
  }
})
