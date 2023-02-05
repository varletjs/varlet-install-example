<template>
  <div id="app">
    <img alt="VarLet logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your varlet-vue2" @toggleTheme="toggleThemeHandle"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import dark from '@varlet-vue2/ui/es/themes/dark'
import { StyleProvider } from '@varlet-vue2/ui'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    currentTheme: null
  }),
  methods: {
    toggleThemeHandle() {
      this.currentTheme = this.currentTheme ? null : dark
      StyleProvider(this.currentTheme)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  padding-top: 60px;
  transition: background-color 0.25s, color 0.25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
