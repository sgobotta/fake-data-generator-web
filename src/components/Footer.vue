<template>
  <div class="footer">
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        <a class="link" :href="cambaUrl" target="_blank">
          {{ new Date().getFullYear() }} - <strong>cambá</strong>.coop
        </a>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      cambaUrl: 'https://camba.coop/'
    }
  }
}
</script>

<style>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
}
.link {
  text-decoration: none;
  color: rgba(0,0,0,.87);
}
</style>
