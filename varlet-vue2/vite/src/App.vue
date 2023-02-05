<script setup>
import dark from '@varlet-vue2/ui/es/themes/dark';
import { StyleProvider } from '@varlet-vue2/ui';
import HelloWorld from './components/HelloWorld.vue';

let currentTheme = null;
const toggleThemeHandle = () => {
  currentTheme = currentTheme ? null : dark;
  StyleProvider(currentTheme);
};
</script>

<template>
  <div id="app">
    <img alt="VarLet logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your varlet-vue2" @toggleTheme="toggleThemeHandle" />
  </div>
</template>

<style scoped>
#app {
  height: 100vh;
  padding-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: var(--color-text);
  text-align: center;
  background-color: var(--color-body);
  transition: background-color 0.25s, color 0.25s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
