<template>
    <div class="menu">
        <router-link class="link" to="/">início</router-link>
        <router-link class="link" to="/projetos">projetos</router-link>
        <!-- <router-link class="link" to="/clientes">clientes</router-link> -->
        <!-- <router-link class="link" to="/contato">contato</router-link> -->
      </div>
</template>

<script>


export default {
    components: {

    }
}
</script>

<style scoped>
.link, .link:active {
  padding: 10px;
  color: #000;
  font-size: 1.2em;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Raleway';
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 12px; */
  margin-top: 0;
  width: 100%;
}

@media screen and (min-width: 720px){
  .link, .link:active {
    font-size: 1.6em;
  }
}
</style>