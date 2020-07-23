<template>
  <div id="app" class="fundo">
    <Header />
    <router-view />
    <RedesSociais />
  </div>
</template>

<script>
import Header from './components/Header';
import RedesSociais from './components/RedesSociais';


export default {
  components: {
    Header,
    RedesSociais
  }
}
</script>

<style>
* {
  padding:0;
  margin:0;
  vertical-align:baseline;
  list-style:none;
  border:0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
.fundo {
  background-color: white;
}
</style>
