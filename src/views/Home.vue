<template>
  <div class="home">
    <Perfil />
    <Carousel :slides="slides" @alterarSite="alterarSite" :autoplay=true />
    <!-- <Galeria :slide="slides[index] "/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel";
// import Galeria from "@/components/Galeria";
import Perfil from "@/components/Perfil";

export default {
  name: 'Home',
  components: {
    Carousel,
    // Galeria
    Perfil
  },
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      index:0
    };
  },
  methods: {
    alterarSite(index){
      this.index = index;
    }
  }
}
</script>

<style scoped>

@media screen and (min-width: 720px){
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>