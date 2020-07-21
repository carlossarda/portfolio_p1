<template>
  <div id="app" class="fundo">
      <Header />
      <Carousel :slides="slides" @alterarSite="alterarSite" />
      <Galeria :slide="slides[index] "/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Galeria from "./components/Galeria";

export default {
  name: "App",
  components: {
    Carousel,
    Galeria,
    Header
  },
  data() {
    return {
      slides: [
        {
          titulo: "Sacada Gourmet",
          mensagem: "Florianópolis - SC 3,0m²",
          mainImg: require('./assets/projeto_01/cena-02.png'),
          imagens: [
            {
              endereco: require('./assets/projeto_01/cena-02.png')
            },
            {
              endereco: require('./assets/projeto_01/cena-03.png')
            },
            {
              endereco: require('./assets/projeto_01/cena-04.png')
            }
          ]
        },
        {
          titulo: "Suíte Casal MC",
          mensagem: "Palhoça - SC 12,0m²",
          mainImg: require('./assets/projeto_02/suite-00.png'),
          imagens: [
            {
              endereco: require('./assets/projeto_02/suite-00.png')
            },
            {
              endereco: require('./assets/projeto_02/suite-01.png')
            },
            {
              endereco: require('./assets/projeto_02/suite-02.png')
            },
            {
              endereco: require('./assets/projeto_02/suite-03.png')
            },
            {
              endereco: require('./assets/projeto_02/suite-04.png')
            }
          ]
        },
        {
          titulo: "Living NR",
          mensagem: "Bela Vista - SC 10,0m²",
          mainImg: require('./assets/projeto_03/cena-01.png'),
          imagens: [
            {
              endereco: require('./assets/projeto_03/cena-01.png')
            },
            {
              endereco: require('./assets/projeto_03/cena-02.png')
            },
            {
              endereco: require('./assets/projeto_03/cena-04.png')
            },
            {
              endereco: require('./assets/projeto_03/cena-06.png')
            },
            {
              endereco: require('./assets/projeto_03/cena-07.png')
            }
          ]
        },
        {
          titulo: "Suíte NR",
          mensagem: "Bela Vista - SC 10,0m²",
          mainImg: require('./assets/projeto_04/imagem-01.png'),
          imagens: [
            {
              endereco: require('./assets/projeto_04/imagem-01.png')
            },
            {
              endereco: require('./assets/projeto_04/imagem-02.png')
            },
            {
              endereco: require('./assets/projeto_04/imagem-03.png')
            },
            {
              endereco: require('./assets/projeto_04/imagem-04.png')
            },
            {
              endereco: require('./assets/projeto_04/imagem-05.png')
            },
            {
              endereco: require('./assets/projeto_04/imagem-06.png')
            },
            {
              endereco: require('./assets/projeto_04/imagem-07.png')
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
};
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
  margin: 0;
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;

  height: auto;
}

.fundo {
  background-image: url('./assets/grit.png');
  
}

@media screen and (min-width: 720px){
  
}
</style>
