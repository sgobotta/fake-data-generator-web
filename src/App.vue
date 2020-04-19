<template>
  <div id="app">
    <ToolBar />
    <router-view/>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar'

export default {
  name: 'App',
  components: {
    ToolBar
  }
}
</script>

<style>
html {
  background-color: #ccc;
}
#app {
  font-family: 'Montserrat', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
