<template>
    <section>
        <div class="descricao">
            <p>{{slide.titulo}}</p>
            <p>{{slide.mensagem}}</p>
        </div>
        <transition name="fade">
            <div class="imagens">
                <img class="imagem" v-for="(image,i) in slide.imagens" :src="image.endereco" v-bind:key="i" />
            </div>
        </transition>
        <Whats />
    </section>
</template>

<script>
import Whats from "./Whats";

export default {
    components: {
        Whats
    },
    props:{
        slide: Object
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    .descricao {
        text-align: center;
    }

    .descricao p {
        padding: 5px;
        font-family: 'Lobster';
        font-size: 1.5em;
    }
    
    .imagens{
        margin: 25px;
    }

    .imagem{
        border-radius: 5px;
    }

    img{
        width: 100%;
        height: 100%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

@media screen and (min-width: 720px){
    .imagens{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 25px;
    }

    .imagem{
        margin: 10px;
    }

    img{
        width: 25vw;
        height: 25vh;
    }
}
    
</style>