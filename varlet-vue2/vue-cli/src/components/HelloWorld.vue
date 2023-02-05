<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      The official documentation address of the component library
      <a href="https://varlet.gitee.io/varlet-ui-vue2/#/en-US/index" target="_blank" rel="noopener">varlet-vue2 documentation</a>.
    </p>
    <h3>Basic use</h3>
    <ul>
      <li><var-button @click="handleClick">Say Hello</var-button></li>
    </ul>
    <h3>Toggle Theme</h3>
    <ul>
      <li><var-button block @click="$emit('toggleTheme')">切换主题</var-button></li>
    </ul>
  </div>
</template>

<script>
import { Snackbar } from '@varlet-vue2/ui'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handleClick() {
      Snackbar('Hello')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
