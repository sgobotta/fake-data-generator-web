<template>
  <div id="app">
    <ToolBar />
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToolBar from '@/components/ToolBar'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
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
}
</style>
