<template>
  <var-menu>
    <var-button type="primary">Hello varlet and nuxt3</var-button>

    <template #menu>
      <var-cell>Cell 1</var-cell>
      <var-cell>Cell 2</var-cell>
      <var-cell>Cell 3</var-cell>
    </template>
  </var-menu>
</template>

<style>
body {
  transition: background-color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>
