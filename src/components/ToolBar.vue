<template>
  <v-card
    class="toolbar"
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title>{{legend}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon :href="githubUrl" target="_blank">
        <v-icon>fa-github</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
import { version } from 'fake-data-generator'

export default {
  name: 'Toolbar',
  data () {
    return {
      githubUrl: 'http://github.com/Cambalab/fake-data-generator',
      title: `Fake data generator | v${version}`,
      legend: 'Just a small open-source script to create fake data given a simple JSON model.',
      version
    }
  }
}
</script>

<style>

</style>
