<template>
  <div id="app" class="fundo">
    <div id="nav">
      <Header />
      <div class="menu">
        <router-link class="link" to="/">Inicio</router-link>
        <router-link class="link" to="/projetos">Projetos</router-link>
        <router-link class="link" to="/clientes">Clientes</router-link>
        <router-link class="link" to="/contato">Contato</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  components: {
    Header
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
  color: #2c3e50;
}

.link, .link:active {
  padding: 10px;
  color: #2c3e50;
  font-size: 1.6em;
  text-decoration: none;
  font-family: 'Lobster';
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fundo {
  background-image: url('./assets/grit.png');
  height: 100vh;
}
@media screen and (min-width: 720px){
  #nav {
    display: flex;
  }
  .link, .link:active {
  font-size: 1.8em;
}
}
</style>
