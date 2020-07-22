<template>
  <div class="home">
    <Perfil />
    <Carousel :slides="slides" @alterarSite="alterarSite" />
    <!-- <Galeria :slide="slides[index] "/> -->
    <Facebook perfil="studiohallarq" />
    <Instagram perfil="studiohallarq" />
    <Whats :telefone="5548996869837" />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel";
// import Galeria from "@/components/Galeria";
import Whats from "@/components/Whats";
import Perfil from "@/components/Perfil";
import Instagram from "@/components/Instagram";
import Facebook from "@/components/Facebook";

export default {
  name: 'Home',
  components: {
    Carousel,
    // Galeria
    Whats,
    Instagram,
    Facebook,
    Perfil
  },
  data() {
    return {
      slides: [
        {
          titulo: "Sacada Gourmet",
          mensagem: "Florianópolis - SC 3,0m²",
          mainImg: require('@/assets/projeto_01/cena-02.png'),
          imagens: [
            {
              endereco: require('@/assets/projeto_01/cena-02.png')
            },
            {
              endereco: require('@/assets/projeto_01/cena-03.png')
            },
            {
              endereco: require('@/assets/projeto_01/cena-04.png')
            }
          ]
        },
        {
          titulo: "Suíte Casal MC",
          mensagem: "Palhoça - SC 12,0m²",
          mainImg: require('@/assets/projeto_02/suite-00.png'),
          imagens: [
            {
              endereco: require('@/assets/projeto_02/suite-00.png')
            },
            {
              endereco: require('@/assets/projeto_02/suite-01.png')
            },
            {
              endereco: require('@/assets/projeto_02/suite-02.png')
            },
            {
              endereco: require('@/assets/projeto_02/suite-03.png')
            },
            {
              endereco: require('@/assets/projeto_02/suite-04.png')
            }
          ]
        },
        {
          titulo: "Living NR",
          mensagem: "Bela Vista - SC 10,0m²",
          mainImg: require('@/assets/projeto_03/cena-01.png'),
          imagens: [
            {
              endereco: require('@/assets/projeto_03/cena-01.png')
            },
            {
              endereco: require('@/assets/projeto_03/cena-02.png')
            },
            {
              endereco: require('@/assets/projeto_03/cena-04.png')
            },
            {
              endereco: require('@/assets/projeto_03/cena-06.png')
            },
            {
              endereco: require('@/assets/projeto_03/cena-07.png')
            }
          ]
        },
        {
          titulo: "Suíte NR",
          mensagem: "Bela Vista - SC 10,0m²",
          mainImg: require('@/assets/projeto_04/imagem-01.png'),
          imagens: [
            {
              endereco: require('@/assets/projeto_04/imagem-01.png')
            },
            {
              endereco: require('@/assets/projeto_04/imagem-02.png')
            },
            {
              endereco: require('@/assets/projeto_04/imagem-03.png')
            },
            {
              endereco: require('@/assets/projeto_04/imagem-04.png')
            },
            {
              endereco: require('@/assets/projeto_04/imagem-05.png')
            },
            {
              endereco: require('@/assets/projeto_04/imagem-06.png')
            },
            {
              endereco: require('@/assets/projeto_04/imagem-07.png')
            }
          ]
        }
      ],
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