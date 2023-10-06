<template>
  <div class="logodiv"><img alt="Aquila logo" src="./assets/logo.png" class="logo"></div>
  <KayitOl/>
</template>

<script>
import KayitOl from './components/KayitOl.vue'

export default {
  name: 'App',
  components: {
    KayitOl
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logodiv .logo{
  width: 10rem;
  height: auto;
}
</style>
