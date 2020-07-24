<template>
  <div id="app" class="fundo">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

</style>
