<template>
    <div id="nav">
        <a href="/">
            <img :src="header">
        </a>
        <Menu />
    </div>
</template>

<script>
import Menu from './Menu';
export default {
    data: () => {
      return {
          header: require('../assets/logo-sem-fundo-preto.png')
      }
    },
    components: {
      Menu
  }
}
</script>

<style scoped>
#nav {
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
img {
    height: 160px;
    width: 370px;
}

@media screen and (min-width: 720px){
    img {
        height: 160px;
        width: 350px;
    }
    #nav {
        display: flex;
    }
}
</style>